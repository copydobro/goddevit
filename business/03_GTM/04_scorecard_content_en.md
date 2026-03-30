# GTM Scorecard Content (English)

This document contains the core copy for the interactive CLI-style React Scorecard application.

## 1. Introduction Screen (Boot Sequence)
**[root@mws-agency ~]$ ./run-diagnostic**
> "Your codebase works flawlessly, but your signups chart looks like a flatline? 
> Answer a few rapid-fire questions to find out exactly which of the 5 Go-To-Market phases your startup is stuck in. 
> 
> Analyzing system environment... [OK]
> Press ENTER or click START to begin."

---

## 2. Quiz Questions & Scoring

### Q1: Who is your product actually for?
*(Targeting System: ICP Definition)*
- `[ A ]` "For all developers and indie-hackers everywhere." **[0 pts]**
- `[ B ]` "For a specific niche (e.g. Python backend devs in fintech)." **[5 pts]**
- `[ C ]` "For a specific business role (e.g. Engineering Managers with budgets)." **[10 pts]**

### Q2: How did you acquire your last 5 active users?
*(Event Log: Distribution Channels)*
- `[ A ]` "We haven't attracted any active users yet (0 users)." **[0 pts]**
- `[ B ]` "Randomly, after a launch post on Reddit / Hacker News." **[2 pts]**
- `[ C ]` "Organically, through SEO or our documentation." **[5 pts]**
- `[ D ]` "Through systematic outbound outreach or a managed product-led growth loop." **[10 pts]**

### Q3: What have you been focusing on for the last 14 days?
*(Process Monitor: Founder Behavior)*
- `[ A ]` "Refactoring codebase and shipping minor features." **[0 pts]**
- `[ B ]` "Improving the landing page, UI, and docs." **[5 pts]**
- `[ C ]` "User interviews, discovery calls, and cold outbound." **[10 pts]**

---

## 3. Diagnostic Outcomes (Terminal Output)

### Phase -1: Diagnostics & Foundation (0 - 10 pts)
**STATUS: FATAL ERROR IN GTM PHASE -1 (DIAGNOSTICS & FOUNDATION)**
> **[ DIAGNOSTIC INSIGHT ]**
> You are building in a vacuum. By targeting "everyone", your messaging is too generic to pierce through the noise. Your "engineer's firmware" is tricking you into thinking that shipping more features will bring users. It won't. The market isn't rejecting your product; it simply doesn't know who the product is for.
> 
> **[ THE METRIC THAT MATTERS ]**
> Bounce Rate & Activation. Without a precise ICP, your organic traffic is useless because your landing page doesn't mirror the user's specific pain.
> 
> **[ 3-STEP RECOVERY PROTOCOL ]**
> 1. The 'Niche Down' Rule: Erase "developers" from your targeting. Select one highly specific role.
> 2. The H1 Refactor: Rewrite your hero section. Stop explaining what your tool does. Start explaining whose top-priority headache it violently removes.
> 3. The Engineering Freeze: Halt all feature development until you have interviewed 5 people in that exact niche who confirm your assumption is their Top-3 problem.

### Phase 0: Packaging (11 - 20 pts)
**STATUS: SYSTEM FAULT IN GTM PHASE 0 (PACKAGING)**
> **[ DIAGNOSTIC INSIGHT ]**
> Your technical foundation is solid, but your packaging is leaking trust. Developers are ruthless evaluators with zero patience. If they land on your repo or docs and cannot instantly understand how to deploy and test your solution, they will close the tab. You have an audience, but poor "Time to First Value" (TTFV) is killing your conversions.
> 
> **[ THE METRIC THAT MATTERS ]**
> Time to "Hello World". If it takes more than 3 minutes to see the core value, your drop-off rate will exceed 80%.
> 
> **[ 3-STEP RECOVERY PROTOCOL ]**
> 1. The 3-Minute Quickstart: Rebuild your README. Provide a clean, unauthenticated curl/npm command that works instantly without requiring a credit card or complex setup.
> 2. Trust Architecture: Embed social proof (even just 3 beta user testimonials or a GitHub star badge) immediately above the fold.
> 3. Friction Removal: Remove mandatory email signups for downloading open-source wrappers or reading your API docs.

