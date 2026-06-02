// ============================================================
// DATA MODULE - Client Book, Products, Reference Data
// Offshore China Corporate Sales Trading Simulator
// ============================================================

const ClientData = {
  clients: [
    {
      id: 'cli_001',
      name: 'China National Petroleum Corp (CNPC)',
      type: 'SOE',
      tier: 1,
      sector: 'Oil & Gas',
      coverage: 'Primary',
      contacts: [
        { name: 'Wang Lei', title: 'Treasury Director', style: 'formal' },
        { name: 'Zhang Wei', title: 'VP Finance', style: 'relationship' }
      ],
      preferences: ['USD bonds', 'FX hedging', 'Cross-currency swaps'],
      riskAppetite: 'conservative',
      recentActivity: 'Issued 5Y USD bond last month, looking to hedge FX exposure',
      aum: '~$2B offshore portfolio'
    },
    {
      id: 'cli_002',
      name: 'China State Construction Engineering',
      type: 'SOE',
      tier: 1,
      sector: 'Construction & Infrastructure',
      coverage: 'Primary',
      contacts: [
        { name: 'Li Ming', title: 'Head of Capital Markets', style: 'direct' },
        { name: 'Chen Fang', title: 'Treasury Manager', style: 'detail-oriented' }
      ],
      preferences: ['USD bonds', 'LGFV exposure', 'Short-duration'],
      riskAppetite: 'moderate',
      recentActivity: 'Considering 3Y USD issuance in Q2',
      aum: '~$1.5B offshore portfolio'
    },
    {
      id: 'cli_003',
      name: 'Ping An Insurance (Group)',
      type: 'Insurance',
      tier: 1,
      sector: 'Financial Services',
      coverage: 'Primary',
      contacts: [
        { name: 'Liu Jing', title: 'CIO Offshore', style: 'analytical' },
        { name: 'Xu Hao', title: 'Portfolio Manager', style: 'data-driven' }
      ],
      preferences: ['IG USD bonds', 'Long-duration', 'New issues'],
      riskAppetite: 'conservative',
      recentActivity: 'Increasing USD bond allocation, interested in 10Y+ paper',
      aum: '~$5B offshore portfolio'
    },
    {
      id: 'cli_004',
      name: 'Country Garden Holdings',
      type: 'POE',
      tier: 2,
      sector: 'Real Estate',
      coverage: 'Secondary',
      contacts: [
        { name: 'Yang Mei', title: 'CFO', style: 'urgent' },
        { name: 'Zhao Kun', title: 'Treasurer', style: 'nervous' }
      ],
      preferences: ['Liability management', 'Refinancing', 'Bond buyback'],
      riskAppetite: 'distressed',
      recentActivity: 'Exploring liability management exercise, bonds trading at 45-60 cents',
      aum: '~$8B outstanding offshore debt'
    },
    {
      id: 'cli_005',
      name: 'CNOOC Limited',
      type: 'SOE',
      tier: 1,
      sector: 'Oil & Gas',
      coverage: 'Primary',
      contacts: [
        { name: 'Sun Tao', title: 'Group Treasurer', style: 'professional' },
        { name: 'Ma Ying', title: 'Debt Capital Markets', style: 'efficient' }
      ],
      preferences: ['USD bonds', 'Hybrid capital', 'Green bonds'],
      riskAppetite: 'moderate',
      recentActivity: 'Planning green bond framework, interested in sustainability-linked instruments',
      aum: '~$3B offshore portfolio'
    },
    {
      id: 'cli_006',
      name: 'Tencent Holdings',
      type: 'POE',
      tier: 1,
      sector: 'Technology',
      coverage: 'Primary',
      contacts: [
        { name: 'Jackie Lam', title: 'Head of Treasury', style: 'fast-paced' },
        { name: 'Kevin Zhou', title: 'Senior Treasury Manager', style: 'quantitative' }
      ],
      preferences: ['USD bonds', 'Multi-tranche', 'Investor relations'],
      riskAppetite: 'moderate',
      recentActivity: 'Regular issuer, considering dual-currency deal',
      aum: '~$10B outstanding offshore bonds'
    },
    {
      id: 'cli_007',
      name: 'Shandong Hi-Speed Group',
      type: 'LGFV',
      tier: 2,
      sector: 'Infrastructure / LGFV',
      coverage: 'Secondary',
      contacts: [
        { name: 'Gao Feng', title: 'Vice President', style: 'formal' },
        { name: 'Huang Li', title: 'Finance Director', style: 'cautious' }
      ],
      preferences: ['Short-dated USD', 'Dim Sum bonds', 'Keepwell structures'],
      riskAppetite: 'moderate',
      recentActivity: 'Maturing $500M bond in 3 months, exploring refinancing options',
      aum: '~$2B outstanding offshore debt'
    },
    {
      id: 'cli_008',
      name: 'China Merchants Bank',
      type: 'Bank',
      tier: 1,
      sector: 'Banking',
      coverage: 'Primary',
      contacts: [
        { name: 'Qian Yu', title: 'Head of FI Trading', style: 'sharp' },
        { name: 'Ding Wei', title: 'Credit Analyst', style: 'thorough' }
      ],
      preferences: ['AT1/T2 capital', 'Senior unsecured', 'Secondary flow'],
      riskAppetite: 'moderate',
      recentActivity: 'Active secondary buyer, looking for relative value in bank capital',
      aum: '~$4B investment book'
    }
  ],

  getClient(id) {
    return this.clients.find(c => c.id === id);
  },

  getClientsByTier(tier) {
    return this.clients.filter(c => c.tier === tier);
  },

  getClientsByType(type) {
    return this.clients.filter(c => c.type === type);
  }
};

