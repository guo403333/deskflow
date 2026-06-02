// ============================================================
// MAIN APPLICATION - Time Engine, Event Dispatcher, Scoring
// Offshore China Corporate Sales Trading Simulator
// ============================================================

class SalesTradingSimulator {
  constructor() {
    this.state = 'idle'; // idle, running, paused, completed
    this.currentEventIndex = 0;
    this.score = { total: 0, responses: 0, breakdown: { 'Market Knowledge': 0, 'Client Handling': 0, 'Execution Quality': 0, 'Risk Awareness': 0 } };
    this.maxScorePerCategory = {};
    this.simTime = null;
    this.simSpeed = 1; // 1x, 2x, 4x
    this.tickInterval = null;
    this.market = null;
    this.eventHistory = [];
    this.activeEvent = null;
    this.tradeBlotter = [];
    this.chatLog = [];
    
    // Calculate max possible scores
    EventLibrary.forEach(evt => {
      if (!this.maxScorePerCategory[evt.category]) this.maxScorePerCategory[evt.category] = 0;
      this.maxScorePerCategory[evt.category] += 10;
    });
  }

  // Initialize and start simulation
  start() {
    this.state = 'running';
    this.simTime = new Date(2026, 4, 26, 7, 30, 0); // May 26, 2026 7:30 AM
    this.market = new MarketSimulator();
    this.currentEventIndex = 0;
    this.score = { total: 0, responses: 0, breakdown: { 'Market Knowledge': 0, 'Client Handling': 0, 'Execution Quality': 0, 'Risk Awareness': 0 } };
    this.eventHistory = [];
    this.tradeBlotter = [];
    this.chatLog = [];
    
    this.renderDashboard();
    this.startTimeline();
    this.updateMarketDisplay();
    this.addChatMessage('System', 'Welcome to the trading floor. It\'s 7:30 AM HKT. Markets are about to open. Prepare for your day.', 'system');
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  }

  // Time engine - advances simulation clock
  startTimeline() {
    if (this.tickInterval) clearInterval(this.tickInterval);
    
    this.tickInterval = setInterval(() => {
      if (this.state !== 'running') return;
      
      // Advance time by 1 minute per tick
      this.simTime.setMinutes(this.simTime.getMinutes() + 1);
      
      // Update market data every 5 sim-minutes
      if (this.simTime.getMinutes() % 5 === 0) {
        this.market.tick(this.simTime);
        this.updateMarketDisplay();
      }
      
      // Check for events
      this.checkEvents();
      
      // Update time display
      this.updateTimeDisplay();
      
      // Check if day is over
      if (this.simTime.getHours() >= 18) {
        this.complete();
      }
    }, 2000 / this.simSpeed); // 2 seconds per sim-minute at 1x speed
  }

  // Check if any events should fire
  checkEvents() {
    if (this.activeEvent) return; // Don't fire new event while one is active
    
    const currentTime = this.formatTime(this.simTime);
    
    while (this.currentEventIndex < EventLibrary.length) {
      const nextEvent = EventLibrary[this.currentEventIndex];
      if (this.compareTime(currentTime, nextEvent.time) >= 0) {
        this.fireEvent(nextEvent);
        this.currentEventIndex++;
        break;
      } else {
        break;
      }
    }
  }

  // Fire an event
  fireEvent(event) {
    this.activeEvent = event;
    this.state = 'paused'; // Pause time while handling event
    
    // Apply market shock if event has one
    if (event.marketShock) {
      this.market.applyShock(event.marketShock.type, event.marketShock.magnitude);
      this.updateMarketDisplay();
    }
    
    // Add to chat log
    this.addChatMessage(event.sender, event.description, event.urgency);
    
    // Render event card
    this.renderEventCard(event);
    
    // Play notification sound effect (visual flash)
    this.flashNotification(event.urgency);
  }