### Phase 1: First Clients (21 - 30 pts)
**STATUS: WARNING IN GTM PHASE 1 (FIRST CLIENTS)**
> **[ DIAGNOSTIC INSIGHT ]**
> You are trying to automate a system that hasn't been manually proven. You cannot scale a Go-To-Market motion without direct, raw qualitative feedback from the market. Relying entirely on SEO or random Reddit launches means you don't control your growth. You are throwing darts in the dark.
> 
> **[ THE METRIC THAT MATTERS ]**
> Reply Rate on cold outreach. You need signals that your specific Value Proposition actually resonates with strangers.
> 
> **[ 3-STEP RECOVERY PROTOCOL ]**
> 1. Halt Automation: Stop building automated email sequences. You need to do things that don't scale.
> 2. The 50 DM Challenge: Send 50 highly-personalized manual messages (Twitter/X, LinkedIn, Discord) to your exact ICP.
> 3. The Beta Ask: Do not sell access. Ask for 15 minutes to show them how you solved a specific problem and ask if they encounter the same issue.

### Phase 2: Public Momentum (31 - 40 pts)
**STATUS: BOTTLENECK IN GTM PHASE 2 (PUBLIC MOMENTUM)**
> **[ DIAGNOSTIC INSIGHT ]**
> You have users, but you are suffering from the "Launch Spike" trap. You get a surge of traffic from Hacker News or Product Hunt, and then your graph flatlines. You haven't built a sustainable community or a "Build in Public" momentum loop, so every month feels like starting from zero.
> 
> **[ THE METRIC THAT MATTERS ]**
> Returning User Rate & Organic Brand Searches.
> 
> **[ 3-STEP RECOVERY PROTOCOL ]**
> 1. The Backlog Broadcast: Turn your Jira/Linear board into content. Share your engineering struggles, architectural decisions, and bug-fixes publicly on X/Threads.
> 2. The Waitlist Wedge: Before your next major feature launch, build a waitlist. Manufacture anticipation over 14 days rather than launching unannounced.
> 3. The DLG Loop: Implement a Developer-Led Growth loop. Give your users a visceral reason (e.g., an embeddable badge or referral unlock) to share your tool with their team.

### Phase 3: Scalable Acquisition (41 - 50 pts)
**STATUS: SYSTEM OPTIMAL IN GTM PHASE 3 (SCALABLE ACQUISITION)**
> **[ DIAGNOSTIC INSIGHT ]**
> You are in the top 5% of technical founders. You possess product-market fit and understand how to sell to engineers. Your current bottleneck isn't the foundation—it's execution bandwidth. You are still relying on brute-force organic growth rather than engineered, deterministic outbound pipelines.
> 
> **[ THE METRIC THAT MATTERS ]**
> Customer Acquisition Cost (CAC) vs Lifetime Value (LTV).
> 
> **[ 3-STEP RECOVERY PROTOCOL ]**
> 1. Signal-Based Outbound: Use data-enrichment tools (Apollo/Clay) to monitor the market for intent signals (e.g., when a company hires a new Head of Engineering) and trigger automated outreach.
> 2. Cross-Pollination Sprints: Partner with adjacent dev-tools for co-marketing webinars or API integrations.
> 3. The Delegation Shift: You must fire yourself from daily marketing execution. Systematize your voice and delegate to a specialized GTM agency or hire a Growth lead.

---

## 4. Final CTA (Call to Action)
> "Want the exact blueprint to fix this? Book a GTM Strategy Audit. We'll find a minimum of 5 specific gaps in your pipeline or refund you completely."
> 
> **`> [?] Curious how we fix this? Click to view the GTM Audit specifications...`** *(Expandable Action)*
> 
> *(On Expanded)*  
> `=== GTM AUDIT SPECIFICATIONS ===`  
> `[ WHAT WE SOLVE ]`  
> We eliminate the guesswork in your growth. We identify the exact bottlenecks in your pipeline that are preventing developers from finding, trusting, and buying your product.  
> 
> `[ WHAT YOU GET (DELIVERABLES) ]`  
> 1. A comprehensive Notion Report mapping your exact failure points.  
> 2. A 10-minute Loom video breaking down the technical findings.  
> 3. A 30-Day Step-by-Step Action Protocol to fix your distribution.  
> 
> `[ WHAT WE NEED FROM YOU (7 DAYS) ]`  
> No sales calls. Just fill out a 6-question asynchronous brief (takes 10 minutes) detailing your product, current traction, and biggest pain point. We handle the rest.  
> 
> `[ THE ZERO-RISK GUARANTEE ]`  
> We guarantee to find a minimum of 5 measurable, fixable gaps in your Go-To-Market strategy. If we can't find 5 solid gaps, we will refund your $500 immediately. You risk nothing.
> 
> `> [BOOK GTM AUDIT ($500)]`
> `> [EXIT]`