// Bond Universe - Representative China offshore USD bonds
const BondData = {
  bonds: [
    // Investment Grade - SOE
    { ticker: 'CNPCCH', issuer: 'CNPC', coupon: 3.40, maturity: '2028-04-15', rating: 'A1/A+', sector: 'Oil & Gas', type: 'IG', benchmark: 'T+85', bidPrice: 98.50, askPrice: 98.75, spread: 85, zSpread: 88 },
    { ticker: 'CNOOC', issuer: 'CNOOC Ltd', coupon: 3.75, maturity: '2029-10-20', rating: 'A1/A+', sector: 'Oil & Gas', type: 'IG', benchmark: 'T+92', bidPrice: 99.25, askPrice: 99.50, spread: 92, zSpread: 95 },
    { ticker: 'SINOPE', issuer: 'Sinopec', coupon: 3.25, maturity: '2027-09-15', rating: 'A1/A+', sector: 'Oil & Gas', type: 'IG', benchmark: 'T+72', bidPrice: 99.75, askPrice: 100.00, spread: 72, zSpread: 74 },
    { ticker: 'CHGRID', issuer: 'State Grid Corp', coupon: 3.50, maturity: '2030-03-10', rating: 'A1/A+', sector: 'Utilities', type: 'IG', benchmark: 'T+78', bidPrice: 98.00, askPrice: 98.25, spread: 78, zSpread: 82 },
    { ticker: 'ICBCAS', issuer: 'ICBC', coupon: 4.25, maturity: '2029-06-15', rating: 'A1/A', sector: 'Banking', type: 'IG', benchmark: 'T+105', bidPrice: 100.50, askPrice: 100.75, spread: 105, zSpread: 108 },
    { ticker: 'BCHINA', issuer: 'Bank of China', coupon: 4.00, maturity: '2028-11-20', rating: 'A1/A', sector: 'Banking', type: 'IG', benchmark: 'T+98', bidPrice: 99.80, askPrice: 100.05, spread: 98, zSpread: 101 },
    
    // Investment Grade - Tech/POE
    { ticker: 'TENCNT', issuer: 'Tencent', coupon: 3.595, maturity: '2028-01-19', rating: 'A1/A+', sector: 'Technology', type: 'IG', benchmark: 'T+88', bidPrice: 99.00, askPrice: 99.25, spread: 88, zSpread: 91 },
    { ticker: 'BABA', issuer: 'Alibaba', coupon: 3.40, maturity: '2027-12-06', rating: 'A1/A+', sector: 'Technology', type: 'IG', benchmark: 'T+82', bidPrice: 99.50, askPrice: 99.75, spread: 82, zSpread: 84 },
    
    // LGFV
    { ticker: 'SDHISP', issuer: 'Shandong Hi-Speed', coupon: 4.80, maturity: '2026-08-15', rating: 'Baa2/BBB', sector: 'LGFV', type: 'IG', benchmark: 'T+195', bidPrice: 99.00, askPrice: 99.50, spread: 195, zSpread: 200 },
    { ticker: 'BJCAPG', issuer: 'Beijing Capital Group', coupon: 4.50, maturity: '2027-03-20', rating: 'Baa2/BBB', sector: 'LGFV', type: 'IG', benchmark: 'T+180', bidPrice: 98.50, askPrice: 99.00, spread: 180, zSpread: 185 },
    
    // High Yield - Property
    { ticker: 'COGARD', issuer: 'Country Garden', coupon: 7.50, maturity: '2026-03-09', rating: 'Caa1/CCC+', sector: 'Real Estate', type: 'HY', benchmark: null, bidPrice: 45.00, askPrice: 48.00, spread: null, zSpread: null },
    { ticker: 'VNKRLE', issuer: 'Vanke', coupon: 5.35, maturity: '2027-06-12', rating: 'Ba1/BB+', sector: 'Real Estate', type: 'HY', benchmark: 'T+450', bidPrice: 72.00, askPrice: 74.00, spread: 450, zSpread: 470 },
    { ticker: 'LNGFOR', issuer: 'Longfor Group', coupon: 4.80, maturity: '2028-01-16', rating: 'Ba2/BB', sector: 'Real Estate', type: 'HY', benchmark: 'T+380', bidPrice: 78.00, askPrice: 80.00, spread: 380, zSpread: 395 },
  ],

  getBond(ticker) {
    return this.bonds.find(b => b.ticker === ticker);
  },

  getBondsByType(type) {
    return this.bonds.filter(b => b.type === type);
  },

  getBondsBySector(sector) {
    return this.bonds.filter(b => b.sector === sector);
  }
};

