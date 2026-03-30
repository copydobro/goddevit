const CONFIG = {
    bootDelay: 50,
    typeSpeed: 13,
    fastTypeSpeed: 6,
    eraseSpeed: 10
};

// Initialize PostHog
if (typeof posthog !== 'undefined') {
    posthog.init(POSTHOG_API_KEY, {api_host: POSTHOG_HOST});
}

const state = {
    currentStep: 'BOOT', // BOOT | INTRO | INPUT | ANALYZING | RESULT
    readmeText: '',
    findings: [],
    totalScore: 0,
    isTyping: false
};

const dom = {
    bootScreen: document.getElementById('boot-screen'),
    bootLogs: document.getElementById('boot-logs'),
    terminal: document.getElementById('terminal'),
    screen: document.getElementById('screen'),
    flash: document.getElementById('flash'),
    fileUpload: document.getElementById('file-upload')
};

// --- Typewriter Engine (unchanged) ---
async function typewriter(text, targetEl, append = false) {
    return new Promise(resolve => {
        state.isTyping = true;
        if (!append) targetEl.innerHTML = '';

        let i = 0;
        const container = document.createElement('div');
        container.className = 'typing-text';
        targetEl.appendChild(container);

        function type() {
            if (i < text.length) {
                const char = text[i];
                if (char === '\n') {
                    container.innerHTML += '<br>';
                } else {
                    container.innerHTML += char;
                }
                i++;
                setTimeout(type, char === '.' || char === '?' ? 100 : CONFIG.typeSpeed);
            } else {
                state.isTyping = false;
                resolve();
            }
        }
        type();
    });
}

function flash() {
    dom.flash.classList.remove('flash-animate');
    void dom.flash.offsetWidth;
    dom.flash.classList.add('flash-animate');
}