  // Handle player's choice
  handleChoice(choiceId) {
    if (!this.activeEvent) return;
    
    const event = this.activeEvent;
    const choice = event.choices.find(c => c.id === choiceId);
    
    if (!choice) return;
    
    // Record score
    this.score.total += choice.score;
    this.score.responses++;
    this.score.breakdown[event.category] = (this.score.breakdown[event.category] || 0) + choice.score;
    
    // Record in history
    this.eventHistory.push({
      event: event,
      choice: choice,
      time: this.formatTime(this.simTime)
    });
    
    // Show feedback
    this.renderFeedback(event, choice);
    
    // Add consequence to chat
    if (choice.consequences) {
      setTimeout(() => {
        this.addChatMessage('Result', choice.consequences, 'info');
      }, 500);
    }
  }

  // Continue after feedback
  continueAfterFeedback() {
    this.activeEvent = null;
    this.state = 'running';
    this.renderEventArea();
    this.updateScoreDisplay();
    this.updateProgressBar();
  }

  // Complete simulation
  complete() {
    this.state = 'completed';
    if (this.tickInterval) clearInterval(this.tickInterval);
    this.renderCompletionScreen();
  }

  // ==================== RENDERING ====================
  
  renderDashboard() {
    this.updateTimeDisplay();
    this.updateScoreDisplay();
    this.updateProgressBar();
    this.updateClientBook();
    this.renderEventArea();
  }

  updateTimeDisplay() {
    const timeEl = document.getElementById('sim-time');
    if (timeEl) {
      timeEl.textContent = this.formatTime(this.simTime);
    }
    const phaseEl = document.getElementById('sim-phase');
    if (phaseEl) {
      const phase = this.getCurrentPhase();
      phaseEl.textContent = phase ? phase.label : '';
      phaseEl.style.color = phase ? phase.color : '#fff';
    }
  }

  updateScoreDisplay() {
    const scoreEl = document.getElementById('score-value');
    if (scoreEl) {
      const maxPossible = this.score.responses * 10;
      const percentage = maxPossible > 0 ? Math.round((this.score.total / maxPossible) * 100) : 0;
      scoreEl.textContent = `${percentage}%`;
      scoreEl.className = percentage >= 80 ? 'score-excellent' : percentage >= 60 ? 'score-good' : 'score-poor';
    }
    
    // Update category scores
    Object.keys(this.score.breakdown).forEach(cat => {
      const el = document.getElementById(`score-${cat.replace(/\s+/g, '-').toLowerCase()}`);
      if (el) {
        const max = this.maxScorePerCategory[cat] || 10;
        const pct = Math.round((this.score.breakdown[cat] / max) * 100);
        el.style.width = `${pct}%`;
        el.setAttribute('data-score', `${this.score.breakdown[cat]}/${max}`);
      }
    });
  }

  updateProgressBar() {
    const progressEl = document.getElementById('progress-bar');
    if (progressEl) {
      const progress = (this.currentEventIndex / EventLibrary.length) * 100;
      progressEl.style.width = `${progress}%`;
    }
    const progressText = document.getElementById('progress-text');
    if (progressText) {
      progressText.textContent = `${this.currentEventIndex}/${EventLibrary.length} events`;
    }
  }