// Rates & FX Reference Data
const RatesData = {
  treasuries: {
    '2Y': { yield: 4.25, change: -0.02 },
    '5Y': { yield: 4.10, change: -0.03 },
    '10Y': { yield: 4.35, change: -0.01 },
    '30Y': { yield: 4.55, change: +0.01 }
  },
  
  swapRates: {
    'USD_IRS_1Y': 4.85,
    'USD_IRS_2Y': 4.45,
    'USD_IRS_3Y': 4.25,
    'USD_IRS_5Y': 4.10,
    'USD_IRS_10Y': 4.05
  },

  fx: {
    'USD/CNH': { mid: 7.2450, bid: 7.2445, ask: 7.2455, change: +0.0035 },
    'USD/CNY': { mid: 7.2380, bid: 7.2375, ask: 7.2385, change: +0.0025 },
    'USD/HKD': { mid: 7.8120, bid: 7.8115, ask: 7.8125, change: -0.0005 },
    'EUR/USD': { mid: 1.0825, bid: 1.0823, ask: 1.0827, change: +0.0012 }
  },

  indices: {
    'Hang Seng': { value: 17850, change: -1.2 },
    'CSI 300': { value: 3680, change: -0.8 },
    'S&P 500 (prev)': { value: 5320, change: +0.3 },
    'iTraxx Asia IG': { value: 82, change: +1.5 },
    'CDX IG': { value: 58, change: +0.5 }
  }
};

// New Issue Pipeline
const NewIssuePipeline = [
  {
    issuer: 'China Development Bank',
    size: '$1.5B',
    tenor: '3Y / 5Y',
    guidance: 'T+60/T+75 area',
    bookStatus: 'Books open 10AM HKT',
    leads: 'HSBC / BOC / Citi',
    sector: 'Policy Bank',
    rating: 'A1/A+'
  },
  {
    issuer: 'Guangdong Provincial Government',
    size: '$750M',
    tenor: '5Y',
    guidance: 'T+95 area',
    bookStatus: 'Launch expected this week',
    leads: 'Goldman / CICC / Morgan Stanley',
    sector: 'LGFV / Quasi-Sovereign',
    rating: 'A2/A'
  },
  {
    issuer: 'NIO Inc',
    size: '$500M',
    tenor: '5Y NC3',
    guidance: '6.5% area',
    bookStatus: 'Roadshow ongoing',
    leads: 'JPM / UBS / Deutsche',
    sector: 'EV / Technology',
    rating: 'Ba3/BB-'
  }
];

// Trading Terminology Reference
const Glossary = {
  'axe': 'A strong desire to buy or sell a particular bond',
  'bid-wanted': 'Client seeking bids for bonds they want to sell',
  'BWIC': 'Bid Wanted In Competition - formal process for selling bonds',
  'color': 'Market intelligence/commentary shared with clients',
  'comp': 'Comparable bond used for relative value analysis',
  'cover': 'The second-highest bid in a BWIC process',
  'DV01': 'Dollar value of a basis point move',
  'flow': 'Client trading activity/interest',
  'IOI': 'Indication of Interest - non-binding expression of interest',
  'keepwell': 'Structural support agreement (common in LGFV bonds)',
  'LME': 'Liability Management Exercise',
  'NIP': 'New Issue Premium - extra yield on new bonds vs secondary',
  'OAS': 'Option-Adjusted Spread',
  'PB': 'Prime Brokerage',
  'reoffer': 'Price at which new issue bonds are sold to investors',
  'SBLC': 'Standby Letter of Credit (common in LGFV structures)',
  'tight/wide': 'Spread relative to fair value',
  'two-way': 'Both bid and offer prices available'
};

// Scoring rubrics for different event types
const ScoringRubrics = {
  morningCall: {
    excellent: { score: 10, criteria: 'Comprehensive market update with actionable ideas' },
    good: { score: 7, criteria: 'Solid update covering key moves' },
    adequate: { score: 5, criteria: 'Basic coverage, missing some key points' },
    poor: { score: 2, criteria: 'Incomplete or inaccurate information' }
  },
  clientInteraction: {
    excellent: { score: 10, criteria: 'Professional, timely, adds value with market insight' },
    good: { score: 7, criteria: 'Professional and helpful response' },
    adequate: { score: 5, criteria: 'Acceptable but generic response' },
    poor: { score: 2, criteria: 'Unprofessional, slow, or incorrect' }
  },
  tradeExecution: {
    excellent: { score: 10, criteria: 'Optimal execution with proper risk management' },
    good: { score: 7, criteria: 'Clean execution, appropriate process' },
    adequate: { score: 5, criteria: 'Executed but suboptimal timing/approach' },
    poor: { score: 2, criteria: 'Execution errors or compliance issues' }
  },
  riskManagement: {
    excellent: { score: 10, criteria: 'Proactively identifies and mitigates risks' },
    good: { score: 7, criteria: 'Properly escalates concerns' },
    adequate: { score: 5, criteria: 'Recognizes risk but slow to act' },
    poor: { score: 2, criteria: 'Misses obvious risk signals' }
  }
};
