# Competitor teardown — September 2026

Captured **22 September 2026**. Four sites named in the Presence brief. Opening copy is characterised rather than reproduced verbatim.

## Comparison

| | **josephrosenfeld.com** | **globalimagegrp.com** | **luciarestani.com** | **juliacalliano.com** |
|---|---|---|---|---|
| **H1** | "NYC IMAGE CONSULTANT FOR EXECUTIVES" (all caps) | **None — no `h1` on the page at all** | **None — no `h1` on the page at all** | **Five `h1`s**, none of which is the page's subject |
| **Opening claim** | Positions against looking the part, in favour of becoming unmistakable; strategic image consulting for senior leaders at an "inflection point" when others' perceptions must match who they truly are | "Command Authority. Lead with Influence." Integrates image, communication, emotional intelligence, psychology and perception management, on the argument that leadership is judged as a whole | Italian flair, *dolce vita*, fashion styling, buying and personalised shopping, "for a wardrobe that works" | Personal styling framed through a Sciences Po background and a fascination with the human form and social structures |
| **Audience** | Attorneys, executives, entrepreneurs (NYC + Silicon Valley) | Executives, rising leaders, founders, politicians, public figures (NY, DC, Dubai) | Women in the boardroom, women CEOs, senior executives (London, some Boston) | Women; segments for young professionals and expectant mums (SW London) |
| **Named tiers** | REV UP · BREAKOUT · ICONIC · SELF-IMAGE INTENSIVE · THE PRESENCE ADVANTAGE · PERSONAL BRAND DEEP DIVE | Image Consultation · Personal Style Analysis · Wardrobe & Closet Analysis · Personal Shopping · Soft Skill Coaching · Business & Social Etiquette · My Style Class On-Demand | Personal Shopping · Wardrobe Makeover · Special Occasions · Style Transformation Program · Pre-Order · Fitting & Alterations Management · Elevate Your Career | Colour & Style Consultation · Find Your Signature Style · Wardrobe Audit · Personal Shopping · Makeup Lessons · Parties · Gifts |
| **Published price** | **None** — none on the homepage or the services page | **Yes:** Virtual Styling $1,500 · 1-Day Professional Development Training $3,250 · 2-Day Leadership Training $6,500 · 5-Month Leadership Coaching $8,000 | **None** | **None** on the homepage; an FAQ entry asks "What are her prices?" |
| **CTA** | "SCHEDULE A FREE CONSULTATION" | "Book a Virtual Executive Consultation" (plus a wardrobe-planner lead magnet, and a Shop/Cart — it sells products) | Newsletter signup; "More about Lucia" | Service pages; Contact |
| **`Service` markup** | **No** | **No** | **No** | **No** |
| **`FAQPage` markup** | **No** | **No** | **No** | **Yes** — on `/faq` (5 questions), the only one of the four |
| **Other structured data** | WebPage, ImageObject, BreadcrumbList, WebSite, Organization | BreadcrumbList, Organization, WebPage, WebSite | **None at all — zero JSON-LD** | Person, ProfessionalService, WebSite, Organization, LocalBusiness |

## What this means

**Not one of the four has `Service` markup.** Three of four have no `FAQPage`. One has no structured data whatsoever. Every Presence page ships both, plus `BreadcrumbList` and `WebPage` with `about`/`mainEntity`. On machine-readability the category is barely defended.

**Heading structure is broken across the board.** Two sites have no `h1`. One has five. Only Rosenfeld has a single correct `h1`, and it is keyword-stuffed in all caps rather than phrased as a question a person would ask. None of the four titles a page with the question it answers — which is the entire retrieval premise of `/presence/`.

**Only one publishes a price**, and it publishes four. That is worth weighing against the current rule of publishing only the €500 session: Global Image Group's $1,500–$8,000 ladder is the only pricing an AI assistant can currently retrieve and quote in this category.

**Two of the four are not actually competitors.** Restani and Calliano are women's personal shopping and colour analysis in London — adjacent, not overlapping. The real comparison set is Rosenfeld (US, executive image, no prices, course-and-framework positioning — "The Rosenfeld Image Theory") and Global Image Group (broad leadership training with a product shop attached). Both sell taught frameworks. Neither claims a practitioner credential of the kind `/presence/` leads with.

**Corroborated by the retrieval baseline:** none of these four appeared in any answer from Perplexity or ChatGPT across all four test queries. They rank in neither the human nor the machine channel for the questions Presence targets. See `ai-baseline-2026-09.md`.