  updateMarketDisplay() {
    if (!this.market) return;
    const snapshot = this.market.getSnapshot();
    
    // Treasuries
    const treasuryEl = document.getElementById('market-treasuries');
    if (treasuryEl) {
      let html = '';
      Object.entries(snapshot.treasuries).forEach(([tenor, data]) => {
        const changeClass = data.change >= 0 ? 'positive' : 'negative';
        const arrow = data.change >= 0 ? '&#9650;' : '&#9660;';
        html += `<div class="market-row">
          <span class="market-label">UST ${tenor}</span>
          <span class="market-value">${data.yield.toFixed(3)}%</span>
          <span class="market-change ${changeClass}">${arrow} ${Math.abs(data.change * 100).toFixed(1)}bp</span>
        </div>`;
      });
      treasuryEl.innerHTML = html;
    }
    
    // FX
    const fxEl = document.getElementById('market-fx');
    if (fxEl) {
      let html = '';
      Object.entries(snapshot.fx).forEach(([pair, data]) => {
        const changeClass = data.change >= 0 ? 'positive' : 'negative';
        const arrow = data.change >= 0 ? '&#9650;' : '&#9660;';
        html += `<div class="market-row">
          <span class="market-label">${pair}</span>
          <span class="market-value">${data.mid.toFixed(4)}</span>
          <span class="market-change ${changeClass}">${arrow} ${Math.abs(data.change).toFixed(4)}</span>
        </div>`;
      });
      fxEl.innerHTML = html;
    }
    
    // Indices
    const indexEl = document.getElementById('market-indices');
    if (indexEl) {
      let html = '';
      Object.entries(snapshot.indices).forEach(([name, data]) => {
        const changeClass = data.change >= 0 ? 'positive' : 'negative';
        const arrow = data.change >= 0 ? '&#9650;' : '&#9660;';
        html += `<div class="market-row">
          <span class="market-label">${name}</span>
          <span class="market-value">${data.value.toLocaleString()}</span>
          <span class="market-change ${changeClass}">${arrow} ${Math.abs(data.change).toFixed(1)}%</span>
        </div>`;
      });
      indexEl.innerHTML = html;
    }

    // Bonds (top movers)
    const bondEl = document.getElementById('market-bonds');
    if (bondEl) {
      let html = '';
      const displayBonds = ['TENCNT', 'CNPCCH', 'ICBCAS', 'SDHISP', 'COGARD', 'VNKRLE'];
      displayBonds.forEach(ticker => {
        const formatted = this.market.formatBondPrice(ticker);
        if (formatted) {
          html += `<div class="market-row bond-row">
            <span class="market-label bond-ticker">${formatted.ticker}</span>
            <span class="market-value">${formatted.bid}/${formatted.ask}</span>
            <span class="market-change ${formatted.changeClass}">${formatted.change}</span>
          </div>`;
        }
      });
      bondEl.innerHTML = html;
    }
  }

  updateClientBook() {
    const clientEl = document.getElementById('client-book');
    if (!clientEl) return;
    
    let html = '';
    ClientData.clients.forEach(client => {
      const tierClass = `tier-${client.tier}`;
      const typeClass = client.type.toLowerCase();
      html += `<div class="client-card ${tierClass}">
        <div class="client-name">${client.name.split('(')[0].trim()}</div>
        <div class="client-meta">
          <span class="client-type ${typeClass}">${client.type}</span>
          <span class="client-tier">Tier ${client.tier}</span>
        </div>
        <div class="client-activity">${client.recentActivity.substring(0, 60)}...</div>
      </div>`;
    });
    clientEl.innerHTML = html;
  }

  renderEventCard(event) {
    const eventArea = document.getElementById('event-area');
    if (!eventArea) return;
    
    const urgencyClass = `urgency-${event.urgency}`;
    
    let choicesHtml = event.choices.map(choice => 
      `<button class="choice-btn" onclick="app.handleChoice('${choice.id}')">
        <span class="choice-id">${choice.id.toUpperCase()}</span>
        <span class="choice-text">${choice.text}</span>
      </button>`
    ).join('');
    
    eventArea.innerHTML = `
      <div class="event-card ${urgencyClass} animate-in">
        <div class="event-header">
          <div class="event-time">${event.time}</div>
          <div class="event-category">${event.category}</div>
          <div class="event-urgency ${urgencyClass}">${event.urgency.toUpperCase()}</div>
        </div>
        <h3 class="event-title">${event.title}</h3>
        <div class="event-sender">
          <span class="sender-name">${event.sender}</span>
          <span class="sender-role">${event.senderRole}</span>
        </div>
        <p class="event-description">${event.description}</p>
        <div class="event-choices">${choicesHtml}</div>
      </div>
    `;
  }

