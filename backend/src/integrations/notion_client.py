"""Notion REST API client for programmatic workspace creation."""
import httpx
from typing import Optional
from src.config import settings
from src.utils.logger import logger

# ---------------------------------------------------------------------------
# Notion block helpers
# ---------------------------------------------------------------------------

def _text(content: str) -> dict:
    return {"type": "text", "text": {"content": content}}


def _h1(content: str) -> dict:
    return {"object": "block", "type": "heading_1",
            "heading_1": {"rich_text": [_text(content)]}}


def _h2(content: str) -> dict:
    return {"object": "block", "type": "heading_2",
            "heading_2": {"rich_text": [_text(content)]}}


def _h3(content: str) -> dict:
    return {"object": "block", "type": "heading_3",
            "heading_3": {"rich_text": [_text(content)]}}


def _p(content: str, bold: bool = False) -> dict:
    rich = {"type": "text", "text": {"content": content}}
    if bold:
        rich["annotations"] = {"bold": True}
    return {"object": "block", "type": "paragraph",
            "paragraph": {"rich_text": [rich]}}


def _callout(content: str, emoji: str = "💡") -> dict:
    return {
        "object": "block", "type": "callout",
        "callout": {
            "rich_text": [_text(content)],
            "icon": {"type": "emoji", "emoji": emoji},
        },
    }


def _divider() -> dict:
    return {"object": "block", "type": "divider", "divider": {}}


def _brief_question(number: int, question: str, hint: str) -> list:
    """Returns a list of blocks for one brief question."""
    return [
        _p(f"{number}. {question}", bold=True),
        _p(hint),
        _p("→ Your answer here"),
        _divider(),
    ]


def _deliverable_section(title: str, description: str, status: str = "🔒 Pending") -> list:
    return [
        _h3(title),
        _callout(status, "🔒"),
        _p(description),
        _divider(),
    ]


# ---------------------------------------------------------------------------
# Full workspace template blocks
# ---------------------------------------------------------------------------

def _build_workspace_blocks(client_email: str, score: Optional[int]) -> list:
    score_line = f"GitHub Traction Score from your README: {score}/54" if score else ""

    blocks = [
        _callout(
            "Payment confirmed. Audit in progress. "
            "Delivery: 7 business days from brief completion. "
            + score_line,
            "✅",
        ),
        _divider(),

        # --- STATUS TABLE (as paragraph blocks for simplicity) ---
        _h2("📊 Status"),
        _p("Payment ✅ Confirmed"),
        _p("Brief ⏳ Awaiting your input"),
        _p("Research 🔒 Pending brief"),
        _p("Deliverables 🔒 Pending research"),
        _divider(),

        # --- BRIEF ---
        _h2("📝 Brief — fill this first"),
        _callout(
            "Fill out all 6 questions below. "
            "The audit clock starts when this section is complete. "
            "Takes ~10 minutes. Be specific — the more detail, the sharper the findings.",
            "📌",
        ),
    ]

    questions = [
        ("What is your product?",
         "Describe it in 2–3 sentences as if explaining to a smart stranger."),
        ("Who is your ICP?",
         "Not 'developers' or 'startups' — a specific person. "
         "Job title, company size, biggest daily frustration."),
        ("What distribution channels have you tried? What happened?",
         "Be specific: HN, Reddit, PH, Twitter, email list? Exact results."),
        ("What does success look like in 90 days?",
         "Stars? Revenue? Users? A specific number is better than a direction."),
        ("Links",
         "GitHub URL, product URL, previous launch URLs (PH, HN, etc.)"),
        ("Anything else we should know?",
         "Previous pivots, constraints, things that already worked, red lines."),
    ]
    for i, (q, hint) in enumerate(questions, 1):
        blocks.extend(_brief_question(i, q, hint))

    # --- DELIVERABLES ---
    blocks.append(_h2("📦 Deliverables"))
    blocks.append(_callout(
        "Documents appear here one by one as completed. "
        "You can read and act on early ones before the full audit is done.",
        "📬",
    ))

    deliverables = [
        ("Research 1 — ICP Analysis",
         "Who your buyer actually is. Exact language they use. "
         "Where to find them. 35+ verbatim quotes from community research."),
        ("Research 2 — Positioning Analysis",
         "Value architecture, messaging hierarchy, competitive framing."),
        ("Research 3 — Packaging Audit",
         "GitHub Traction Score, README conversion breakdown, TTFV step-by-step, PH listing audit."),
        ("Research 4 — Launch Audit",
         "ORB channel map, PH Readiness Score, launch timeline, unused high-leverage channels."),
        ("Research 5 — Cost of Inaction Matrix",
         "Every gap as a concrete number: stars lost per month, organic growth equivalent."),
        ("Deliverable 1 — Traction Gap Map",
         "13+ gaps ranked by impact. Every gap: phase, cost of inaction, specific fix, effort estimate."),
        ("Deliverable 2 — 30-Day Distribution Protocol",
         "Day-by-day execution guide tying all research into a concrete action plan."),
    ]
    for title, desc in deliverables:
        blocks.extend(_deliverable_section(title, desc))

    # --- CONTACT ---
    blocks.extend([
        _h2("📬 Contact"),
        _p("Questions at any point → influrfounder@gmail.com"),
        _p("No calls needed. All async."),
    ])

    return blocks


