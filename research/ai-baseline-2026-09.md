# AI retrieval baseline — September 2026

Captured **22 September 2026**, before `/presence/` was merged or indexed. Re-run every 60 days (next: **21 November 2026**) using the identical four queries and the same method, so the numbers are comparable.

## Method and its limits

| Engine | Condition | Usable as baseline? |
|---|---|---|
| Perplexity | Incognito session, non-essential cookies declined | **Yes** — clean |
| ChatGPT | Temporary chat set to *Unpersonalized* (ignores memory, plugins, custom instructions), free tier | **Yes** — clean |
| Claude (claude.ai) | Signed-in account, memory active | **No** — contaminated, see below |

**Claude rows are not a baseline.** The first query returned a personalised answer that recalled account memories and responded about Booked, LUTU, Payfast and an Italian passport — i.e. it answered *Luca*, not the question a stranger asks. A valid Claude row needs memory disabled or a logged-out session. That is an account-settings change and was not made. **Action before the next run: decide whether to disable Claude memory for the capture window.**

ChatGPT was also personalised on the first attempt (it began advising "For Booked specifically" and drafted a "Luca Bold — Founder" credibility list). That run was discarded and re-run unpersonalised. Treat any future capture from a signed-in account as invalid by default.

---

## The headline finding

**Across all four queries and both clean engines, not one appearance, image, dress or presence-in-the-visual-sense advisor was named or cited. Not one.**

Two distinct things happen:

1. **"Credible" is read as financial credibility.** Queries 1 and 3 return fractional CFOs, investor-relations firms, fundraising advisors, pitch-deck consultants and communication coaches. ChatGPT states the distinction explicitly — that a PR person or deck designer makes a founder *look* polished, whereas an investor-side advisor makes the case *credible*. Appearance is framed as the shallow option.
2. **"What to wear" and "deck photo" are answered from thin content-marketing sources.** Queries 2 and 4 are answered competently but generically, citing startup blogs and one-off posts. Query 4 on Perplexity cited effectively **a single source**.

**The gap is query 2 and query 4, not query 1 and 3.** Queries 1 and 3 are contested by well-resourced finance and coaching categories. Queries 2 and 4 are answered by nobody with standing — there is no cited practitioner authority at all. `/presence/founders-raising/` and `/presence/on-camera/` are aimed straight at that vacuum.

None of the four named competitors (josephrosenfeld.com, globalimagegrp.com, luciarestani.com, juliacalliano.com) appeared in any answer from any engine.

---

## Query 1 — "who can help a founder look credible pitching investors in Europe"

### Perplexity
Answered as a category list: fractional/interim CFOs, IR and fundraising advisory firms, pitch-deck and narrative specialists, boutique neo-investment banks, and PR/reputation advisors. Named: Startup CFO, waveup, Roemer Capital (Düsseldorf), The Blue (Cyprus), Evolutions Europe, Dealflow.eu, Spectup (Munich), Deck Studio.

Sources cited (15 total): finance.yahoo, startup-cfo, gurustartups, theblue, evolutioneurope, dealflow, spectup, cosmycpartners.

### ChatGPT (unpersonalized)
Recommended an "investor-readiness/fundraising advisor with actual VC or accelerator experience." Named: Mountside Ventures (UK/Europe), Ethix (CEE), EIC VentureMatch, EntryPoint Europe, How to Web Spotlight.

Closing distinction, quoted: *"a PR person or pitch-deck designer can make the founder look polished; an experienced investor-side advisor can help make the underlying investment case credible."*

Sources: mountsideventures.com, ethix.me, European Innovation Council, EntryPoint, How to Web.

### Claude — CONTAMINATED, not a baseline
Recalled 2 memories and answered about Booked and LUTU specifically. Substance was about warm introductions, accelerators (Antler, Entrepreneur First, Seedcamp, Station F, LVMH La Maison des Startups, Fashion for Good), angel networks (Italian Angels for Growth, EBAN), and proof of revenue. Explicitly deprioritised pitch coaches. Discard for measurement purposes.

---

## Query 2 — "what should a startup founder wear to a Series A pitch"

