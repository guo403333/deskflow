// ============================================================
// MARKET DATA SIMULATOR
// Generates realistic intraday market movements
// ============================================================

class MarketSimulator {
  constructor() {
    this.baseData = JSON.parse(JSON.stringify(RatesData));
    this.bondPrices = {};
    this.volatilityRegime = 'normal'; // normal, volatile, calm
    this.newsImpact = 0; // -1 to 1, affects directional bias
    
    // Initialize bond prices from BondData
    BondData.bonds.forEach(bond => {
      this.bondPrices[bond.ticker] = {
        bid: bond.bidPrice,
        ask: bond.askPrice,
        lastBid: bond.bidPrice,
        lastAsk: bond.askPrice,
        high: bond.askPrice + 0.25,
        low: bond.bidPrice - 0.25,
        volume: Math.floor(Math.random() * 20) + 5 // in millions
      };
    });
  }

  // Generate random walk with mean reversion
  randomWalk(current, volatility, meanTarget = null) {
    const noise = (Math.random() - 0.5) * 2 * volatility;
    let drift = 0;
    
    if (meanTarget !== null) {
      drift = (meanTarget - current) * 0.01; // Mean reversion
    }
    
    // Add news impact
    drift += this.newsImpact * volatility * 0.5;
    
    return current + noise + drift;
  }

  // Update all market data (called every tick)
  tick(simTime) {
    const hour = simTime.getHours();
    const isActiveHours = hour >= 8 && hour <= 17;
    
    // Volatility multiplier based on time of day
    let volMultiplier = 1.0;
    if (hour === 8 || hour === 9) volMultiplier = 1.5; // Morning volatility
    if (hour === 12 || hour === 13) volMultiplier = 0.6; // Lunch lull
    if (hour >= 15) volMultiplier = 1.2; // Afternoon pick-up
    
    if (this.volatilityRegime === 'volatile') volMultiplier *= 2.0;
    if (this.volatilityRegime === 'calm') volMultiplier *= 0.5;

    // Update Treasuries
    Object.keys(this.baseData.treasuries).forEach(tenor => {
      const t = this.baseData.treasuries[tenor];
      const vol = 0.005 * volMultiplier;
      t.yield = Math.round(this.randomWalk(t.yield, vol) * 1000) / 1000;
      t.change = Math.round((t.yield - RatesData.treasuries[tenor].yield) * 1000) / 1000;
    });

    // Update FX
    Object.keys(this.baseData.fx).forEach(pair => {
      const f = this.baseData.fx[pair];
      let vol = 0.0005 * volMultiplier;
      if (pair === 'USD/CNH') vol = 0.0008 * volMultiplier;
      
      f.mid = Math.round(this.randomWalk(f.mid, vol) * 10000) / 10000;
      f.bid = Math.round((f.mid - 0.0005) * 10000) / 10000;
      f.ask = Math.round((f.mid + 0.0005) * 10000) / 10000;
      f.change = Math.round((f.mid - RatesData.fx[pair].mid) * 10000) / 10000;
    });

    // Update Indices
    Object.keys(this.baseData.indices).forEach(idx => {
      const i = this.baseData.indices[idx];
      const baseVal = RatesData.indices[idx].value;
      const vol = baseVal * 0.001 * volMultiplier;
      i.value = Math.round(this.randomWalk(i.value, vol));
      i.change = Math.round(((i.value - baseVal) / baseVal) * 1000) / 10;
    });

    // Update Bond Prices (only during active hours)
    if (isActiveHours) {
      this.updateBondPrices(volMultiplier);
    }
  }

  updateBondPrices(volMultiplier) {
    BondData.bonds.forEach(bond => {
      const bp = this.bondPrices[bond.ticker];
      if (!bp) return;

      let vol = 0.05 * volMultiplier; // Base bond price volatility
      
      // HY bonds are more volatile
      if (bond.type === 'HY') vol *= 3.0;
      // Distressed even more
      if (bond.bidPrice < 70) vol *= 2.0;

      bp.lastBid = bp.bid;
      bp.lastAsk = bp.ask;
      
      const midMove = this.randomWalk(0, vol);
      const spreadHalf = (bond.type === 'HY') ? 1.5 : 0.125;
      
      bp.bid = Math.round((bp.bid + midMove) * 100) / 100;
      bp.ask = Math.round((bp.bid + spreadHalf * 2) * 100) / 100;
      
      // Update high/low
      if (bp.ask > bp.high) bp.high = bp.ask;
      if (bp.bid < bp.low) bp.low = bp.bid;
      
      // Random volume additions
      if (Math.random() > 0.7) {
        bp.volume += Math.floor(Math.random() * 5) + 1;
      }
    });
  }

