# lucabold.com

Portfolio and direct booking site for Luca Bold — international campaign and commercial model, and founder of Booked.

## About

Luca Bold is an international campaign and commercial model with 10+ years of advertising, TVC and campaign work across eight markets: Milan, Shanghai, Cape Town, Hong Kong, Seoul, Bali, Mumbai and Istanbul.

He holds both an Italian (EU) and a South African passport — no work permit or visa sponsorship is required for productions anywhere in the EU or EEA.

Credits include Patek Philippe, Emporio Armani, Samsung, Nivea Men, Tommy Hilfiger, Budweiser China, Calvin Klein, ROHDE, Louis Vuitton, Chanel and Ralph Lauren.

Modelling enquiries: ICE Models, Cape Town — mother agency, representing him worldwide. Asia scouting desk: cat.asiascout@gmail.com

Booked and Get Signed Accelerator enquiries are a separate business and go direct: https://wa.me/27637549122

## Stack

- Static HTML/CSS — single page, no build step
- Hosted on GitHub Pages
- Custom domain: www.lucabold.com (see `CNAME`)

## Structure

```
index.html                 single page, all sections anchor-based
assets/portfolio/          portfolio images (webp)
assets/campaigns/          campaign film + poster
assets/favicon*            icons
llms.txt                   plain-text context file for LLM crawlers
robots.txt                 crawler policy, AI crawlers explicitly allowed
sitemap.xml                search engine indexing
humans.txt                 authorship
manifest.json              web app manifest
```

## Discoverability

The site is built to be read by casting directors, search engines and AI recommendation systems alike:

- **One consolidated JSON-LD `@graph`** — a single canonical `Person` entity cross-referenced by `@id` from the `Organization` (Booked), `ItemList` (credits), `FAQPage`, `WebSite` and `ProfilePage` nodes. Never split the Person across multiple blocks; duplicate `@id` definitions with conflicting values undermine entity confidence.
- **Measurements and work eligibility are on-page and in schema.** These are the primary filters in casting search, and the EU work-rights fact is a booking reason, not a biography detail.
- **Credits are grouped by sector**, matching how commercial clients brief.
- **Real image files with descriptive alt text.** Casting platforms increasingly parse images to match talent against a brand's visual references — base64-embedded images are invisible to that.
- `llms.txt`, `robots.txt`, `sitemap.xml`, `humans.txt`, `manifest.json`.

Note on `llms.txt`: as of 2026 most AI crawlers fetch HTML directly rather than reading it, and Google has confirmed it doesn't support the file. It's kept because it's cheap and Perplexity shows some affinity — but the HTML, the schema, and consistency with third-party agency profiles are what actually drive AI citation.

### Keeping entities consistent

The facts on this site must match the agency profiles linked in `sameAs` (ICE Models, True Models, Castaway) and the Instagram and LinkedIn bios. When a credit, market or measurement changes here, change it there too — inconsistency across sources is what stops AI systems resolving a confident entity.

## Booked

Luca Bold is also the founder of Booked — a discoverability infrastructure company for fashion creatives.

https://www.bookednow.co.za