# ---------------------------------------------------------------------------
# Notion API client
# ---------------------------------------------------------------------------

class NotionClient:
    """Creates client workspaces in the Notion Client Portals database."""

    API_BASE = "https://api.notion.com/v1"
    NOTION_VERSION = "2022-06-28"

    def __init__(self):
        self.api_key = settings.notion_api_key
        self.database_id = settings.notion_client_portals_db_id

    def _headers(self) -> dict:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Notion-Version": self.NOTION_VERSION,
            "Content-Type": "application/json",
        }

    async def create_client_workspace(
        self,
        client_email: str,
        score: Optional[int] = None,
    ) -> str:
        """
        Create a new GTM Audit workspace for a paying client
        in the Client Portals Notion database.
        Returns the URL of the created page.
        """
        if not self.api_key or not self.database_id:
            logger.warning("Notion API key or DB ID not set — skipping workspace creation")
            return ""

        title = f"GTM Audit — {client_email}"
        blocks = _build_workspace_blocks(client_email, score)
        
        # Inject tracking pixel via image block at the end
        pixel_url = f"{settings.api_base_url}/track/notion-read?page_id={client_email}&user_id={client_email}"
        blocks.append({
            "object": "block",
            "type": "image",
            "image": {
                "type": "external",
                "external": { "url": pixel_url }
            }
        })

        from src.services.posthog_service import posthog_service
        posthog_service.capture(client_email, "notion_dashboard_created", {"score": score})

        payload = {
            "parent": {"database_id": self.database_id.replace("-", "")},
            "icon": {"type": "emoji", "emoji": "🔍"},
            "properties": {
                "Portal Title": {
                    "title": [{"type": "text", "text": {"content": title}}]
                },
                "Client": {"select": {"name": "Active Client"}},
                "Project": {"select": {"name": "Consulting"}},
                "Status": {"select": {"name": "In Use"}},
                "Notes": {
                    "rich_text": [
                        {"type": "text", "text": {"content": f"GTM Audit order. Email: {client_email}"}}
                    ]
                },
            },
            "children": blocks,
        }

        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    f"{self.API_BASE}/pages",
                    json=payload,
                    headers=self._headers(),
                    timeout=30.0,
                )
                response.raise_for_status()
                data = response.json()
                url = data.get("url", "")
                logger.info(f"Notion workspace created for {client_email}: {url}")
                return url

        except httpx.HTTPStatusError as e:
            logger.error(f"Notion API error creating workspace: {e.response.text}")
            raise
        except httpx.HTTPError as e:
            logger.error(f"Notion connection error: {e}")
            raise