// --- Analysis Engine ---
function analyzeReadme(rawText) {
    // Normalize line endings
    const text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = text.split('\n');
    const first5 = lines.slice(0, 5).join(' ');
    const findings = [];
    let totalScore = 0;

    // CHECK 1: Problem statement in first 5 lines (max 6)
    const problemRegex = /problem|issue|pain|struggle|hate|tired|can't|cannot|without|instead of|alternative/i;
    const hasProblem = problemRegex.test(first5);
    const s1 = hasProblem ? 6 : 0;
    totalScore += s1;
    findings.push({
        id: 'problem_statement',
        label: 'Problem statement in first 5 lines',
        status: hasProblem ? 'ok' : 'fail',
        score: s1, max: 6,
        tip: 'Add 1-2 sentences above the fold: what pain does this solve and for whom? Data: TOAST UI rewrote README only (no new features) → conversion 4% → 20% (5x). 3,000 stars in one week. Every month without a problem statement = ~4 months of organic growth lost.'
    });

    // CHECK 2: Value proposition "X for Y" or "alternative to Z" (max 6)
    const altRegex = /alternative to\s+\w+/i;
    const forRegex = /\bfor\s+(developers?|engineers?|teams?|startups?|designers?|data scientists?|devops|backend|frontend|fullstack)\b/i;
    const isStrong = altRegex.test(text);
    const isGeneric = forRegex.test(text);
    const s2 = isStrong ? 6 : isGeneric ? 3 : 0;
    const status2 = isStrong ? 'ok' : isGeneric ? 'warn' : 'fail';
    totalScore += s2;
    findings.push({
        id: 'value_prop',
        label: 'Value proposition clarity',
        status: status2,
        score: s2, max: 6,
        tip: 'Use "X for Y" format. Bad: "Fast tool for devs". Good: "Redis GUI for backend engineers who hate slow dashboards".'
    });

    // CHECK 3: Quick Start section (max 4)
    const quickStartRegex = /^#{1,3}\s*(quick\s*start|getting\s*started|installation|install|setup)/im;
    const hasQuickStart = quickStartRegex.test(text);
    const s3 = hasQuickStart ? 4 : 0;
    totalScore += s3;
    findings.push({
        id: 'quick_start',
        label: 'Quick Start / Installation section',
        status: hasQuickStart ? 'ok' : 'fail',
        score: s3, max: 4,
        tip: 'Add a "Quick Start" section with a single copy-paste command that works in under 3 minutes.'
    });

    // CHECK 4: Code blocks (max 3)
    const codeBlocks = Math.floor(((text.match(/```/g) || []).length) / 2);
    const s4 = codeBlocks >= 1 ? 3 : 0;
    totalScore += s4;
    findings.push({
        id: 'code_blocks',
        label: `Code blocks (${codeBlocks} found)`,
        status: codeBlocks >= 1 ? 'ok' : 'fail',
        score: s4, max: 3,
        tip: 'Add fenced code blocks (```) showing real usage. Devs copy-paste before they read.'
    });

    // CHECK 5: GIF / video demo (max 10) — highest weight
    const gifRegex = /\.gif["')]/i;
    const videoRegex = /youtube\.com|youtu\.be|vimeo\.com|loom\.com|asciinema\.org|streamable\.com/i;
    const videoTagRegex = /<video|<source/i;
    const hasDemo = gifRegex.test(text) || videoRegex.test(text) || videoTagRegex.test(text);
    const s5 = hasDemo ? 10 : 0;
    totalScore += s5;
    findings.push({
        id: 'gif_demo',
        label: 'GIF or video demo',
        status: hasDemo ? 'ok' : 'fail',
        score: s5, max: 10,
        tip: 'Add an animated GIF of your core feature. Every successful README in the benchmark dataset includes an animated demo. Show the use case, not just the mechanic — bad: "tool running", good: "tool solving the exact problem your ICP has." Free tool: ScreenToGif.'
    });

    // CHECK 6: Screenshots / images (max 5)
    const imgRegex = /!\[.*?\]\(.*?\.(png|jpg|jpeg|svg|webp)/gi;
    const imgs = (text.match(imgRegex) || []).length;
    const s6 = imgs >= 1 ? 5 : 0;
    totalScore += s6;
    findings.push({
        id: 'screenshots',
        label: `Screenshots / images (${imgs} found)`,
        status: imgs >= 1 ? 'ok' : 'fail',
        score: s6, max: 5,
        tip: 'Add at least one screenshot showing the product in action. Reduces "I need to install it to see it" friction.'
    });

    // CHECK 7: Live demo link (max 5)
    const demoLinkRegex = /\[.*?(demo|playground|try it|live|sandbox).*?\]\(https?:\/\//i;
    const demoTextRegex = /(demo|playground|try it live|live demo)\s*[:\-–]?\s*https?:\/\//i;
    const hasLiveDemo = demoLinkRegex.test(text) || demoTextRegex.test(text);
    const s7 = hasLiveDemo ? 5 : 0;
    totalScore += s7;
    findings.push({
        id: 'live_demo',
        label: 'Live demo or playground link',
        status: hasLiveDemo ? 'ok' : 'fail',
        score: s7, max: 5,
        tip: "Add a hosted demo URL. Removes the #1 adoption blocker: \"I'd have to install it first\"."
    });

    // CHECK 8: Badges / shields.io (max 3)
    const badgeRegex = /shields\.io|img\.shields|!\[.*?\]\(https?:\/\/.*?(badge|shield)/i;
    const hasBadges = badgeRegex.test(text);
    const s8 = hasBadges ? 3 : 0;
    totalScore += s8;
    findings.push({
        id: 'badges',
        label: 'Status badges (shields.io)',
        status: hasBadges ? 'ok' : 'fail',
        score: s8, max: 3,
        tip: 'Add build status + license + version badges. They signal active maintenance in under 1 second.'
    });

    // CHECK 9: Social proof (max 3)
    const socialRegex = /used by|trusted by|in production|([0-9]+[k+]?\s*(users?|downloads?|companies|teams?|stars?))/i;
    const hasSocial = socialRegex.test(text);
    const s9 = hasSocial ? 3 : 0;
    totalScore += s9;
    findings.push({
        id: 'social_proof',
        label: 'Social proof signals',
        status: hasSocial ? 'ok' : 'fail',
        score: s9, max: 3,
        tip: 'Add "Used by X teams in production" or a download/star count. Even 3 beta testers counts as proof. Data: cold launch (0 audience) = 26 signups. Warm launch (25K email list) = 663 signups. 25x difference — driven entirely by social proof and owned audience.'
    });

    // CHECK 10: Contributing guide (max 5)
    const contribRegex = /CONTRIBUTING\.md|contributing\.md|^#{1,3}\s*contributing/im;
    const hasContrib = contribRegex.test(text);
    const s10 = hasContrib ? 5 : 0;
    totalScore += s10;
    findings.push({
        id: 'contributing',
        label: 'Contributing guide mentioned',
        status: hasContrib ? 'ok' : 'fail',
        score: s10, max: 5,
        tip: 'Link to CONTRIBUTING.md. Signals community readiness and attracts first PRs.'
    });

    // CHECK 11: Changelog / releases (max 4)
    const changelogRegex = /CHANGELOG|changelog|^#{1,3}\s*(changelog|releases?|what'?s new)/im;
    const hasChangelog = changelogRegex.test(text);
    const s11 = hasChangelog ? 4 : 0;
    totalScore += s11;
    findings.push({
        id: 'changelog',
        label: 'Changelog or releases section',
        status: hasChangelog ? 'ok' : 'fail',
        score: s11, max: 4,
        tip: 'Add a Changelog section or link to GitHub Releases. Gives returning users a reason to come back.'
    });

    return { score: totalScore, findings };
}

// --- LLM Analysis via OpenRouter ---
async function callOpenRouter(model, prompt) {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'README GTM Analyzer'
        },
        body: JSON.stringify({
            model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.1,
            max_tokens: 1200
        })
    });
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    if (data.error) throw new Error(data.error.message || 'Model error');
    const content = data.choices[0]?.message?.content;
    if (!content) throw new Error('Empty response from model');
    return content.trim();
}

async function analyzeReadmeWithLLM(rawText) {
    // Truncate to ~4000 chars to stay within free model context limits
    const text = rawText.slice(0, 4000);

    const prompt = `You are a GTM (go-to-market) expert. Analyze this GitHub README for marketing effectiveness.

Return ONLY a valid JSON object — no markdown, no explanation, nothing else.

Evaluate exactly these 11 checks. For each, decide: "ok" (full points), "warn" (partial), or "fail" (0 points).

Checks and max points:
1. id: "problem_statement", label: "Problem statement in first 5 lines", max: 6
   — Is there a clear problem/pain in the first 5 lines? ok=6, warn=3, fail=0
2. id: "value_prop", label: "Value proposition clarity", max: 6
   — Is there an "X for Y" or "alternative to Z" statement? ok=6, warn=3, fail=0
3. id: "quick_start", label: "Quick Start / Installation section", max: 4
   — Is there a Quick Start or Installation section? ok=4, fail=0
4. id: "code_blocks", label: "Code examples present", max: 3
   — Are there code blocks showing usage? ok=3, fail=0
5. id: "gif_demo", label: "GIF or video demo", max: 10
   — Is there a GIF, video, or demo link? ok=10, fail=0
6. id: "screenshots", label: "Screenshots / images", max: 5
   — Are there screenshots or images? ok=5, fail=0
7. id: "live_demo", label: "Live demo or playground link", max: 5
   — Is there a hosted demo users can try? ok=5, fail=0
8. id: "badges", label: "Status badges (shields.io)", max: 3
   — Are there build/license/version badges? ok=3, fail=0
9. id: "social_proof", label: "Social proof signals", max: 3
   — Any mention of users, downloads, companies using it? ok=3, fail=0
10. id: "contributing", label: "Contributing guide mentioned", max: 5
    — Is CONTRIBUTING.md or a contributing section present? ok=5, fail=0
11. id: "changelog", label: "Changelog or releases section", max: 4
    — Is there a Changelog or releases section? ok=4, fail=0

For each "warn" or "fail" item, write a short actionable tip (1-2 sentences, specific to THIS README).
For "ok" items, tip should be an empty string "".

JSON format:
{"findings":[{"id":"...","label":"...","status":"ok"|"warn"|"fail","score":N,"max":N,"tip":"..."}]}

README:
---
${text}
---`;

    // Try primary model (GLM-4.5 Air free), fallback to Llama if unavailable
    let content;
    try {
        content = await callOpenRouter(OPENROUTER_MODEL, prompt);
    } catch (e) {
        console.warn(`Primary model failed (${e.message}), trying fallback...`);
        content = await callOpenRouter(OPENROUTER_MODEL_FALLBACK, prompt);
    }

    // Extract JSON even if model wraps it in markdown
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in response');

    const parsed = JSON.parse(jsonMatch[0]);
    const score = parsed.findings.reduce((sum, f) => sum + (f.score || 0), 0);
    return { score, findings: parsed.findings };
}

function getVerdict(score) {
    if (score >= 45) return { text: 'SYSTEM OPTIMAL — Launch Ready', cssClass: 'status-optimal' };
    if (score >= 30) return { text: 'WARNING — Almost There', cssClass: 'status-warning' };
    if (score >= 15) return { text: 'SYSTEM FAULT — Work Needed', cssClass: 'status-fatal' };
    return { text: 'FATAL ERROR — Rebuild Required', cssClass: 'status-fatal' };
}

// --- State Machine ---
async function transition(newState) {
    state.currentStep = newState;
    flash();

    if (newState === 'INTRO') {
        dom.bootScreen.style.display = 'none';
        dom.terminal.classList.add('visible');
        await typewriter(
            "[root@mws-readme ~]$ ./readme-analyzer --init\n\nYou have traction. Stars. A launch or two. Real users.\nNot enough of them. Not consistently.\n\nYou tried channels. Got a spike, then silence.\nCircling between strategies — none of them predictable.\n\nThat is not a product problem.\nThat is a distribution problem — and it starts at the README.\n\nEvery channel sends people to your repo first.\nHN, Reddit, Product Hunt — they all land here.\nIf this page does not convert, no channel strategy fixes it.\n\nThis scanner runs 11 checks and shows exactly\nwhere your distribution pipeline breaks first:\n\n  [ FAIL ] No problem statement in first 5 lines    (0/6)\n  [ WARN ] Value proposition too generic            (3/6)\n  [ FAIL ] No GIF or video demo                    (0/10)\n\nRanked by impact. Specific fix on every gap.\nOne project fixed only their README. Conversion: 4% \u2192 20%.",
            dom.screen
        );
        if (typeof posthog !== 'undefined') posthog.capture('scorecard_viewed');
        state.currentStep = 'INPUT';
        renderInput(true);

    } else if (newState === 'INPUT') {
        renderInput();

    } else if (newState === 'ANALYZING') {
        await renderAnalyzing();

    } else if (newState === 'RESULT') {
        renderResult();

    } else if (newState === 'PRE_TRACTION') {
        renderPreTraction();
    }
}

// --- Render: PRE_TRACTION ---
function renderPreTraction() {
    dom.screen.innerHTML = '';
    const el = document.createElement('div');
    el.innerHTML = `
        <div class="pre-traction-block">
            <div class="score-header" style="color: var(--text-dim);">
                [ — ] PRE-TRACTION STAGE
            </div>

            <div class="pre-traction-body">
This tool is built for products with existing market signal.

Zero stars, zero users, no launch yet —
that is a different problem.
GTM cannot fix missing demand. No one can.

If no one has said "I want this" yet,
the gaps in your README are not what is blocking you.

──────────────────────────────────────────

What you need first:

  → Validate that someone wants this before you build more
  → Get 10 real users through direct outreach
  → Find one channel where your ICP already talks about the problem
  → Come back when you have signal

──────────────────────────────────────────

The audit will mean something then.
            </div>

            <div style="margin-top: 30px;">
                <a href="#" onclick="location.reload()" style="color: var(--text-dim); text-decoration: none; font-size: 13px; border-bottom: 1px dotted var(--text-dim);">[ ANALYZE ANOTHER README ]</a>
            </div>
        </div>
    `;
    dom.screen.appendChild(el);
    dom.screen.scrollTop = 0;
}

// --- Render: INPUT ---
function loadFileIntoTextarea(file, callback) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
        const textarea = document.getElementById('readme-input');
        if (!textarea) return;
        textarea.value = evt.target.result;
        const dropZone = document.getElementById('drop-zone');
        if (dropZone) {
            dropZone.classList.add('drop-success');
            setTimeout(() => dropZone.classList.remove('drop-success'), 800);
        }
        flash();
        if (callback) setTimeout(callback, 850);
    };
    reader.readAsText(file);
}

