// ============================================================
// EVENT SCENARIOS - 30+ realistic trading day events
// Offshore China Corporate Sales Trading Simulator
// ============================================================

const EventLibrary = [
  // ==================== PRE-MARKET (7:30-8:00) ====================
  {
    id: 'evt_001',
    time: '07:30',
    phase: 'pre-market',
    type: 'preparation',
    title: 'Overnight Market Review',
    description: 'Review overnight developments before morning call. US markets closed mixed, UST 10Y down 3bps. WSJ reports potential new tariff measures on China tech exports.',
    sender: 'System',
    senderRole: 'Market Data',
    urgency: 'medium',
    category: 'Market Knowledge',
    choices: [
      { 
        id: 'a', 
        text: 'Focus on tariff headline — prepare talking points on China tech bond impact and potential spread widening', 
        score: 10, 
        feedback: 'Excellent. The tariff headline is the key story for your China corporate clients. Proactive preparation shows strong market awareness.',
        consequences: 'You are well-prepared for morning call discussion.'
      },
      { 
        id: 'b', 
        text: 'Note the UST rally — prepare to highlight duration opportunity for insurance clients', 
        score: 7, 
        feedback: 'Good observation on rates move, but the tariff headline is more relevant for your China corporate coverage. You should address both.',
        consequences: 'Partially prepared — may be caught off-guard on tariff questions.'
      },
      { 
        id: 'c', 
        text: 'Quickly skim headlines and head to morning call without detailed preparation', 
        score: 3, 
        feedback: 'Insufficient preparation. As China corporate sales, you need to have a view on how overnight developments affect your clients.',
        consequences: 'You struggle to provide meaningful color during morning call.'
      }
    ],
    teachingPoint: 'As offshore China corporate sales, your primary job is to filter market noise and identify what matters for your specific clients. Always prioritize China-specific headlines and their transmission mechanism to credit spreads.'
  },

  {
    id: 'evt_002',
    time: '07:45',
    phase: 'pre-market',
    type: 'preparation',
    title: 'Research Note: CNPC Credit Update',
    description: 'Credit research published overnight note: "CNPC Q1 Results Preview — expect solid numbers, potential for positive outlook revision." Your coverage client CNPC has a 2028 bond outstanding.',
    sender: 'Research',
    senderRole: 'Credit Analyst',
    urgency: 'low',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Forward research note to CNPC treasury team with your brief commentary on spread implications and relative value vs CNOOC', 
        score: 10, 
        feedback: 'Perfect execution. Adding your own value (RV angle, spread view) differentiates you from just being a note-forwarder. Client appreciates the proactive outreach.',
        consequences: 'Client responds positively, strengthening relationship.'
      },
      { 
        id: 'b', 
        text: 'Save the note to share with client after morning call — want to see if anything else comes up first', 
        score: 6, 
        feedback: 'Reasonable timing decision, but in sales, being first matters. Another bank may have already shared similar views.',
        consequences: 'Client mentions they already received it from competitor bank.'
      },
      { 
        id: 'c', 
        text: 'Forward the research note as-is without personal commentary', 
        score: 4, 
        feedback: 'Below expectations. Any sales coverage person can forward a note. Your value-add is the market context and actionable implications.',
        consequences: 'Client reads it but doesn\'t engage further.'
      }
    ],
    teachingPoint: 'Never just forward research — always add your own market color, relative value view, or actionable suggestion. This is what separates good sales from order-takers.'
  },

  // ==================== MORNING CALL (8:00-8:30) ====================
  {
    id: 'evt_003',
    time: '08:00',
    phase: 'morning-call',
    type: 'presentation',
    title: 'Morning Call — Your Turn to Present',
    description: 'It\'s your turn on the Asia credit morning call. The desk head asks: "What\'s the key theme for China corporates today and what\'s your top trade idea?"',
    sender: 'Desk Head',
    senderRole: 'MD, Asia Credit Sales',
    urgency: 'high',
    category: 'Market Knowledge',
    choices: [
      { 
        id: 'a', 
        text: '"Key theme: tariff risk on China tech — recommend reducing BABA/TENCNT duration, rotating into short-dated SOE names like SINOPE 27s which are trading T+72 and well-insulated. Also flagging CDB new issue today as potential allocation opportunity for buy-and-hold accounts."', 
        score: 10, 
        feedback: 'Outstanding. You identified the key risk (tariffs), gave a specific trade idea with a ticker and spread level, and flagged the new issue opportunity. Desk head is impressed.',
        consequences: 'Desk head asks you to lead the CDB allocation effort for your clients.'
      },
      { 
        id: 'b', 
        text: '"China tech names may face pressure from tariff headlines. Watching TENCNT and BABA spreads. UST rally could provide some cushion. Will update clients on developments."', 
        score: 6, 
        feedback: 'Acceptable but lacks specificity. No concrete trade idea, no spread levels cited, no differentiated view. This is commentary, not a trade recommendation.',
        consequences: 'Desk head nods but doesn\'t assign you any special tasks.'
      },
      { 
        id: 'c', 
        text: '"Markets are mixed overnight. UST rallied a bit. Will monitor China names today and reach out to clients if anything moves."', 
        score: 2, 
        feedback: 'Very weak. This adds zero value to the call. Everyone already knows this from the screen. No insight, no trade idea, no proactive stance.',
        consequences: 'Desk head looks disappointed and moves on quickly.'
      }
    ],
    teachingPoint: 'On morning calls: (1) Lead with the key theme, (2) Give a specific actionable idea with ticker + level, (3) Mention the new issue pipeline. Be concise, confident, and specific.'
  },

  {
    id: 'evt_004',
    time: '08:20',
    phase: 'morning-call',
    type: 'question',
    title: 'Morning Call — Trader Question',
    description: 'The IG trader asks: "I have $15M SDHISP 26s to sell from last night\'s flow. Any of your LGFV accounts have interest? Bid is 99.00, I can offer at 99.25 to your clients."',
    sender: 'Trader',
    senderRole: 'IG Credit Trader',
    urgency: 'medium',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: '"Let me check with Shandong Hi-Speed directly since it\'s their name — they might want to buy back ahead of maturity. Also Ping An has been looking at short-dated LGFV, I\'ll ping them. Give me 30 minutes."', 
        score: 10, 
        feedback: 'Excellent sales instinct. You identified two natural buyers: the issuer themselves (buyback) and a known buyer of the sector. Specific timeline shows urgency.',
        consequences: 'Trader appreciates the quick thinking. You now have actionable flow to share with clients.'
      },
      { 
        id: 'b', 
        text: '"I\'ll blast it out to my LGFV-interested accounts and see who bites. Should have feedback within an hour."', 
        score: 6, 
        feedback: 'OK approach but lacks precision. "Blasting out" suggests you don\'t know your clients\' specific interests well. Also an hour is too slow for this type of flow.',
        consequences: 'Trader says "fine, but try to be quicker — I have other coverage checking too."'
      },
      { 
        id: 'c', 
        text: '"LGFV is tough right now, not sure my accounts are interested. Can you try HK or Singapore coverage?"', 
        score: 2, 
        feedback: 'Weak. You\'re passing on an opportunity to serve both your trader and your clients. As corporate sales, LGFV is core to your coverage. You should always try.',
        consequences: 'Trader makes a mental note that you\'re not helpful on LGFV flow.'
      }
    ],
    teachingPoint: 'When a trader shows you inventory to distribute: (1) Think about who specifically would buy, (2) The issuer is often a natural buyer of their own bonds, (3) Give a specific timeline, (4) Move fast — first mover gets the allocation.'
  },

  // ==================== CLIENT OUTREACH (8:30-10:00) ====================
  {
    id: 'evt_005',
    time: '08:35',
    phase: 'client-outreach',
    type: 'proactive',
    title: 'Client Outreach — Ping An Insurance',
    description: 'Based on morning call, you identified CDB new issue as relevant for Ping An (they like long-duration IG). Time to reach out. Craft your approach.',
    sender: 'You',
    senderRole: 'Initiative',
    urgency: 'high',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Call Liu Jing (CIO): "Good morning. CDB 3Y/5Y launching today, guidance T+60/75 area. Given your duration mandate, the 5Y at T+75 looks attractive vs CHGRID 30s at T+78 — you\'re getting quasi-sov at near utility levels. Books open 10AM, shall I put you in for $50-100M on the 5Y?"', 
        score: 10, 
        feedback: 'Perfect pitch. You (1) informed about new issue, (2) gave a relative value angle (vs CHGRID), (3) suggested specific size based on their portfolio, (4) asked for a commitment. This is consultative selling.',
        consequences: 'Liu Jing: "Good call. Put us down for $75M 5Y, we can go up to $100M if pricing is tight."'
      },
      { 
        id: 'b', 
        text: 'Send WeChat message: "Hi Liu Jing, CDB new issue coming today. 3Y/5Y dual tranche. Let me know if you\'re interested and I can share details."', 
        score: 5, 
        feedback: 'Too passive. You\'re just informing, not selling. No RV angle, no suggested size, no urgency. This reads like a mass blast, not personalized coverage.',
        consequences: 'Liu Jing: "Thanks, send me the term sheet when available." (Non-committal)'
      },
      { 
        id: 'c', 
        text: 'Wait for the official term sheet to be sent out before contacting client — want to have all the details first', 
        score: 3, 
        feedback: 'Too slow. In new issues, early bird gets the allocation. By the time term sheets are out, other banks have already pre-sounded their clients. Your competitors are calling Ping An right now.',
        consequences: 'When you finally call, Liu Jing says "We already committed through HSBC."'
      }
    ],
    teachingPoint: 'New issue pitching best practices: (1) Be early — before official launch, (2) Tailor the pitch to client\'s mandate, (3) Provide relative value context, (4) Suggest specific size, (5) Create urgency (books filling fast). Always call for important deals, don\'t just message.'
  },

  {
    id: 'evt_006',
    time: '09:00',
    phase: 'client-outreach',
    type: 'proactive',
    title: 'Tariff Risk — Proactive Client Alert',
    description: 'The tariff headline is gaining traction. Bloomberg confirms: "US to announce new tech export controls targeting China semiconductor equipment." TENCNT 28s have widened 5bps to T+93. Tencent is your Tier 1 client.',
    sender: 'Bloomberg',
    senderRole: 'News Alert',
    urgency: 'high',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Immediately call Jackie Lam (Tencent Treasury): "Jackie, want to flag the export control headline. Your 28s have moved +5bps to T+93, but I think the direct impact on Tencent is limited — you\'re not in hardware. However, if sentiment deteriorates further, we could see 5-10bps more. Want me to check if our trader can firm up a buyback bid if you want to be proactive?"', 
        score: 10, 
        feedback: 'Excellent proactive risk management. You (1) alerted immediately, (2) gave specific market move with level, (3) provided your analytical view (limited direct impact), (4) offered a solution (buyback bid). This builds trust.',
        consequences: 'Jackie: "Appreciate the heads up. We\'re not worried about fundamentals but let me know if it goes beyond T+100 — we might buy back opportunistically."'
      },
      { 
        id: 'b', 
        text: 'Send a market update to all China tech clients: "FYI — new export control headlines hitting China tech names. TENCNT +5, BABA +3. Will monitor and update."', 
        score: 6, 
        feedback: 'Decent awareness but a mass blast is impersonal for a Tier 1 client. Tencent deserves a direct call with tailored analysis, not the same message as everyone else.',
        consequences: 'Jackie sees your message but doesn\'t respond — probably already got 5 similar ones from other banks.'
      },
      { 
        id: 'c', 
        text: 'Wait to see if spreads move further before alerting clients — don\'t want to create panic over a 5bp move', 
        score: 3, 
        feedback: 'Wrong instinct. Your job is to inform, not to filter whether moves are "big enough." 5bps on a $10B+ debt portfolio matters. Other banks are already calling your client.',
        consequences: 'Jackie calls YOU asking what\'s happening — you look uninformed and slow.'
      }
    ],
    teachingPoint: 'When news breaks affecting your coverage names: (1) Call Tier 1 clients immediately — don\'t wait, (2) Give them the market move AND your view, (3) Offer a solution/action. Being first with a view builds franchise value.'
  },

  {
    id: 'evt_007',
    time: '09:30',
    phase: 'client-outreach',
    type: 'incoming',
    title: 'Incoming: CNOOC Green Bond Inquiry',
    description: 'Sun Tao from CNOOC calls: "We\'re thinking about a green bond. Our board wants to understand the greenium — how much can we save vs conventional? And what\'s the timeline to get a framework done?"',
    sender: 'Sun Tao',
    senderRole: 'CNOOC Group Treasurer',
    urgency: 'medium',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: '"Great to hear, Sun Tao. Based on recent deals, the greenium for Chinese SOE issuers is running 5-10bps — so on a $500M 5Y deal, that\'s roughly $250-500K annual saving. For the framework, you\'d need a Second Party Opinion (Sustainalytics/ISS), typically 4-6 weeks. I can connect you with our DCM sustainability team this week to kickstart. Shall I set up a call for Thursday?"', 
        score: 10, 
        feedback: 'Superb. Specific numbers on greenium, practical timeline, named the SPO providers, and offered next step with a specific date. This is what full-service coverage looks like.',
        consequences: 'Sun Tao: "That\'s very helpful. Yes, set up the call. We want to move on this before year-end."'
      },
      { 
        id: 'b', 
        text: '"Interesting. Let me check with our DCM team on the greenium and timeline and come back to you. Green bonds are definitely gaining traction in the market."', 
        score: 5, 
        feedback: 'Acceptable but you should know the basic greenium range and timeline off the top of your head as a senior sales person. Asking DCM for everything makes you look junior.',
        consequences: 'Sun Tao: "OK, but I need numbers before our board meeting next week."'
      },
      { 
        id: 'c', 
        text: '"The green bond market is very hot right now. I think it\'s a great idea for CNOOC given the ESG focus. Let me put together a presentation and come back to you."', 
        score: 3, 
        feedback: 'Too vague and salesy. Client asked specific questions (greenium, timeline) and you gave generic cheerleading. A treasurer wants data, not enthusiasm.',
        consequences: 'Sun Tao politely says "Just send me some data when you have it" and hangs up.'
      }
    ],
    teachingPoint: 'When clients ask about new products/structures: (1) Have key numbers ready (even ranges), (2) Outline the process/timeline, (3) Name specific next steps with dates. Be the one who makes things happen, not the one who "checks and gets back."'
  },

  // ==================== INQUIRY HANDLING (10:00-12:00) ====================
  {
    id: 'evt_008',
    time: '10:15',
    phase: 'inquiry-handling',
    type: 'pricing',
    title: 'Client Pricing Request — CMB Secondary',
    description: 'Qian Yu from China Merchants Bank messages: "Can you show me a two-way on ICBCAS 29s? Looking at $10M. Also what\'s the RV vs BCHINA 28s?"',
    sender: 'Qian Yu',
    senderRole: 'CMB Head of FI Trading',
    urgency: 'high',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: 'Message trader: "Need two-way ICBCAS 29s, $10M. Client is CMB — active account, price tight." Then reply to client: "Checking with desk, should have a price within 5 mins. On RV: ICBCAS 29s at T+105 vs BCHINA 28s at T+98 — 7bps pick-up for 1yr extension and slightly weaker credit (A vs A1). Fair value difference is ~5bps IMO, so ICBCAS looks slightly cheap."', 
        score: 10, 
        feedback: 'Perfect process. You (1) gave the trader client context to help pricing, (2) set timeline expectation with client, (3) provided instant RV analysis while waiting for price. This keeps the client engaged.',
        consequences: 'Trader comes back: "100.50/100.80 for $10M." You relay to client who lifts the offer.'
      },
      { 
        id: 'b', 
        text: 'Ask trader for two-way on ICBCAS 29s, then relay the price to client when received. For the RV question, say "Let me pull the comps and get back to you."', 
        score: 6, 
        feedback: 'Functional but slow. You should know the RV immediately from your screens. Saying "let me pull comps" for a straightforward 2-name comparison makes you seem unfamiliar with your market.',
        consequences: 'Client gets impatient waiting. By the time you respond with RV, they\'ve already checked with another bank.'
      },
      { 
        id: 'c', 
        text: 'Reply to client: "Let me check availability and come back to you." Then go find the trader.', 
        score: 3, 
        feedback: 'Too slow and vague. "Check availability" is retail language, not institutional. Client expects you to be wired into the desk and respond in minutes, not "get back to you."',
        consequences: 'Client messages competitor bank simultaneously and trades there instead.'
      }
    ],
    teachingPoint: 'Pricing workflow: (1) Immediately reach out to trader with size + client context, (2) Acknowledge client with timeline, (3) Add value while waiting (RV analysis, market color). Speed and knowledge retention are critical — know your market levels cold.'
  },

  {
    id: 'evt_009',
    time: '10:45',
    phase: 'inquiry-handling',
    type: 'complex',
    title: 'Country Garden — Distressed Situation',
    description: 'Yang Mei from Country Garden calls urgently: "We need to understand our options. The 7.5% 2026s are trading at 45-48 cents. Our board wants to know: should we do a tender offer, an exchange, or just let it mature and pay par? What are other developers doing?"',
    sender: 'Yang Mei',
    senderRole: 'Country Garden CFO',
    urgency: 'high',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: '"Yang Mei, this is a critical decision. Let me give you the high-level framework: (1) Tender at 50-55 cents saves you ~45% vs par but signals credit stress, (2) Exchange into longer maturity maintains face but kicks the can, (3) Paying at par is cleanest but costs $500M cash you may need. Most peers — Longfor, CIFI — have opted for exchange offers at 80-85 cents with maturity extension. Given your liquidity, I\'d recommend we arrange a call with our restructuring team this afternoon. Can your legal team join?"', 
        score: 10, 
        feedback: 'Masterful handling. You provided a clear framework, cited comparable transactions with specific levels, gave a practical recommendation, and proposed concrete next step. This is senior-level advisory work.',
        consequences: 'Yang Mei: "Yes, set up the call for 3PM. Include our outside counsel. This is very helpful."'
      },
      { 
        id: 'b', 
        text: '"I understand the urgency. Let me loop in our restructuring/LME team — they\'re the experts on this. I can set up a call for later this week to discuss your options in detail."', 
        score: 6, 
        feedback: 'Reasonable to involve specialists, but "later this week" is too slow for an urgent distressed situation. Also, as a senior coverage person, you should be able to frame the options yourself before handing off.',
        consequences: 'Yang Mei: "OK but we need something before Thursday board meeting."'
      },
      { 
        id: 'c', 
        text: '"This is really a question for our restructuring advisory team. Let me get you connected. In the meantime, I\'d say the market is pricing in a lot of stress, so any action might be positive."', 
        score: 3, 
        feedback: 'Weak. You\'re deflecting entirely to another team without adding any value yourself. The client called YOU because you\'re their relationship person. Give them something useful before passing to specialists.',
        consequences: 'Yang Mei feels you\'re not equipped to handle their situation. Considers hiring another bank as advisor.'
      }
    ],
    teachingPoint: 'Distressed/LME situations: (1) You don\'t need to be a restructuring expert, but know the basic options (tender/exchange/extend), (2) Always cite comparables, (3) Propose a clear next step with specific timing, (4) This is when client relationships are built or lost.'
  },

  {
    id: 'evt_010',
    time: '11:00',
    phase: 'inquiry-handling',
    type: 'pricing',
    title: 'CDB New Issue — Books Update',
    description: 'DCM sends update: "CDB books 2.5x oversubscribed on 5Y tranche. Guidance revised to T+70 from T+75 area. Final pricing likely T+68. Your accounts: Ping An in for $75M. Any other interest?"',
    sender: 'DCM',
    senderRole: 'Syndicate Desk',
    urgency: 'high',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: 'Immediately call Ping An Liu Jing: "Books 2.5x covered, pricing tightening to T+68 from T+75 initial guidance. Your $75M order is in but given the tightening, you may want to increase to improve allocation — likely pro-rated. Recommend going to $100M to get $60-70M final allocation." Then check with CNPC and CMB if they want to participate.', 
        score: 10, 
        feedback: 'Excellent book management. You (1) updated existing order with market context, (2) strategically advised on order inflation for better allocation, (3) proactively checked other accounts. This maximizes both client and desk outcomes.',
        consequences: 'Liu Jing increases to $100M. CNPC adds $25M. You generate $125M of demand for the desk.'
      },
      { 
        id: 'b', 
        text: 'Update Ping An that pricing has tightened and confirm their $75M order is good. Send a note to other accounts about the CDB opportunity.', 
        score: 6, 
        feedback: 'Acceptable but you missed the strategic angle. When books are oversubscribed, clients need guidance on order inflation. Also "sending a note" is too slow — this is a same-day execution window.',
        consequences: 'Liu Jing keeps at $75M, gets allocated $50M. Slightly disappointed with allocation.'
      },
      { 
        id: 'c', 
        text: 'Confirm with DCM that Ping An\'s $75M is noted and wait for final pricing before updating the client.', 
        score: 3, 
        feedback: 'Passive and adds no value. By waiting for final pricing, you miss the window to help clients optimize their allocation. Good sales people actively manage the book-building process.',
        consequences: 'Ping An gets pro-rated to $45M and is unhappy. DCM is also unhappy you didn\'t drum up more demand.'
      }
    ],
    teachingPoint: 'New issue book management: (1) Update clients in real-time on book and pricing moves, (2) Advise on order inflation when oversubscribed, (3) Use the momentum to bring in additional orders, (4) Remember: in an oversubscribed deal, the syndicate desk rewards sales who bring more demand.'
  },

  {
    id: 'evt_011',
    time: '11:30',
    phase: 'inquiry-handling',
    type: 'risk',
    title: 'Compliance Alert — Potential Conflict',
    description: 'You receive a compliance ping: "Reminder: China State Construction Engineering is on our restricted list due to pending advisory mandate. Please confirm you have not shared any non-public information with the client."',
    sender: 'Compliance',
    senderRole: 'Compliance Officer',
    urgency: 'high',
    category: 'Risk Awareness',
    choices: [
      { 
        id: 'a', 
        text: 'Immediately acknowledge to compliance: "Confirmed. I have not shared any non-public information. My last interaction with CSCE was routine market color on Monday. I will cease proactive outreach until the restriction is lifted. Please advise on what I can/cannot discuss if they call in." Then update your notes.', 
        score: 10, 
        feedback: 'Perfect compliance response. You confirmed status, noted last interaction, proactively offered to cease outreach, and asked about boundary guidelines. This protects both you and the firm.',
        consequences: 'Compliance appreciates your thoroughness and provides clear guidelines.'
      },
      { 
        id: 'b', 
        text: 'Reply: "Confirmed, no non-public information shared." Then continue as normal but avoid discussing anything deal-related with the client.', 
        score: 6, 
        feedback: 'Minimum acceptable response. But you should proactively ask about the boundaries — what CAN you discuss? Market color? Secondary prices? The ambiguity could get you in trouble later.',
        consequences: 'You proceed carefully but aren\'t sure where the line is.'
      },
      { 
        id: 'c', 
        text: 'Think: "This is just routine compliance checking in. I haven\'t done anything wrong." Reply with a simple "Confirmed" and continue outreach to CSCE as normal.', 
        score: 1, 
        feedback: 'DANGEROUS. If a client is on restricted list, you MUST change your behavior. Continuing normal outreach while your firm has a live advisory mandate is a serious compliance violation that can result in termination.',
        consequences: 'You accidentally mention the new issue pipeline to CSCE. Compliance opens a formal investigation.'
      }
    ],
    teachingPoint: 'Compliance is not optional. When a client goes on restricted list: (1) Acknowledge immediately, (2) Document your last interaction, (3) Cease proactive outreach, (4) Ask explicitly what is/isn\'t permitted, (5) When in doubt, DON\'T. The cost of a compliance breach >>> the cost of missing one trade.'
  },

  // ==================== LUNCH & CATCH-UP (12:00-13:00) ====================
  {
    id: 'evt_012',
    time: '12:15',
    phase: 'lunch',
    type: 'market-event',
    title: 'Flash: PBOC Cuts RRR by 25bps',
    description: 'BREAKING: PBOC announces 25bp RRR cut effective immediately. This injects ~$70B of liquidity into the banking system. China credit spreads are tightening across the board. USD/CNH drops 150 pips.',
    sender: 'Bloomberg',
    senderRole: 'Breaking News',
    urgency: 'high',
    category: 'Market Knowledge',
    marketShock: { type: 'risk_on', magnitude: 1.5 },
    choices: [
      { 
        id: 'a', 
        text: 'Immediately blast key clients with market color + your view: "PBOC RRR cut 25bps. Risk-on for China credit. IG should tighten 5-10bps, LGFV biggest beneficiary (10-15bps). Property HY may see short-covering rally. CNH strengthening. Expect CDB new issue to price tight. Happy to discuss positioning."', 
        score: 10, 
        feedback: 'Excellent real-time response. Specific spread estimates by sector, identifies the biggest beneficiary (LGFV), and offers to discuss positioning. This is the kind of instant color that clients value.',
        consequences: 'Multiple clients respond asking for specific levels and trade ideas. You\'re the first bank to give them structured color.'
      },
      { 
        id: 'b', 
        text: 'Call your top 3 clients individually to discuss the RRR cut and its implications for their portfolios.', 
        score: 7, 
        feedback: 'Good instinct to call top clients, but during fast-moving news, a blast + selective calls is more efficient. While you\'re on call #1, clients #4-8 are hearing from competitor banks first.',
        consequences: 'Your top 3 clients are well-served, but smaller accounts feel neglected.'
      },
      { 
        id: 'c', 
        text: 'Wait for research to publish a formal take on the RRR cut before reaching out to clients. Don\'t want to give a wrong view.', 
        score: 3, 
        feedback: 'Wrong approach. In breaking news, speed > perfection. Research takes hours. Clients need instant color. Your job is to be the first voice they hear with a structured framework, even if not perfect.',
        consequences: 'By the time you reach out, every client says "Yes we know, Bank X already called us."'
      }
    ],
    teachingPoint: 'When major news breaks: (1) React within minutes, not hours, (2) Give a structured view even if uncertain (ranges are fine), (3) Segment by sector impact, (4) Blast broadly + call top clients. Speed is your competitive advantage.'
  },

  {
    id: 'evt_013',
    time: '12:45',
    phase: 'lunch',
    type: 'internal',
    title: 'Trader Request — Axe Inventory',
    description: 'HY trader messages: "Post RRR cut, I want to get long China property. Can you sound out clients on VNKRLE 27s and LNGFOR 28s? I can make a market: VNKRLE 73/75, LNGFOR 79/81. Size up to $5M each."',
    sender: 'Trader',
    senderRole: 'HY Credit Trader',
    urgency: 'medium',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: '"Good timing given the RRR cut. Let me reach out to: (1) Country Garden — they might want to buy back peers\' bonds for intel, (2) CMB — they\'ve been looking at RV in property HY, (3) Ping An — unlikely but the rally might interest their tactical book. I\'ll frame it as \'post-RRR opportunity in quality property names\'. Give me 45 mins."', 
        score: 10, 
        feedback: 'Strategic thinking. You matched the axe to specific clients with different motivations (intel, RV, tactical). You also gave the trader a specific timeline and framed the narrative (post-RRR opportunity).',
        consequences: 'CMB bids for $3M VNKRLE at 74. Good result for the trader.'
      },
      { 
        id: 'b', 
        text: '"OK, I\'ll send it out to my client list and see who has interest. Will let you know."', 
        score: 5, 
        feedback: 'Lazy approach. Sending an axe list without targeting specific accounts with a story shows lack of client knowledge. You\'re acting as a message relay, not a sales person.',
        consequences: 'No immediate takers. Trader is mildly frustrated.'
      },
      { 
        id: 'c', 
        text: '"Property HY is too risky to push to my clients right now, even with the RRR cut. Don\'t want to damage my relationships if it goes wrong."', 
        score: 2, 
        feedback: 'This is not your decision to make. Your job is to present opportunities to clients — they decide whether to trade. By pre-screening opportunities, you\'re depriving clients of information and making the trader\'s life harder.',
        consequences: 'Trader goes to another sales person who places the bonds. You miss out on P&L credit.'
      }
    ],
    teachingPoint: 'Working with traders on axes: (1) Always accept the task — never pre-judge, (2) Think about WHO would buy and WHY (different motivations for different clients), (3) Package with a narrative (not "trader wants to sell"), (4) Give specific timeline.'
  },

  // ==================== TRADE EXECUTION (13:00-15:00) ====================
  {
    id: 'evt_014',
    time: '13:15',
    phase: 'execution',
    type: 'execution',
    title: 'CDB New Issue — Final Allocation',
    description: 'DCM confirms: "CDB 5Y priced at T+68. Final book 4x oversubscribed. Your accounts getting: Ping An $65M (from $100M order), CNPC $20M (from $25M). Please confirm allocations with clients and manage expectations."',
    sender: 'DCM',
    senderRole: 'Syndicate',
    urgency: 'high',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Call Ping An: "Liu Jing, CDB 5Y priced at T+68 — 7bps inside initial guidance, strong result. Your allocation is $65M on the $100M order — 65% fill rate, which is above average given 4x oversubscription. The paper should trade well in secondary — I expect T+63-65 within a week given the momentum. Congratulations on the allocation."', 
        score: 10, 
        feedback: 'Excellent allocation call. You (1) highlighted the tightening (good news), (2) contextualized the fill rate vs book size, (3) gave a secondary trading view (adds value), (4) kept it positive. Client feels well-served.',
        consequences: 'Liu Jing: "Good deal. The fill rate is fair given the book size. Happy with the execution."'
      },
      { 
        id: 'b', 
        text: 'Message Ping An: "Hi Liu Jing, CDB 5Y allocated at $65M for you (from $100M order). Priced at T+68. Let me know if you have any questions."', 
        score: 5, 
        feedback: 'Functional but impersonal. Allocation calls should be done by phone for Tier 1 clients, and should include context (book size, fill rate, secondary expectations). A WeChat message for a $65M allocation feels transactional.',
        consequences: 'Liu Jing is mildly disappointed with the fill rate and wonders if another bank could have gotten more.'
      },
      { 
        id: 'c', 
        text: 'Call Ping An: "Sorry Liu Jing, despite your $100M order, you only got $65M. The book was very oversubscribed. I tried my best to get more."', 
        score: 2, 
        feedback: 'NEVER lead with "sorry" or frame the allocation negatively. 65% on a 4x covered book is excellent. You\'re creating dissatisfaction where there should be none. Always frame positively and provide context.',
        consequences: 'Liu Jing is now unhappy — "Only $65M? Other banks got us better allocations on similar deals."'
      }
    ],
    teachingPoint: 'Allocation management: (1) Always call Tier 1 clients, don\'t message, (2) Lead with positive framing (pricing tightened, strong deal), (3) Contextualize the fill rate vs book size, (4) Add value with secondary trading view, (5) NEVER apologize for allocations — reframe positively.'
  },

  {
    id: 'evt_015',
    time: '13:45',
    phase: 'execution',
    type: 'execution',
    title: 'Trade Execution — FX Hedge for CNPC',
    description: 'Wang Lei from CNPC follows up: "We want to hedge the CNH exposure on our new CDB allocation. Need to sell $20M USD/CNH 3-month forward. Can you get me a level?"',
    sender: 'Wang Lei',
    senderRole: 'CNPC Treasury Director',
    urgency: 'high',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: 'To FX desk: "Need USD/CNH 3M forward offer for $20M, client is CNPC." Then to client: "Getting a level from FX desk now, expect within 2 minutes. Current spot is 7.2450, 3M points running around +280/+320. I\'ll try to get you the tight side given the size and relationship."', 
        score: 10, 
        feedback: 'Perfect execution. You (1) went to the right desk immediately, (2) set timeline for client, (3) gave indicative levels so client knows what to expect, (4) signaled you\'ll fight for better pricing. Smooth process.',
        consequences: 'FX desk: "7.2750, good for 2 minutes." You relay and CNPC executes.'
      },
      { 
        id: 'b', 
        text: 'Tell CNPC you\'ll check with FX desk and get back to them with a level.', 
        score: 5, 
        feedback: 'Workable but you should give indicative levels immediately from your knowledge of the market. Not providing forward points makes you seem unfamiliar with the product.',
        consequences: 'Client waits. FX desk asks "what spread can I charge?" — you don\'t know how to answer.'
      },
      { 
        id: 'c', 
        text: '"For FX, you might want to call our FX sales desk directly — they handle all forwards. I can give you the number."', 
        score: 1, 
        feedback: 'Never send your client to another team without staying in the loop. As their coverage person, you coordinate all products. Sending them elsewhere suggests you can\'t handle their needs holistically.',
        consequences: 'CNPC is annoyed. Wang Lei: "I thought you could handle everything for us."'
      }
    ],
    teachingPoint: 'Cross-product execution: (1) Even if you\'re primarily credit sales, you must coordinate FX/rates for your clients, (2) Know basic levels (spot, forward points) for common pairs, (3) Never send a client to another desk without you on the call, (4) Your role is single point of contact.'
  },

  {
    id: 'evt_016',
    time: '14:00',
    phase: 'execution',
    type: 'risk',
    title: 'Error Detected — Wrong Settlement Date',
    description: 'Operations flags: "The ICBCAS 29s trade you booked for CMB has T+3 settlement but client confirmed T+2 on the call. Please confirm correct settlement date urgently — we need to amend before cutoff at 3PM."',
    sender: 'Operations',
    senderRole: 'Trade Support',
    urgency: 'critical',
    category: 'Risk Awareness',
    choices: [
      { 
        id: 'a', 
        text: 'Immediately check your trade notes/recording. Confirm with CMB: "Qian Yu, quick one — confirming your ICBCAS trade settles T+2 as discussed, correct?" Once confirmed, tell Ops to amend to T+2 and personally verify the correction is made before 3PM cutoff. Then update your booking process to double-check settlement dates.', 
        score: 10, 
        feedback: 'Excellent error handling. You (1) verified with client first (never assume), (2) gave clear instructions to Ops, (3) plan to personally verify, (4) think about process improvement. Mistakes happen — it\'s how you handle them that matters.',
        consequences: 'Trade amended correctly. No financial impact. You make a mental note to improve your booking discipline.'
      },
      { 
        id: 'b', 
        text: 'Tell Ops: "It should be T+2, please amend." Then move on to other tasks.', 
        score: 5, 
        feedback: 'You fixed it but didn\'t verify with client first (risky — what if your memory is wrong?) and didn\'t follow up to confirm amendment was made. In operations, trust but verify.',
        consequences: 'Trade is amended, but you didn\'t build the habit of verification that prevents future errors.'
      },
      { 
        id: 'c', 
        text: '"T+3 is standard for USD bonds, maybe the client misspoke? Just leave it as T+3."', 
        score: 1, 
        feedback: 'WRONG. (1) T+2 is now standard for many markets, (2) You never override what the client agreed to, (3) If there\'s any doubt, ASK THE CLIENT. Assuming you know better than what was agreed is how you lose clients and your job.',
        consequences: 'Trade settles wrong, CMB complains, relationship damaged, you get a formal warning.'
      }
    ],
    teachingPoint: 'Operational errors: (1) Never panic but act immediately, (2) Verify with the client — don\'t assume, (3) Give clear instructions with deadline, (4) Follow up to confirm correction, (5) Learn from it and improve your process. Operational excellence is the foundation of trust.'
  },

  {
    id: 'evt_017',
    time: '14:30',
    phase: 'execution',
    type: 'complex',
    title: 'BWIC — Bid Wanted In Competition',
    description: 'You receive a BWIC list from a broker: "BWIC 3PM deadline today: $5M TENCNT 3.595% 2028 (your coverage name), $3M SDHISP 4.8% 2026, $8M CHGRID 3.5% 2030." Your trader wants to know if any of your clients would bid.',
    sender: 'Broker',
    senderRole: 'Inter-dealer Broker',
    urgency: 'high',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: 'Prioritize by client fit: (1) Call CMB for TENCNT — they\'re active in tech IG, (2) Ping Shandong Hi-Speed for their own name SDHISP — natural buyer, (3) Ask Ping An about CHGRID — matches their duration mandate. Give each client the current market level and BWIC size to help them bid. Deadline 3PM — need answers by 2:30.', 
        score: 10, 
        feedback: 'Perfect BWIC management. You matched each line to the most natural buyer, provided context to help them bid competitively, and set a clear internal deadline (30 min before actual). This maximizes hit rate.',
        consequences: 'CMB bids 99.10 for TENCNT (wins), Shandong passes, Ping An bids 98.15 for CHGRID (wins). Two out of three — great result.'
      },
      { 
        id: 'b', 
        text: 'Forward the entire BWIC list to your top 5 clients and ask if anyone has interest in any of the names.', 
        score: 5, 
        feedback: 'Scattergun approach. Clients get annoyed receiving bonds they don\'t care about. Also lacks urgency — no mention of deadline or market levels. Good sales people curate and target.',
        consequences: 'One client responds with a low bid on one name. Below-average hit rate.'
      },
      { 
        id: 'c', 
        text: 'Tell the trader which clients might be interested and let them decide who to approach.', 
        score: 2, 
        feedback: 'That\'s YOUR job, not the trader\'s. The trader manages risk and pricing; you manage client relationships and distribution. Don\'t offload your core function to the trading desk.',
        consequences: 'Trader is frustrated: "I need you to actually call clients, not just tell me who they are."'
      }
    ],
    teachingPoint: 'BWIC management: (1) Match each line to the most natural buyer, (2) Provide market context and size, (3) Set internal deadlines before the actual deadline, (4) Follow up proactively — don\'t wait for clients to come back. (5) Even on lines you don\'t win, the client appreciates being shown the opportunity.'
  },

  // ==================== AFTERNOON SESSION (15:00-16:30) ====================
  {
    id: 'evt_018',
    time: '15:00',
    phase: 'afternoon',
    type: 'market-event',
    title: 'Market Shock — Tariff Escalation',
    description: 'FLASH: "White House confirms 25% tariffs on all Chinese technology imports effective next month. Broader than expected — includes semiconductors, telecom equipment, and cloud services." Market reaction: TENCNT -2pts, BABA -1.5pts, iTraxx Asia IG +8bps, USD/CNH +200 pips to 7.27.',
    sender: 'Bloomberg',
    senderRole: 'Breaking News',
    urgency: 'critical',
    category: 'Market Knowledge',
    marketShock: { type: 'china_specific', magnitude: 2 },
    choices: [
      { 
        id: 'a', 
        text: 'Rapid response protocol: (1) Call Tencent immediately — they\'re directly impacted, update on bond price moves and offer to show them buyback levels, (2) Message all clients with flash update + your quick take: "Broader than expected, tech IG bonds should widen 15-25bps near-term. SOE names less affected. LGFV insulated. Don\'t panic-sell IG — this is headline risk not credit risk for A-rated names." (3) Tell trader to widen offers on tech names.', 
        score: 10, 
        feedback: 'Comprehensive crisis response. You (1) prioritized the directly-impacted client, (2) segmented the impact by sector for all clients, (3) gave a clear, calm view (headline risk ≠ credit risk), (4) coordinated with trading desk. Leadership in a crisis.',
        consequences: 'Tencent appreciates the call. Other clients rely on your framework to avoid panic-selling. Desk head compliments your handling.'
      },
      { 
        id: 'b', 
        text: 'Send update to clients: "Major tariff escalation announced. Markets selling off. Will monitor and update with research view when available." Then call Tencent to check on them.', 
        score: 5, 
        feedback: 'You\'re reacting, not leading. "Will monitor and update" adds no value during a sell-off. Clients need your view NOW, not later. Also, calling Tencent is right, but you should have a clear message when you call.',
        consequences: 'Clients are in dark. Some panic-sell at the lows. Tencent asks "What should we do?" and you don\'t have a clear answer.'
      },
      { 
        id: 'c', 
        text: 'Wait for things to settle before reaching out — don\'t want to add to the panic. Markets often overreact to headlines.', 
        score: 2, 
        feedback: 'WRONG instinct. Silence during a crisis signals that either you don\'t know what\'s happening or you don\'t care. Clients will remember who called them first with a structured view. Your competitors are calling right now.',
        consequences: 'Clients feel abandoned. Several call in asking "Why didn\'t anyone from your team call me?" Relationship damage.'
      }
    ],
    teachingPoint: 'Crisis communication protocol: (1) SPEED — react within 5 minutes, (2) PRIORITIZE — call directly impacted clients first, (3) STRUCTURED VIEW — segment the impact, separate headline risk from fundamental risk, (4) CALM — be the steady voice, provide framework, (5) COORDINATE — align with trading desk on pricing. The best sales people are built in crises.'
  },

  {
    id: 'evt_019',
    time: '15:30',
    phase: 'afternoon',
    type: 'complex',
    title: 'Client Panic — Ping An Wants to Sell',
    description: 'Liu Jing from Ping An calls in a rush: "We need to reduce China tech exposure immediately. Want to sell $30M TENCNT 28s and $20M BABA 27s. Get me bids NOW. Our risk committee is meeting in an hour."',
    sender: 'Liu Jing',
    senderRole: 'Ping An CIO Offshore',
    urgency: 'critical',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: '"Liu Jing, understood — let me get you bids immediately. But let me share a thought: the tariff news hit 30 minutes ago and we\'re likely at the widest point right now. TENCNT has gone from 99 to 97, that\'s 200bps of spread widening in 30 mins — historically these moves retrace 50-70% within a week for IG names. If your risk committee can tolerate holding 48 hours, you\'d likely get 1-1.5pts better execution. That said, I respect your process — let me get firm bids for both. Give me 5 minutes."', 
        score: 10, 
        feedback: 'Masterful balance. You (1) acknowledged urgency and got to work immediately, (2) provided valuable perspective (potential retracement), (3) gave specific data to support your view, (4) respected their decision-making process, (5) committed to fast execution. This is consultative sales at its best.',
        consequences: 'Liu Jing: "Good point. Let me take your view to the risk committee. Get me the bids anyway as a reference, but we may hold if the committee agrees with your logic."'
      },
      { 
        id: 'b', 
        text: '"On it. Let me get bids from our desk right now." Go to trader and get prices, relay back within 5 minutes.', 
        score: 6, 
        feedback: 'Fast and functional, but you missed the opportunity to add value. Just executing without providing perspective makes you an order-taker. In this scenario, the client likely benefits from hearing your view — they\'re panicking.',
        consequences: 'Trader bids 96.75 for TENCNT (2.25pts below yesterday). Client sells at the low and is unhappy a week later when it rebounds.'
      },
      { 
        id: 'c', 
        text: '"I wouldn\'t recommend selling into a panic like this. You\'ll get terrible execution. Let\'s wait a day or two for things to stabilize."', 
        score: 3, 
        feedback: 'Never tell a client what to do with their portfolio, especially when they have a risk committee mandate. You can offer perspective, but pushing back on their instructions without also executing is insubordinate. Always get the bid AND offer the view.',
        consequences: 'Liu Jing: "I didn\'t ask for your opinion on our risk management. Get me the bids or I\'ll call another bank."'
      }
    ],
    teachingPoint: 'Handling panicked clients: (1) ALWAYS execute what they ask — get bids immediately, (2) While executing, offer perspective with data (not opinions), (3) Never say "don\'t sell" — instead frame the tradeoff, (4) Respect their process, (5) The best outcome: client feels informed to make their own decision with your data.'
  },

  {
    id: 'evt_020',
    time: '15:45',
    phase: 'afternoon',
    type: 'internal',
    title: 'Desk Head Meeting — Post-Crisis Debrief',
    description: 'Desk head (MD) messages you: "Quick chat at my desk. Want to discuss (1) P&L impact from today, (2) client positioning, (3) what we tell clients tomorrow. Come prepared."',
    sender: 'Desk Head',
    senderRole: 'MD, Asia Credit Sales',
    urgency: 'medium',
    category: 'Market Knowledge',
    choices: [
      { 
        id: 'a', 
        text: 'Prepare a quick summary: "P&L: CDB new issue is fine (quasi-sov, unaffected), but we have trader inventory in TENCNT and BABA — down roughly $300K on the day. Client positioning: Ping An considering selling tech, CMB still holding, Tencent interested in buyback if spreads widen further. My view for tomorrow: this is a 15-20bps event in tech IG that takes 1-2 weeks to normalize. Recommend we tell clients to use the dip as entry point for quality names."', 
        score: 10, 
        feedback: 'Excellent preparation. Clear, concise, covers all three questions with specific numbers. Shows you understand both the desk economics and client dynamics. This is how you get noticed by senior management.',
        consequences: 'Desk head: "Good summary. I agree on the 1-2 week timeline. Let\'s use that framework for morning call tomorrow. You lead the China section."'
      },
      { 
        id: 'b', 
        text: 'Go to the meeting and respond to questions as they come up. You know your book well enough to discuss ad hoc.', 
        score: 5, 
        feedback: 'Acceptable for a casual check-in, but when an MD specifically asks you to "come prepared," you should have a structured summary. Going in without preparation is a missed opportunity to impress.',
        consequences: 'You stumble on the P&L question and the view for tomorrow is unclear. Desk head is mildly unimpressed.'
      },
      { 
        id: 'c', 
        text: '"Sorry, I\'m still managing client calls from the tariff news. Can we do this tomorrow morning?"', 
        score: 2, 
        feedback: 'Never push back on an MD request for a meeting, especially during a market event. Part of your job is managing both internal (desk) and external (client) stakeholders simultaneously.',
        consequences: 'Desk head is annoyed and meets with another sales person instead. You lose visibility.'
      }
    ],
    teachingPoint: 'Internal communication is as important as client communication. When desk head asks for a debrief: (1) Prepare concise talking points covering P&L, risk, and outlook, (2) Have a clear view with timeframe, (3) Show you understand both desk and client dynamics. Visibility with management drives compensation and career progression.'
  },

  {
    id: 'evt_021',
    time: '16:00',
    phase: 'afternoon',
    type: 'incoming',
    title: 'New Client Introduction',
    description: 'Your colleague in Singapore coverage introduces you via email: "Meet Zhao Ming, new CIO at Sunshine Insurance. They\'re building an offshore USD credit portfolio — $500M mandate, focus on China IG. Please set up an intro call this week."',
    sender: 'Colleague',
    senderRole: 'Singapore Coverage',
    urgency: 'low',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Reply within 30 mins: "Thanks for the intro. Zhao Ming — welcome. I\'d be delighted to introduce our China credit platform. Given the market moves today, this is actually a timely conversation — some excellent entry points forming in IG. Shall we do a call Thursday 10AM? I\'ll prepare: (1) market overview deck, (2) model portfolio suggestion for a $500M IG mandate, (3) our new issue pipeline for the next 4 weeks."', 
        score: 10, 
        feedback: 'Perfect new client approach. Fast response (shows eagerness), ties in current market (relevance), suggests specific time, and offers concrete deliverables (shows preparation). This is how you win mandates.',
        consequences: 'Zhao Ming responds: "Thursday works. Looking forward to it. Especially interested in the model portfolio."'
      },
      { 
        id: 'b', 
        text: 'Reply: "Thanks. Hi Zhao Ming, happy to connect. Let me know when you\'re free this week for a call to discuss how we can help."', 
        score: 5, 
        feedback: 'Too passive. You\'re putting the scheduling burden on the client. Always propose a specific time and specific agenda. "Let me know when you\'re free" signals you have nothing prepared.',
        consequences: 'Zhao Ming replies a day later with generic availability. Takes a week to actually schedule.'
      },
      { 
        id: 'c', 
        text: 'Flag this as something to follow up on next week — too busy with today\'s market events to deal with a non-urgent intro.', 
        score: 2, 
        feedback: 'Never delay on new client introductions. First impressions are everything. A $500M mandate is a significant revenue opportunity. Today\'s market stress actually makes the intro MORE timely, not less.',
        consequences: 'By the time you follow up next week, Zhao Ming has already done intro calls with 3 other banks and formed initial impressions.'
      }
    ],
    teachingPoint: 'New client onboarding: (1) Respond same day — speed signals hunger and professionalism, (2) Propose specific time + agenda, (3) Prepare tangible deliverables (deck, model portfolio, pipeline), (4) Connect current market to their needs. You never get a second chance at a first impression.'
  },

  // ==================== EOD WRAP-UP (16:30-18:00) ====================
  {
    id: 'evt_022',
    time: '16:30',
    phase: 'eod',
    type: 'preparation',
    title: 'Trade Recap — Daily Summary',
    description: 'Time to prepare your end-of-day trade recap and client activity report. Today\'s transactions: CDB 5Y allocation ($85M total for your clients), ICBCAS 29s $10M sale to CMB, TENCNT BWIC $5M purchase by CMB, FX hedge $20M for CNPC.',
    sender: 'System',
    senderRole: 'EOD Process',
    urgency: 'medium',
    category: 'Execution Quality',
    choices: [
      { 
        id: 'a', 
        text: 'Complete detailed recap: list all trades with sizes, prices, and client names. Add market color section summarizing the day (RRR cut + tariff escalation). Flag follow-ups: (1) Ping An — check if they sold tech exposure, (2) CNOOC — schedule green bond call, (3) Country Garden — restructuring team call at 3PM tomorrow, (4) Sunshine Insurance — prep model portfolio for Thursday. Send to desk head and file in CRM.', 
        score: 10, 
        feedback: 'Comprehensive EOD process. Trades documented, context provided, and forward-looking follow-ups captured. This ensures nothing falls through the cracks and your desk head has full visibility. CRM discipline is the foundation of a sustainable franchise.',
        consequences: 'Desk head appreciates the thoroughness. Nothing slips through the cracks tomorrow.'
      },
      { 
        id: 'b', 
        text: 'Quickly list the trades and send to desk head. Make mental notes about tomorrow\'s follow-ups.', 
        score: 5, 
        feedback: 'Trades are documented but mental notes are unreliable. You\'ll forget the Country Garden call or the Sunshine Insurance prep. Write everything down. Future you will thank present you.',
        consequences: 'You forget to prep for the Sunshine Insurance call and have to scramble Thursday morning.'
      },
      { 
        id: 'c', 
        text: 'It\'s been a crazy day. Head home and deal with the recap tomorrow morning when you\'re fresh.', 
        score: 2, 
        feedback: 'Unacceptable. EOD discipline is non-negotiable in sales trading. Trades must be reconciled same day, and follow-ups must be documented while fresh. Leaving it to tomorrow means errors and missed opportunities.',
        consequences: 'Ops finds a booking error the next morning that could have been caught today. Desk head is unhappy.'
      }
    ],
    teachingPoint: 'EOD routine is critical: (1) Document all trades (size, price, client, settlement), (2) Capture forward follow-ups with specific deadlines, (3) Provide market context for the desk, (4) Update CRM. The best sales people are obsessively organized. This compounds over years into an unbeatable client franchise.'
  },

  {
    id: 'evt_023',
    time: '17:00',
    phase: 'eod',
    type: 'preparation',
    title: 'Tomorrow\'s Preparation — Prioritize',
    description: 'Looking at tomorrow\'s agenda. You have: (1) Morning call — lead China section on tariff aftermath, (2) Country Garden restructuring call 3PM, (3) Sunshine Insurance intro prep, (4) Shandong Hi-Speed maturity approaching — refinancing discussion needed, (5) Follow up on Ping An tech position.',
    sender: 'System',
    senderRole: 'Planning',
    urgency: 'low',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Prioritize by revenue impact and urgency: (1) Morning call prep tonight — you\'re presenting, must be sharp, (2) Ping An follow-up first thing — they may have made a decision on selling, (3) Shandong Hi-Speed refinancing — $500M maturity is time-sensitive, schedule call before lunch, (4) Country Garden restructuring prep — gather comparable LME data, (5) Sunshine Insurance model portfolio — do this afternoon when less busy.', 
        score: 10, 
        feedback: 'Excellent prioritization framework. Morning call is immediate (tonight prep), Ping An is time-sensitive (yesterday\'s conversation), Shandong is high-revenue and deadline-driven, Country Garden needs prep time, Sunshine Insurance can wait slightly. This shows strategic time management.',
        consequences: 'You go home knowing tomorrow is fully planned. You\'ll execute efficiently.'
      },
      { 
        id: 'b', 
        text: 'Tackle them in chronological order: morning call, then each item as it comes up through the day.', 
        score: 5, 
        feedback: 'Morning call prep is right, but not prioritizing the rest means you might run out of time for high-value items. Shandong Hi-Speed refinancing needs proactive scheduling, not waiting for it to "come up."',
        consequences: 'You handle morning call well but forget to schedule Shandong Hi-Speed until they call you asking why there\'s no progress.'
      },
      { 
        id: 'c', 
        text: 'It\'s 5PM — you\'ll figure it out in the morning. Head home.', 
        score: 2, 
        feedback: 'The best performers spend 10-15 minutes at EOD planning tomorrow. Flying by the seat of your pants leads to reactive, not proactive, client management. Your competitors are already prepping.',
        consequences: 'Tomorrow feels chaotic from the start. You\'re always one step behind.'
      }
    ],
    teachingPoint: 'End-of-day planning principles: (1) Prioritize by revenue impact AND time sensitivity, (2) Prep for anything you\'re presenting, (3) Schedule proactive outreach — don\'t wait for clients to call you, (4) 15 minutes of planning saves 2 hours of chaos tomorrow. The best sales people are always one step ahead of their clients.'
  },

  // ==================== BONUS SCENARIOS ====================
  {
    id: 'evt_024',
    time: '09:15',
    phase: 'client-outreach',
    type: 'relationship',
    title: 'Client Entertainment Decision',
    description: 'You have two dinner invitations to extend this week: (1) Li Ming from CSCE — Tier 1, but they\'re on restricted list, (2) Gao Feng from Shandong Hi-Speed — Tier 2, but $500M maturity coming and refinancing is a real mandate. Budget only allows one dinner this week.',
    sender: 'You',
    senderRole: 'Planning',
    urgency: 'low',
    category: 'Risk Awareness',
    choices: [
      { 
        id: 'a', 
        text: 'Shandong Hi-Speed dinner. CSCE is on restricted list — even social contact could create an appearance of information flow. Shandong has a live, time-sensitive refinancing need where the dinner can directly advance the mandate. Check with compliance first about CSCE restrictions on social events.', 
        score: 10, 
        feedback: 'Correct on all counts. The restricted list prohibits most contact, including social (which could be perceived as information-sharing opportunity). Shandong Hi-Speed has a live revenue opportunity. Good prioritization.',
        consequences: 'Shandong dinner goes well. Gao Feng shares refinancing timeline and you\'re positioned as lead bank.'
      },
      { 
        id: 'b', 
        text: 'CSCE dinner — they\'re Tier 1, relationships matter most. You won\'t discuss anything deal-related, just maintain the relationship.', 
        score: 2, 
        feedback: 'DANGEROUS. Even "relationship maintenance" with a restricted client can create compliance issues. If anything goes wrong on the advisory mandate, this dinner will be questioned. The restricted list exists to prevent even the appearance of impropriety.',
        consequences: 'Compliance sees the expense report and opens an inquiry. You spend a week documenting that nothing improper was discussed.'
      },
      { 
        id: 'c', 
        text: 'Skip both — dinners are not that important and you have too much to do this week.', 
        score: 4, 
        feedback: 'Client entertainment is an important tool in relationship management, especially in China coverage where guanxi matters. A dinner with Shandong Hi-Speed before their refinancing could meaningfully advance the mandate.',
        consequences: 'Shandong Hi-Speed goes to dinner with a competitor bank who positions for the refinancing lead.'
      }
    ],
    teachingPoint: 'Entertainment and compliance: (1) NEVER entertain restricted list clients — even social contact is risky, (2) Prioritize entertainment by revenue opportunity, not just tier, (3) In China coverage, relationship building (guanxi) over meals is highly effective — use it strategically, (4) When in doubt about restrictions, ASK compliance before acting.'
  },

  {
    id: 'evt_025',
    time: '10:30',
    phase: 'inquiry-handling',
    type: 'pricing',
    title: 'Client Asks for a Market You Don\'t Cover',
    description: 'Xu Hao from Ping An asks: "We\'re also looking at Korean credit — can you show us levels on Hyundai Motor 5Y and SK Hynix 3Y? We want to compare with China tech names."',
    sender: 'Xu Hao',
    senderRole: 'Ping An Portfolio Manager',
    urgency: 'medium',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: '"Xu Hao, Korean credit is covered by my colleague Park Ji-won on the Korea desk. Let me get you connected — I\'ll be on the email to ensure seamless coordination. In the meantime, I can tell you from our Asia IG screen that Korean tech is trading about 15-20bps inside Chinese tech (A- rated). I\'ll send you a quick RV comparison sheet with both markets by end of day."', 
        score: 10, 
        feedback: 'Perfect. You (1) acknowledged it\'s another team\'s coverage, (2) offered to coordinate (stay in the loop), (3) provided immediate value (rough RV indication), (4) committed to a deliverable (comparison sheet). Client feels you\'re a gateway to the whole platform.',
        consequences: 'Xu Hao: "Great, that RV sheet would be very useful. Happy to connect with your Korea colleague."'
      },
      { 
        id: 'b', 
        text: '"That\'s Korea desk coverage. Let me give you Park Ji-won\'s contact and she can help you directly with Korean names."', 
        score: 5, 
        feedback: 'Functional but you\'re handing off without staying involved. The client now has a fragmented experience — one person for China, another for Korea. You should orchestrate the cross-border relationship.',
        consequences: 'Client gets the levels from Korea desk but never gets the China vs Korea RV comparison they actually wanted.'
      },
      { 
        id: 'c', 
        text: '"I\'m not sure about Korean credit levels off the top of my head. Let me check and get back to you."', 
        score: 3, 
        feedback: 'Wrong answer. You shouldn\'t pretend you cover Korea. Be honest about coverage boundaries, but add value by connecting and providing cross-market context. Pretending and then being slow is worse than being direct.',
        consequences: 'You spend 30 minutes trying to find Korean levels yourself, give inaccurate numbers, and look unprofessional.'
      }
    ],
    teachingPoint: 'When asked about markets outside your coverage: (1) Be transparent about coverage boundaries, (2) Introduce the right colleague and STAY on the chain, (3) Add value with cross-market perspective, (4) Never pretend to cover something you don\'t — it always backfires.'
  },

  {
    id: 'evt_026',
    time: '11:15',
    phase: 'inquiry-handling',
    type: 'complex',
    title: 'Shandong Hi-Speed Refinancing Discussion',
    description: 'Gao Feng from Shandong Hi-Speed calls: "Our $500M maturity is in 3 months. We want to explore options: (1) tap our existing 2027 bond, (2) new standalone issue, (3) bilateral bank loan. What do you recommend and what\'s the likely pricing?"',
    sender: 'Gao Feng',
    senderRole: 'Shandong Hi-Speed VP',
    urgency: 'high',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: '"Gao Feng, let me break down the three options: (1) Tap existing 2027 (4.5% coupon, trading at 98.50) — fastest execution (2-3 weeks), minimal documentation, but you\'d issue at ~4.7% YTM to clear. Market appetite for $200-300M tap. (2) New standalone — more flexibility on size/tenor, current guidance for Baa2 LGFV is T+180-200 (so ~5.9-6.1%), 4-6 weeks timeline. (3) Bank loan — cheapest at SOFR+150-180 (so ~6.3% all-in) but no public market signal. My recommendation: tap the existing bond for $300M — fastest path to certainty, and your 27s have good secondary liquidity. Shall I discuss with our DCM team and come back with a formal proposal by Friday?"', 
        score: 10, 
        feedback: 'Outstanding advisory pitch. You provided pricing on all three options with specific levels, timeline for each, recommended one with clear reasoning, and proposed a concrete next step. This is investment banking-level advice from a sales seat.',
        consequences: 'Gao Feng: "Very clear comparison. Let\'s go with the tap approach. Send me the proposal and we\'ll take it to our board next week."'
      },
      { 
        id: 'b', 
        text: '"Good question. Let me discuss with our DCM team and come back with a comparison of the three options. Should have something for you by next week."', 
        score: 5, 
        feedback: 'You should be able to frame the options yourself at a high level. Entirely deferring to DCM makes you look like you don\'t understand the product. A senior sales person should know rough pricing and timelines for their coverage universe.',
        consequences: 'Gao Feng: "OK, but we\'re also talking to Bank of China and they gave us a view today. Don\'t take too long."'
      },
      { 
        id: 'c', 
        text: '"I\'d recommend the new standalone issue — it\'s the cleanest and we can make it a benchmark deal. Let me get DCM to start working on it."', 
        score: 4, 
        feedback: 'You recommended one option without comparing all three, and without addressing the client\'s desire to understand tradeoffs. Also, a new standalone is the slowest and most expensive option for a client with a 3-month deadline. Wrong recommendation.',
        consequences: 'Gao Feng: "But what about the tap? Seems faster. And what about the bank loan option?"'
      }
    ],
    teachingPoint: 'Refinancing advisory: (1) Always compare ALL options the client mentioned, (2) Provide specific pricing, timing, and size for each, (3) Make a clear recommendation with reasoning, (4) Consider the client\'s constraints (3-month deadline favors speed), (5) Propose concrete next step with date. This is where sales becomes advisory and commands wallet share.'
  },

  {
    id: 'evt_027',
    time: '14:15',
    phase: 'execution',
    type: 'risk',
    title: 'Unusual Client Request — Red Flag',
    description: 'A new contact at a small Chinese company you don\'t usually cover calls: "Hi, I was referred by a friend. We want to buy $50M of our own bonds in the secondary market but don\'t want it to be visible. Can you execute without reporting to the market? We\'ll pay a premium."',
    sender: 'Unknown',
    senderRole: 'Anonymous Caller',
    urgency: 'critical',
    category: 'Risk Awareness',
    choices: [
      { 
        id: 'a', 
        text: '"Thank you for reaching out, but I need to be transparent: all our trades are subject to standard reporting and compliance requirements. We cannot execute without proper disclosure. If your company wants to do a formal bond buyback, there are legitimate structures (tender offer, open market purchase program) that I can discuss. But I\'d need to go through our proper client onboarding process first. May I take your details and have our compliance team reach out?"', 
        score: 10, 
        feedback: 'Perfect handling of a compliance red flag. You (1) clearly refused the improper request, (2) explained why, (3) offered the legitimate alternative (formal buyback), (4) flagged the need for proper KYC/onboarding. This protects both you and the firm.',
        consequences: 'Caller hangs up. You file a suspicious activity report with compliance. You\'re protected.'
      },
      { 
        id: 'b', 
        text: '"We can\'t do trades without reporting, that\'s against regulations. Sorry, I can\'t help with this." Then hang up.', 
        score: 6, 
        feedback: 'You refused correctly, but you should also report this interaction to compliance. An unusual request like this — undisclosed buyback, anonymous caller, offering premium — could be market manipulation. You have a duty to report.',
        consequences: 'You refused but didn\'t report. If this caller goes to another bank and something happens, your failure to report could be questioned.'
      },
      { 
        id: 'c', 
        text: '"Interesting. Let me check what we can do. What\'s the bond and what premium are you willing to pay?"', 
        score: 0, 
        feedback: 'CRITICAL FAILURE. This is potentially market manipulation (undisclosed buyback to inflate prices) and/or a compliance trap. Engaging with this request in any way could result in immediate termination and regulatory action. This is a career-ending mistake.',
        consequences: 'If you proceed, you face potential criminal charges for market manipulation. Immediate investigation.'
      }
    ],
    teachingPoint: 'Red flag recognition: (1) Anonymous callers wanting large trades = always suspicious, (2) "Don\'t want it visible" = market manipulation, (3) Offering premium for non-standard execution = bribery/inducement, (4) ALWAYS refuse and ALWAYS report to compliance. No trade is worth your career or freedom. Know your KYC and AML obligations cold.'
  },

  {
    id: 'evt_028',
    time: '16:15',
    phase: 'afternoon',
    type: 'internal',
    title: 'Bonus Discussion Season',
    description: 'It\'s that time of year. Your desk head asks you to write a self-assessment for compensation review. "Highlight your key achievements and revenue contribution this year. Keep it to one page."',
    sender: 'Desk Head',
    senderRole: 'MD, Asia Credit Sales',
    urgency: 'low',
    category: 'Client Handling',
    choices: [
      { 
        id: 'a', 
        text: 'Write a structured self-assessment: "Revenue: Generated $3.2M in sales credits (vs $2.1M prior year, +52% YoY). Key wins: (1) Won Sunshine Insurance $500M mandate — new account from zero, (2) Led CDB new issue allocation $85M across 3 accounts, (3) Managed Country Garden through LME with zero P&L loss. Franchise: Expanded coverage from 6 to 8 active accounts. Market share: Estimated #2 in China IG flow with Ping An and CNPC."', 
        score: 10, 
        feedback: 'Excellent self-advocacy. Specific numbers, clear YoY progression, mix of revenue and franchise metrics, named specific deals. This gives your desk head ammunition to fight for your compensation.',
        consequences: 'Desk head uses your numbers directly in the comp committee presentation. You get a strong result.'
      },
      { 
        id: 'b', 
        text: 'Write: "Strong year for China corporate sales. Maintained key client relationships, participated in major new issues, handled the property sector stress well. Looking forward to growing the franchise further next year."', 
        score: 4, 
        feedback: 'Way too generic. No numbers, no specifics, no proof points. This reads like a new joiner, not a revenue producer. Desk head can\'t use this to advocate for you in comp committee.',
        consequences: 'Desk head asks you to redo it with actual numbers. You look unprepared.'
      },
      { 
        id: 'c', 
        text: '"I think my results speak for themselves. I don\'t feel comfortable self-promoting." Just submit minimal bullet points.', 
        score: 2, 
        feedback: 'In investment banking, if you don\'t advocate for yourself, nobody will. Comp committees allocate based on documented contribution. Being humble is admirable in life, but comp season requires clear, quantified self-advocacy.',
        consequences: 'Your desk head tries to fight for you but has no data. You get a below-expectations bonus.'
      }
    ],
    teachingPoint: 'Compensation self-assessment: (1) ALWAYS quantify — revenue in $, growth in %, deals with names, (2) Structure: revenue contribution → key deals → franchise building → market position, (3) One page, bullet points, no fluff, (4) This is not bragging — it\'s providing data for a business decision. The comp committee needs numbers to allocate.'
  },

  {
    id: 'evt_029',
    time: '12:30',
    phase: 'lunch',
    type: 'relationship',
    title: 'Competitor Intelligence',
    description: 'At a industry conference lunch, a contact at a competitor bank casually mentions: "We just hired three people for China property restructuring. Big build-out. Heard your Country Garden mandate might be at risk." How do you respond?',
    sender: 'Competitor',
    senderRole: 'Industry Contact',
    urgency: 'medium',
    category: 'Risk Awareness',
    choices: [
      { 
        id: 'a', 
        text: 'Smile, don\'t confirm or deny anything about Country Garden. Respond: "China restructuring is certainly a growth area. Good luck with the build." Then internally note: (1) competitor is building restructuring team — could be a threat, (2) don\'t share any client information, (3) flag to desk head and accelerate Country Garden engagement. After lunch, call Yang Mei to reinforce the relationship.', 
        score: 10, 
        feedback: 'Perfect handling. You (1) didn\'t reveal client information, (2) didn\'t react emotionally, (3) gathered competitive intelligence without sharing any, (4) planned defensive action. This is how you protect your franchise while maintaining industry relationships.',
        consequences: 'You call Country Garden the same afternoon. Yang Mei confirms she\'s been approached but values your existing relationship. Mandate secure.'
      },
      { 
        id: 'b', 
        text: '"Our relationship with Country Garden is strong. We\'ve been working with them for years." Then change the subject.', 
        score: 5, 
        feedback: 'You confirmed the client relationship, which is unnecessary. Even a defensive statement gives information to a competitor. Better to say nothing substantive about specific clients.',
        consequences: 'Competitor now knows for sure you\'re working with Country Garden and adjusts their pitch accordingly.'
      },
      { 
        id: 'c', 
        text: '"Really? What else have you heard about Country Garden? Are they actually doing an LME?"', 
        score: 1, 
        feedback: 'NEVER fish for client information from competitors. This (1) confirms your involvement, (2) shows you might not have full information (weakness), (3) could constitute improper information sharing if they tell you something material non-public.',
        consequences: 'Competitor realizes you\'re insecure about the mandate and intensifies their pitch to Country Garden.'
      }
    ],
    teachingPoint: 'Competitive intelligence: (1) Listen more than you speak, (2) NEVER confirm or deny client relationships, (3) Don\'t react emotionally to competitive threats, (4) Gather intelligence and act on it internally, (5) When in doubt, respond with a vague positive and change subject. Then IMMEDIATELY take defensive action on your franchise.'
  },

  {
    id: 'evt_030',
    time: '17:30',
    phase: 'eod',
    type: 'relationship',
    title: 'End of Simulation — Final Reflection',
    description: 'Your trading day is complete. Reflect on the key lessons from today: handling morning prep, client outreach, trade execution under pressure, crisis management, and compliance awareness. What\'s your biggest takeaway?',
    sender: 'System',
    senderRole: 'Simulation',
    urgency: 'low',
    category: 'Market Knowledge',
    choices: [
      { 
        id: 'a', 
        text: '"Speed + structure wins. Today I learned that being first with a structured view (not just information) is what differentiates great sales from mediocre ones. The clients who got the best service today were the ones I reached proactively with a framework, not just data."', 
        score: 10, 
        feedback: 'This captures the essence of institutional sales. Information is commoditized — everyone has Bloomberg. Your competitive edge is the speed and quality of your INTERPRETATION. Be first with a view, not just first with facts.',
        consequences: 'Congratulations! You\'ve completed the simulation with a strong performance.'
      },
      { 
        id: 'b', 
        text: '"Client relationships are everything. Even in a crisis, maintaining calm and being available builds long-term trust that generates revenue over years."', 
        score: 8, 
        feedback: 'Absolutely true, and an important insight. Relationships are indeed the foundation. But combine this with speed and structure, and you have the full picture of what makes a top performer.',
        consequences: 'Good reflection. You have the relationship mindset — now add the execution speed.'
      },
      { 
        id: 'c', 
        text: '"I need to know my market levels better. Several times today I had to check prices that I should have known off the top of my head."', 
        score: 7, 
        feedback: 'Self-awareness is valuable. Yes, knowing your market cold is table stakes. But don\'t just memorize prices — understand the WHY behind moves and the relative value relationships. That\'s what clients pay for.',
        consequences: 'Good self-critique. Study your market screens daily until levels become second nature.'
      }
    ],
    teachingPoint: 'The three pillars of excellent offshore China corporate sales: (1) SPEED — be first to clients with information and views, (2) STRUCTURE — always provide a framework, not just data points, (3) RELATIONSHIPS — build trust through consistency, transparency, and being there in crises. Combined, these create an unbeatable franchise that generates revenue for decades.'
  }
];

// Phase definitions for UI
const PhaseDefinitions = {
  'pre-market': { label: 'Pre-Market', timeRange: '7:30-8:00', color: '#4a9eff', icon: '📋' },
  'morning-call': { label: 'Morning Call', timeRange: '8:00-8:30', color: '#ff6b4a', icon: '📞' },
  'client-outreach': { label: 'Client Outreach', timeRange: '8:30-10:00', color: '#4aff6b', icon: '🤝' },
  'inquiry-handling': { label: 'Inquiry Handling', timeRange: '10:00-12:00', color: '#ffd54a', icon: '💬' },
  'lunch': { label: 'Lunch & Market Events', timeRange: '12:00-13:00', color: '#a64aff', icon: '⚡' },
  'execution': { label: 'Trade Execution', timeRange: '13:00-15:00', color: '#4affd5', icon: '⚡' },
  'afternoon': { label: 'Afternoon Session', timeRange: '15:00-16:30', color: '#ff4a6b', icon: '📊' },
  'eod': { label: 'EOD Wrap-up', timeRange: '16:30-18:00', color: '#8a9bae', icon: '📝' }
};