  // Apply a market shock event
  applyShock(type, magnitude) {
    switch(type) {
      case 'risk_off':
        // Treasuries rally, spreads widen, CNH weakens
        Object.keys(this.baseData.treasuries).forEach(tenor => {
          this.baseData.treasuries[tenor].yield -= magnitude * 0.05;
        });
        this.baseData.fx['USD/CNH'].mid += magnitude * 0.01;
        BondData.bonds.forEach(bond => {
          if (this.bondPrices[bond.ticker]) {
            const impact = bond.type === 'HY' ? magnitude * 2 : magnitude * 0.5;
            this.bondPrices[bond.ticker].bid -= impact;
            this.bondPrices[bond.ticker].ask -= impact;
          }
        });
        this.volatilityRegime = 'volatile';
        break;
        
      case 'risk_on':
        // Treasuries sell off, spreads tighten, CNH strengthens
        Object.keys(this.baseData.treasuries).forEach(tenor => {
          this.baseData.treasuries[tenor].yield += magnitude * 0.03;
        });
        this.baseData.fx['USD/CNH'].mid -= magnitude * 0.008;
        BondData.bonds.forEach(bond => {
          if (this.bondPrices[bond.ticker]) {
            const impact = bond.type === 'HY' ? magnitude * 1.5 : magnitude * 0.3;
            this.bondPrices[bond.ticker].bid += impact;
            this.bondPrices[bond.ticker].ask += impact;
          }
        });
        this.volatilityRegime = 'volatile';
        break;

      case 'china_specific':
        // Only affects China-related assets
        this.baseData.fx['USD/CNH'].mid += magnitude * 0.015;
        this.baseData.indices['Hang Seng'].value -= magnitude * 200;
        this.baseData.indices['CSI 300'].value -= magnitude * 50;
        BondData.bonds.forEach(bond => {
          if (this.bondPrices[bond.ticker]) {
            const impact = bond.type === 'HY' ? magnitude * 3 : magnitude * 0.8;
            this.bondPrices[bond.ticker].bid -= impact;
            this.bondPrices[bond.ticker].ask -= impact;
          }
        });
        break;

      case 'property_stress':
        // Only affects property HY names
        BondData.bonds.filter(b => b.sector === 'Real Estate').forEach(bond => {
          if (this.bondPrices[bond.ticker]) {
            this.bondPrices[bond.ticker].bid -= magnitude * 5;
            this.bondPrices[bond.ticker].ask -= magnitude * 4;
          }
        });
        break;
    }
  }

  // Get current market snapshot
  getSnapshot() {
    return {
      treasuries: this.baseData.treasuries,
      fx: this.baseData.fx,
      indices: this.baseData.indices,
      bonds: this.bondPrices,
      volatilityRegime: this.volatilityRegime
    };
  }

  // Get formatted price for display
  formatBondPrice(ticker) {
    const bp = this.bondPrices[ticker];
    if (!bp) return null;
    const bond = BondData.getBond(ticker);
    const change = bp.bid - bp.lastBid;
    return {
      ticker: ticker,
      issuer: bond.issuer,
      bid: bp.bid.toFixed(2),
      ask: bp.ask.toFixed(2),
      change: change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2),
      changeClass: change >= 0 ? 'positive' : 'negative',
      volume: `${bp.volume}M`,
      rating: bond.rating
    };
  }

  // Generate market color commentary
  generateMarketColor() {
    const colors = [
      `UST 10Y at ${this.baseData.treasuries['10Y'].yield.toFixed(2)}%, ${this.baseData.treasuries['10Y'].change >= 0 ? 'up' : 'down'} ${Math.abs(this.baseData.treasuries['10Y'].change * 100).toFixed(1)}bps. Asia IG spreads ${this.baseData.indices['iTraxx Asia IG'].change > 0 ? 'wider' : 'tighter'} by ${Math.abs(this.baseData.indices['iTraxx Asia IG'].change).toFixed(1)}bps.`,
      `USD/CNH at ${this.baseData.fx['USD/CNH'].mid.toFixed(4)}, ${this.baseData.fx['USD/CNH'].change > 0 ? 'weaker' : 'stronger'} CNH. PBOC fix expected around ${(this.baseData.fx['USD/CNY'].mid - 0.005).toFixed(4)}.`,
      `HSI ${this.baseData.indices['Hang Seng'].change >= 0 ? '+' : ''}${this.baseData.indices['Hang Seng'].change}%. China IG seeing ${this.volatilityRegime === 'volatile' ? 'heavy two-way flow' : 'quiet trading'}.`,
      `Property sector: COGARD ${this.bondPrices['COGARD'] ? this.bondPrices['COGARD'].bid.toFixed(0) : '45'}/${this.bondPrices['COGARD'] ? this.bondPrices['COGARD'].ask.toFixed(0) : '48'}, VNKRLE ${this.bondPrices['VNKRLE'] ? this.bondPrices['VNKRLE'].bid.toFixed(0) : '72'}/${this.bondPrices['VNKRLE'] ? this.bondPrices['VNKRLE'].ask.toFixed(0) : '74'}. ${this.newsImpact < 0 ? 'Sellers in control.' : 'Some bargain hunting interest.'}`
    ];
    return colors;
  }

  // Reset volatility after shock
  normalizeVolatility() {
    this.volatilityRegime = 'normal';
    this.newsImpact = 0;
  }
}