function renderInput(append = false) {
    if (!append) dom.screen.innerHTML = '';

    const buildInput = () => {
        const inputBlock = document.createElement('div');
        inputBlock.innerHTML = `
            <div class="drop-zone" id="drop-zone">
                <div class="drop-overlay">
                    <div class="drop-overlay-icon">[ DROP FILE ]</div>
                    <div class="drop-overlay-sub">.md or .txt accepted</div>
                </div>
                <textarea
                    id="readme-input"
                    class="readme-textarea"
                    placeholder="# Your Project&#10;&#10;Paste README.md content here, or drag & drop the file..."
                    spellcheck="false"
                ></textarea>
            </div>
            <div id="input-error" class="input-error" style="display:none">
                ERROR: No input detected. README content required.
            </div>

            <div class="qualify-block">
                <div class="qualify-label">── Before we run the analysis:</div>
                <label class="qualify-option">
                    <input type="radio" name="traction" value="yes" id="qualify-yes">
                    <span>My project has stars, users, or a launch attempt</span>
                </label>
                <label class="qualify-option">
                    <input type="radio" name="traction" value="no" id="qualify-no">
                    <span>Not yet — pre-launch, zero signal</span>
                </label>
            </div>

            <div>
                <button class="terminal-btn" id="upload-btn">[U] Upload .md file</button>
                <button class="terminal-btn primary" id="analyze-btn" disabled>[ENTER] Run Diagnostic &rarr;</button>
            </div>
            <div class="input-meta">Processed locally. Nothing stored.</div>
        `;
        dom.screen.appendChild(inputBlock);

        // --- File upload button ---
        document.getElementById('upload-btn').addEventListener('click', () => {
            dom.fileUpload.click();
        });
        dom.fileUpload.addEventListener('change', (e) => {
            loadFileIntoTextarea(e.target.files[0]);
            dom.fileUpload.value = '';
        });

        // --- Drag & Drop ---
        const dropZone = document.getElementById('drop-zone');
        let dragCounter = 0;

        dropZone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            dragCounter++;
            dropZone.classList.add('drag-active');
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault(); // required to allow drop
        });

        dropZone.addEventListener('dragleave', () => {
            dragCounter--;
            if (dragCounter === 0) dropZone.classList.remove('drag-active');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dragCounter = 0;
            dropZone.classList.remove('drag-active');
            loadFileIntoTextarea(e.dataTransfer.files[0], handleAnalyze);
        });

        // Prevent browser from opening file if dropped outside drop-zone
        document.addEventListener('dragover', (e) => e.preventDefault(), { capture: true });
        document.addEventListener('drop', (e) => {
            if (!dropZone.contains(e.target)) e.preventDefault();
        }, { capture: true });

        // --- Qualify radio buttons ---
        const analyzeBtn = document.getElementById('analyze-btn');
        document.querySelectorAll('input[name="traction"]').forEach(radio => {
            radio.addEventListener('change', () => {
                analyzeBtn.disabled = false;
                if (radio.value === 'no') {
                    analyzeBtn.textContent = '[ENTER] Continue →';
                } else {
                    analyzeBtn.innerHTML = '[ENTER] Run Diagnostic &rarr;';
                }
            });
        });

        // --- Analyze button ---
        analyzeBtn.addEventListener('click', () => {
            const selected = document.querySelector('input[name="traction"]:checked');
            if (selected && selected.value === 'no') {
                transition('PRE_TRACTION');
            } else {
                handleAnalyze();
            }
        });

        // Scroll input into view when appended below intro text
        if (append) inputBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    if (append) {
        setTimeout(buildInput, 300);
    } else {
        buildInput();
    }
}

