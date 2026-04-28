// UI Config
const CONFIG = {
    bootDelay:     500,   // ms between boot lines
    typeSpeed:     18,    // ms per character (default)
    fastTypeSpeed: 6      // ms per character (fast mode)
};

// OpenRouter API — same key as readme-analyzer (domain-restricted)
const OPENROUTER_API_KEY      = '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';
const OPENROUTER_MODEL        = 'z-ai/glm-4.5-air:free';
const OPENROUTER_MODEL_FALLBACK = 'meta-llama/llama-3.3-70b-instruct:free';

// Backend API — same endpoint as readme-analyzer
const API_BASE_URL = 'https://api.goddevit.tech';

// PostHog — same as readme-analyzer
const POSTHOG_API_KEY = 'phc_sY5NxwxlXFjBXZ00zaxYM5U9KjrYuQInQ91wIgHTPnm';
const POSTHOG_HOST    = 'https://us.i.posthog.com';

// CTA links
const PAYMENT_URL    = 'https://nowpayments.io/payment/?iid=4803929857';
const THREADS_DM_URL = 'https://www.threads.com/@mckjnkns';