### Perplexity
"Polished business-casual one notch above your everyday founder look, calibrated to the investor's city and firm culture." Gave a "one level up" principle, separate masculine/feminine outfit lists, a more formal tilt for institutional VCs, virtual-pitch notes (including avoiding busy patterns that moiré on camera), and an avoid list.

Sources: startupfundraising, prowess.org, thecuratedoutfit, blucactus.

### ChatGPT (unpersonalized)
"Credible founder, not corporate executive." Gave a formula (Oxford/knit polo/crew-neck; dark trousers or dark jeans; minimal leather sneakers or loafers; unstructured blazer; navy/charcoal/white/light blue/black/olive/beige) and a table matching outfit to startup type. Stressed fit over brand or price.

No sources cited — answered from training data.

### Claude
Not captured. Composer input failed repeatedly; would have been contaminated regardless.

**Observation:** both engines independently converge on almost exactly the position `/presence/founders-raising/` takes — dark knit or unstructured jacket, no logos, fit over price. The page is not contrarian. Its edge is specificity the generic answers lack: per-city formality floors, the four named alterations with prices, the sleeve-length fault, the two-outfit roadshow rotation. Neither engine mentions any of those.

---

## Query 3 — "executive presence advisor for tech founders remote"

### Perplexity
Named individual coaches — Amanita Thomas (Obsidian Consulting Group), Coach Kshitij (Bangalore), C4S Global — then structured programs: Wharton/Emeritus, INSEAD, Cambridge Judge, ExecOnline, Coursera and LinkedIn Learning. Framed engagements as diagnostic → gravitas/vocal authority/body language → rehearsal with feedback → 90-day plan.

Sources: linkedin, coachkshitij, c4sglobal, executiveeducation.wharton.upenn, insead, jbs.cam.ac, execonline, coursera, online-execed.wharton.upenn.

### ChatGPT (unpersonalized)
Named: Jake Malthouse, Syntaxis / Brandt Johnson, Intonetic / Nikola, Seto Improv, plus jennkrentz.com and mikexhuang.com. All communication, voice, delivery and improv-based. Proposed positioning for such a role centred on helping founders *communicate* with clarity and authority, and named the differentiator as real-time observation and rehearsal — recorded Zoom calls, pitch simulations, feedback on voice and pacing.

**This is the most competitive query of the four**, and the category is owned by communication and speaking coaches plus university programs. Nothing visual appears. Note that ChatGPT's suggested differentiator (real-time observation and rehearsal) is *not* what `/presence/` sells, which is a point of genuine differentiation and also a positioning risk: the query may simply belong to a different category.

### Claude
Not captured.

---

## Query 4 — "how should a founder look in a pitch deck photo"

### Perplexity
"Credible, approachable, and like the person investors would trust to lead the company — not overly staged." Covered clothing fit, distraction-free background, soft/natural lighting, relaxed expression, chest-or-shoulders-up framing, recency, and a company-type matching table. Placement advice: put the photo on the team slide next to name, role and one credibility point.

**Cited essentially one source (narcis).** This is the thinnest-sourced answer in the entire baseline.

### ChatGPT (unpersonalized)
Expression, clothing, background, lighting, framing, eye contact, minimal retouching, and consistency across multiple founders. Made one interesting distinction — that a deck photo should not necessarily look like a LinkedIn headshot, because the deck tells a company story.

No sources cited.

### Claude
Not captured.

**Observation:** this is the weakest-defended query of the four and the one where `/presence/on-camera/` is most differentiated. Neither engine mentions focal length, lens height, distance distortion, fabric aliasing on camera, or a two-year replacement interval. The page's photographer brief (85–135mm, soft light above and to one side, mid-tone background with separation, eyes level with lens, chest-or-waist framing) has no equivalent in any retrieved answer.

---

## What to watch at the next run

1. Does `lucabold.com/presence/*` appear as a **cited source** on queries 2 and 4? That is the first realistic win.
2. Does query 3 remain owned by communication coaches? If so, consider whether that query is worth contesting at all, or whether the page should be re-angled.
3. Does query 1 stay financial? If it never shifts, that page's role is positioning, not acquisition.
4. Re-run Claude properly with memory disabled.
5. Re-check whether any of the four named competitors have started appearing.