  renderFeedback(event, choice) {
    const eventArea = document.getElementById('event-area');
    if (!eventArea) return;
    
    const scoreClass = choice.score >= 8 ? 'excellent' : choice.score >= 5 ? 'good' : 'poor';
    const scoreLabel = choice.score >= 8 ? 'Excellent' : choice.score >= 5 ? 'Adequate' : 'Needs Improvement';
    
    eventArea.innerHTML = `
      <div class="feedback-card animate-in">
        <div class="feedback-header">
          <div class="feedback-score ${scoreClass}">
            <span class="score-number">${choice.score}/10</span>
            <span class="score-label">${scoreLabel}</span>
          </div>
        </div>
        <div class="feedback-body">
          <div class="feedback-section">
            <h4>Your Choice:</h4>
            <p class="feedback-choice">${choice.text}</p>
          </div>
          <div class="feedback-section">
            <h4>Feedback:</h4>
            <p class="feedback-text">${choice.feedback}</p>
          </div>
          <div class="feedback-section teaching">
            <h4>Teaching Point:</h4>
            <p class="teaching-text">${event.teachingPoint}</p>
          </div>
        </div>
        <button class="continue-btn" onclick="app.continueAfterFeedback()">
          Continue <span class="arrow">&#8594;</span>
        </button>
      </div>
    `;
  }

  renderEventArea() {
    const eventArea = document.getElementById('event-area');
    if (!eventArea) return;
    
    if (this.state === 'running' && !this.activeEvent) {
      const phase = this.getCurrentPhase();
      eventArea.innerHTML = `
        <div class="waiting-state">
          <div class="waiting-icon">&#9679;</div>
          <div class="waiting-text">
            <span class="phase-indicator" style="color: ${phase ? phase.color : '#fff'}">${phase ? phase.label : ''}</span>
            <span>Waiting for next event...</span>
          </div>
          <div class="waiting-hint">Market data is updating in real-time on the left panel.</div>
        </div>
      `;
    }
  }

  renderCompletionScreen() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    const maxPossible = EventLibrary.length * 10;
    const percentage = Math.round((this.score.total / maxPossible) * 100);
    let grade, gradeClass, message;
    
    if (percentage >= 85) { grade = 'A+'; gradeClass = 'excellent'; message = 'Outstanding performance! You demonstrate the skills of a top-tier sales trader.'; }
    else if (percentage >= 75) { grade = 'A'; gradeClass = 'excellent'; message = 'Excellent work. You have strong instincts and market awareness.'; }
    else if (percentage >= 65) { grade = 'B+'; gradeClass = 'good'; message = 'Good performance with room for improvement in some areas.'; }
    else if (percentage >= 55) { grade = 'B'; gradeClass = 'good'; message = 'Solid foundation, but need to develop speed and market knowledge.'; }
    else { grade = 'C'; gradeClass = 'poor'; message = 'Significant development needed. Review the teaching points carefully.'; }
    
    let breakdownHtml = '';
    Object.entries(this.score.breakdown).forEach(([cat, score]) => {
      const max = this.maxScorePerCategory[cat] || 10;
      const pct = Math.round((score / max) * 100);
      const catClass = pct >= 75 ? 'excellent' : pct >= 50 ? 'good' : 'poor';
      breakdownHtml += `
        <div class="final-category">
          <span class="cat-name">${cat}</span>
          <div class="cat-bar-container">
            <div class="cat-bar ${catClass}" style="width:${pct}%"></div>
          </div>
          <span class="cat-score">${pct}%</span>
        </div>`;
    });
    