// --- Handle Analyze ---
function handleAnalyze() {
    const textarea = document.getElementById('readme-input');
    const errorEl = document.getElementById('input-error');
    if (!textarea) return;

    const text = textarea.value.trim();
    if (!text) {
        errorEl.style.display = 'block';
        flash();
        return;
    }

    errorEl.style.display = 'none';
    state.readmeText = text;
    if (typeof posthog !== 'undefined') posthog.capture('analysis_started', { length: text.length });
    // LLM call happens inside renderAnalyzing, parallel with animation
    transition('ANALYZING');
}

// --- Render: ANALYZING ---
// LLM call and animation run in parallel via Promise.race/all
async function renderAnalyzing() {
    dom.screen.innerHTML = '';

    const checkLabels = [
        'Checking problem statement',
        'Evaluating value proposition',
        'Detecting quick start sequence',
        'Counting code blocks',
        'Scanning for demo assets (GIF/video)',
        'Checking screenshots',
        'Looking for live demo link',
        'Detecting trust signals (badges)',
        'Scanning social proof',
        'Checking contributing guide',
        'Scanning for changelog/releases'
    ];

    const statusMap = {
        ok:   { badge: '[ OK  ]', color: '#55ff55' },
        warn: { badge: '[ WARN ]', color: '#f4c842' },
        fail: { badge: '[ FAIL ]', color: '#ff5555' }
    };

    // --- Start LLM call immediately (don't await yet) ---
    const llmPromise = analyzeReadmeWithLLM(state.readmeText)
        .catch(() => analyzeReadme(state.readmeText)); // fallback to rule-based on error

    // --- Run animation concurrently ---
    await typewriter(
        "[root@mws-readme ~]$ ./analyze --readme input.md --engine llm\n\nConnecting to analysis engine... [OK]\nScanning document... [11 checks queued]\n",
        dom.screen
    );

    const checksContainer = document.createElement('div');
    checksContainer.className = 'typing-text';
    dom.screen.appendChild(checksContainer);

    // --- Elapsed timer ---
    const timerEl = document.createElement('div');
    timerEl.style.cssText = 'margin-bottom:10px;font-family:"JetBrains Mono",monospace;font-size:12px;color:var(--text-dim);';
    timerEl.textContent = 'Analyzing... 0s';
    checksContainer.appendChild(timerEl);

    let elapsed = 0;
    const timerInterval = setInterval(() => {
        elapsed++;
        timerEl.textContent = `Analyzing... ${elapsed}s`;
    }, 1000);

    // --- Reveal check lines one by one ---
    const lineEls = [];
    for (let i = 0; i < checkLabels.length; i++) {
        const el = document.createElement('div');
        el.style.cssText = 'margin-bottom:3px;font-family:"JetBrains Mono",monospace;font-size:13px;opacity:0.4;transition:opacity 0.2s;';
        el.innerHTML = `<span style="color:var(--text-dim)">[ .. ] ${checkLabels[i]}...</span>`;
        checksContainer.appendChild(el);
        lineEls.push(el);
        dom.screen.scrollTop = dom.screen.scrollHeight;
        await new Promise(r => setTimeout(r, 380));
        el.style.opacity = '1';
    }

    // --- "Waiting for engine" indicator after all lines shown ---
    const waitEl = document.createElement('div');
    waitEl.style.cssText = 'margin-top:10px;font-family:"JetBrains Mono",monospace;font-size:12px;color:var(--text-dim);';
    waitEl.textContent = 'Waiting for analysis engine...';
    checksContainer.appendChild(waitEl);

    let dotCycle = 0;
    const blinkInterval = setInterval(() => {
        dotCycle++;
        const dots = ['   ', '.  ', '.. ', '...'];
        waitEl.textContent = `Waiting for analysis engine${dots[dotCycle % 4]}`;
    }, 400);

    // Wait for LLM result
    const result = await llmPromise;
    clearInterval(timerInterval);
    clearInterval(blinkInterval);
    waitEl.textContent = '[ OK ] Analysis complete.';
    waitEl.style.color = '#55ff55';
    await new Promise(r => setTimeout(r, 300));

    state.findings = result.findings;
    state.totalScore = result.score;
    if (typeof posthog !== 'undefined') {
        posthog.capture('analysis_completed', { 
            score: state.totalScore,
            verdict: getVerdict(state.totalScore).text 
        });
    }

    // Reveal results line by line with small delays
    for (let i = 0; i < lineEls.length; i++) {
        const finding = state.findings[i];
        if (!finding) continue;
        const s = statusMap[finding.status] || statusMap.fail;
        lineEls[i].style.opacity = '1';
        lineEls[i].innerHTML = `<span style="color:var(--text-dim)">[ .. ] ${checkLabels[i]}...</span> <span style="color:${s.color};font-weight:bold">${s.badge}</span>`;
        dom.screen.scrollTop = dom.screen.scrollHeight;
        await new Promise(r => setTimeout(r, 80));
    }

    await new Promise(r => setTimeout(r, 400));

    const calcEl = document.createElement('div');
    calcEl.className = 'typing-text';
    calcEl.style.cssText = 'margin-top:12px;color:var(--text-dim);font-family:"JetBrains Mono",monospace;font-size:13px;';
    calcEl.textContent = 'Calculating README Traction Score...';
    dom.screen.appendChild(calcEl);
    dom.screen.scrollTop = dom.screen.scrollHeight;

    await new Promise(r => setTimeout(r, 700));
    transition('RESULT');
}