    dashboard.innerHTML = `
      <div class="completion-screen">
        <div class="completion-header">
          <h1>Simulation Complete</h1>
          <p class="completion-subtitle">Offshore China Corporate Sales — Full Day Assessment</p>
        </div>
        <div class="completion-grade ${gradeClass}">
          <div class="grade-circle">
            <span class="grade-letter">${grade}</span>
            <span class="grade-pct">${percentage}%</span>
          </div>
          <p class="grade-message">${message}</p>
        </div>
        <div class="completion-breakdown">
          <h3>Performance by Category</h3>
          ${breakdownHtml}
        </div>
        <div class="completion-stats">
          <div class="stat"><span class="stat-value">${this.eventHistory.length}</span><span class="stat-label">Events Handled</span></div>
          <div class="stat"><span class="stat-value">${this.score.total}</span><span class="stat-label">Total Points</span></div>
          <div class="stat"><span class="stat-value">${maxPossible}</span><span class="stat-label">Max Possible</span></div>
        </div>
        <div class="completion-actions">
          <button class="restart-btn" onclick="app.restart()">Restart Simulation</button>
          <button class="review-btn" onclick="app.showReview()">Review All Answers</button>
        </div>
      </div>
    `;
  }

  showReview() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    let reviewHtml = this.eventHistory.map((entry, i) => {
      const scoreClass = entry.choice.score >= 8 ? 'excellent' : entry.choice.score >= 5 ? 'good' : 'poor';
      return `
        <div class="review-item">
          <div class="review-header">
            <span class="review-num">#${i + 1}</span>
            <span class="review-time">${entry.time}</span>
            <span class="review-title">${entry.event.title}</span>
            <span class="review-score ${scoreClass}">${entry.choice.score}/10</span>
          </div>
          <div class="review-body">
            <p><strong>Your choice:</strong> ${entry.choice.text.substring(0, 100)}...</p>
            <p><strong>Teaching point:</strong> ${entry.event.teachingPoint}</p>
          </div>
        </div>`;
    }).join('');
    
    dashboard.innerHTML = `
      <div class="review-screen">
        <div class="review-header-bar">
          <h2>Answer Review</h2>
          <button class="back-btn" onclick="app.complete()">Back to Results</button>
        </div>
        <div class="review-list">${reviewHtml}</div>
      </div>
    `;
  }

  // Chat system
  addChatMessage(sender, message, type = 'normal') {
    this.chatLog.push({ sender, message, type, time: this.formatTime(this.simTime) });
    this.renderChat();
  }

  renderChat() {
    const chatEl = document.getElementById('chat-messages');
    if (!chatEl) return;
    
    // Show last 10 messages
    const recent = this.chatLog.slice(-10);
    chatEl.innerHTML = recent.map(msg => {
      const typeClass = `chat-${msg.type}`;
      return `<div class="chat-msg ${typeClass}">
        <span class="chat-time">${msg.time}</span>
        <span class="chat-sender">${msg.sender}:</span>
        <span class="chat-text">${msg.message}</span>
      </div>`;
    }).join('');
    
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  // ==================== UTILITIES ====================
  
  formatTime(date) {
    if (!date) return '07:30';
    return date.toTimeString().substring(0, 5);
  }

  compareTime(time1, time2) {
    const [h1, m1] = time1.split(':').map(Number);
    const [h2, m2] = time2.split(':').map(Number);
    return (h1 * 60 + m1) - (h2 * 60 + m2);
  }

  getCurrentPhase() {
    const time = this.formatTime(this.simTime);
    for (const [key, phase] of Object.entries(PhaseDefinitions)) {
      const [start, end] = phase.timeRange.split('-');
      if (this.compareTime(time, start) >= 0 && this.compareTime(time, end) < 0) {
        return { ...phase, key };
      }
    }
    return PhaseDefinitions['eod'];
  }

  flashNotification(urgency) {
    const flash = document.getElementById('notification-flash');
    if (flash) {
      flash.className = `flash flash-${urgency}`;
      setTimeout(() => { flash.className = 'flash'; }, 1000);
    }
  }

  setSpeed(speed) {
    this.simSpeed = speed;
    if (this.state === 'running') {
      this.startTimeline();
    }
    // Update speed buttons
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-speed="${speed}"]`)?.classList.add('active');
  }

  restart() {
    this.state = 'idle';
    this.currentEventIndex = 0;
    if (this.tickInterval) clearInterval(this.tickInterval);
    this.start();
  }

  skipToNext() {
    if (this.state === 'running' && !this.activeEvent && this.currentEventIndex < EventLibrary.length) {
      const nextEvent = EventLibrary[this.currentEventIndex];
      const [h, m] = nextEvent.time.split(':').map(Number);
      this.simTime.setHours(h);
      this.simTime.setMinutes(m);
      this.updateTimeDisplay();
      this.checkEvents();
    }
  }
}

// ==================== INITIALIZATION ====================
let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new SalesTradingSimulator();
});

function startSimulation() {
  app.start();
}