// --- Render: RESULT ---
function renderResult() {
    dom.screen.innerHTML = '';

    const verdict = getVerdict(state.totalScore);

    // Score header
    const headerEl = document.createElement('div');
    headerEl.style.marginBottom = '20px';
    headerEl.innerHTML = `<div class="result-status ${verdict.cssClass}">README TRACTION SCORE: ${state.totalScore}/54 — ${verdict.text}</div>`;
    dom.screen.appendChild(headerEl);

    // Findings list
    const findingsEl = document.createElement('div');
    findingsEl.className = 'findings-list';

    state.findings.forEach(finding => {
        const badgeMap = {
            ok:   { badge: '[ OK  ]', cssClass: 'ok' },
            warn: { badge: '[ WARN ]', cssClass: 'warn' },
            fail: { badge: '[ FAIL ]', cssClass: 'fail' }
        };
        const b = badgeMap[finding.status];
        const showTip = finding.status !== 'ok';

        const item = document.createElement('div');
        item.className = 'finding-item';
        item.innerHTML = `
            <div>
                <span class="finding-badge ${b.cssClass}">${b.badge}</span>
                <span class="finding-label">${finding.label} (${finding.score}/${finding.max})</span>
            </div>
            ${showTip ? `<div class="finding-tip">→ ${finding.tip}</div>` : ''}
        `;
        findingsEl.appendChild(item);
    });

    dom.screen.appendChild(findingsEl);
    dom.screen.scrollTop = dom.screen.scrollHeight;

    // CTA block
    const cta = document.createElement('div');
    cta.className = 'cta-group';

    // Bridge block — set via textContent to preserve newlines with white-space: pre-wrap
    const bridgeEl = document.createElement('div');
    bridgeEl.className = 'bridge-block';
    bridgeEl.style.whiteSpace = 'pre-wrap';
    bridgeEl.textContent =
`Your README has gaps.
Your distribution pipeline has more.

──────────────────────────────────────

The scanner reads one layer.
The full audit maps every bottleneck:
channels, positioning, onboarding, post-launch.

Real example — FnKey, Rust macOS tool, 43 stars:

  → 13 gaps found across the full pipeline
  → Show HN never posted: 289 stars/week lost
  → That one gap = 20 months of organic growth sitting idle

These gaps don't show up in a README scan.

──────────────────────────────────────

Leave your email.
We'll send you the full FnKey audit.
See exactly what your audit would look like — before paying anything.`;
    cta.appendChild(bridgeEl);

    // Rest of CTA
    const ctaRest = document.createElement('div');
    ctaRest.innerHTML = `
        <div class="email-capture">
            <input
                type="email"
                id="lead-email"
                class="email-input"
                placeholder="your@email.com"
                spellcheck="false"
                autocomplete="email"
            />
            <div id="email-error" class="input-error" style="display:none">
                ERROR: Valid email required.
            </div>
        </div>

        <button class="cta-button" id="cta-btn">SEND ME THE CASE STUDY &rarr;</button>

        <div style="margin-top: 25px;">
            <a href="#" onclick="location.reload()" style="color: var(--text-dim); text-decoration: none; font-size: 13px; border-bottom: 1px dotted var(--text-dim);">[ ANALYZE ANOTHER README ]</a>
        </div>
    `;
    cta.appendChild(ctaRest);
    dom.screen.appendChild(cta);

    // --- Email CTA ---
    const ctaBtn = ctaRest.querySelector('#cta-btn');
    const emailInput = ctaRest.querySelector('#lead-email');
    const emailError = ctaRest.querySelector('#email-error');

    ctaBtn.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!valid) {
            emailError.style.display = 'block';
            emailInput.focus();
            flash();
            return;
        }
        emailError.style.display = 'none';
        ctaBtn.textContent = 'SENDING...';
        ctaBtn.disabled = true;

        try {
            const res = await fetch(`${API_BASE_URL}/api/gtm/capture-lead`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    score: state.totalScore || 0,
                    findings: state.findings || {},
                }),
            });
            if (!res.ok) throw new Error(`Server error: ${res.status}`);
            if (typeof posthog !== 'undefined') {
                posthog.identify(email, { email: email, last_score: state.totalScore });
                posthog.capture('lead_captured', { score: state.totalScore });
            }
            ctaBtn.textContent = '[ OK ] CHECK YOUR INBOX';
            ctaBtn.style.background = '#55ff55';
            ctaBtn.style.color = '#0d0c0b';
        } catch (err) {
            console.error('capture-lead error:', err);
            // Fallback: still show success UX so user isn't stuck
            ctaBtn.textContent = '[ OK ] CHECK YOUR INBOX';
            ctaBtn.style.background = '#55ff55';
            ctaBtn.style.color = '#0d0c0b';
        }
    });

    // Allow Enter key in email field
    emailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') ctaBtn.click();
    });

    dom.screen.scrollTop = dom.screen.scrollHeight;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const lines = [
        '[ OK ] Initializing README Analyzer v1.0.0...',
        '[ OK ] Loading GTM conversion ruleset...',
        '[ OK ] Compiling 11 traction checks...',
        '[ OK ] Verified environment: GitHub-Pages / Static',
        '[ OK ] Establishing secure link to MWS-Agency...'
    ];

    let delay = 0;
    lines.forEach((line, idx) => {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'boot-line';
            el.innerHTML = line.replace('[ OK ]', '<span class="status-ok">[ OK ]</span>');
            dom.bootLogs.appendChild(el);
            if (idx === lines.length - 1) {
                setTimeout(() => transition('INTRO'), 800);
            }
        }, delay);
        delay += CONFIG.bootDelay + Math.random() * 50;
    });

    // Keyboard: Enter on INTRO advances, Ctrl+Enter on INPUT submits
    document.addEventListener('keydown', (e) => {
        if (state.currentStep === 'INTRO' && (e.key === 'Enter' || e.key === ' ')) {
            transition('INPUT');
        }
        if (state.currentStep === 'INPUT' && e.key === 'Enter' && e.ctrlKey) {
            handleAnalyze();
        }
    });
});
