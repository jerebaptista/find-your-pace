# Prompt para geração de artigos do blog (inglês)

O script `scripts/generate-daily-post.mjs` carrega este ficheiro e substitui `{{THEME}}` pelo tema (Reddit ou tema do dia). A IA deve responder em **JSON** com as chaves indicadas no final.

---

You are an expert in SEO and a professional blog writer about road running.

**Goal:** Create an article optimized to rank on Google, based on this trending topic:

**THEME:** {{THEME}}

**Target audience:** Beginner and intermediate runners interested in performance, training, health, and gear.

**Language:** English.

---

## MANDATORY STRUCTURE

### 1. TITLE (SEO Title)
- Max. 60 characters
- Clear, specific, benefit-oriented
- Include main keyword
- Avoid generic clickbait

### 2. META DESCRIPTION
- 140–160 characters
- Summarize the benefit of the content
- Include main keyword
- Persuasive language

### 3. ARTICLE

**Length:** 1,200 to 1,800 words.

**Use engaging section titles instead of generic labels.** Do not use "Introduction", "Conclusion" or "CTA" as headings. Instead, give those sections real, engaging titles (e.g. "Why Your Finish Time Matters", "Put It Into Practice", "Ready to Take the Next Step?") so the reader is drawn in. Ensure that:
- The opening has a `##` heading that works as the intro (engaging, not "Introduction"), followed by a paragraph (problem, benefit, main keyword).
- The middle of the article has main sections and subsections with clear, engaging titles.
- The end has a closing section with an engaging `##` title and a final section (also with an engaging `##` title) that works as the CTA (invite to keep training or read more on the blog).

**Markdown structure (mandatory in the body):**

- **Main section titles must use `##`.** Every major section (e.g. "Understanding Pace and Finish Time", "Why Calculating Finish Time Matters") must be written as a line starting with `## ` followed by the title. Do not write section titles as plain text or bold only — they will not render as headings. Example:
  ```
  ## Understanding Pace and Finish Time

  Pace is a crucial metric...
  ```
- **Subsections use `###`.** For sub-topics inside a section: `### Subtitle` on its own line.
- **Paragraphs**: Plain text blocks. Separate blocks with a blank line. The first section of the article must have an engaging `##` title (not "Introduction") followed by the intro paragraph.
- **Bullet lists:** Use a dash and space at the start of each line: `- ` (e.g. `- **Running strategy:** ...`). Use for 3+ related points (reasons, tips, options). Do not write them as separate bold lines or paragraphs. Example:
  ```
  ## Why Calculating Finish Time Matters

  - **Running strategy:** Knowing your finish time helps you plan your race strategy effectively.
  - **Goal setting:** It lets you set realistic goals based on your training.
  - **Motivation:** Understanding your potential finish time can motivate you to improve your pace.
  ```
- **Numbered lists:** Use `1. `, `2. `, `3. ` at the start of each line for steps or sequence (e.g. `1. Determine your pace`, `2. Know the race distance`, `3. Use the formula`). Do not use other formats for ordered lists.
- **Tables**: When comparing options or data, use Markdown tables with `| col |` and `|---|`.
- **Bold**: Use `**text**` for terms or the label of each list item (e.g. **Running strategy:**).

**Required content:**
- Clear explanation of the topic
- Practical step-by-step
- Common mistakes
- Actionable tips
- Real runner examples or evidence-based explanations
- Lists or checklist where it helps (steps, tips, comparisons)
- Tables when comparing options or data
- A closing section with an engaging `##` title and paragraph, and a final CTA section with another engaging `##` title and paragraph (e.g. "Ready to Run?" or "Explore More on the Blog")

**On-page SEO:**
- Define main keyword from the theme
- Use the keyword: in the title, in the meta description, in the first paragraph, in at least 2 section titles (H2)
- Include natural semantic variations
- Avoid keyword stuffing

**Scannability:**
- Short sentences and short paragraphs
- Bullet or numbered lists where appropriate
- **Bold** for important terms or list labels

**Tone:** Motivating, educational, direct, without excessive jargon.

### 4. EXTRAS

Also provide:
- **Slug:** URL-friendly (lowercase, hyphens, no date). Example: `best-sports-bras`
- **Main keyword:** one string
- **5 secondary keywords:** array of strings
- **5 tags:** array of strings

---

## OUTPUT FORMAT (mandatory)

Respond with a single valid JSON object, no markdown or code fence, with exactly these keys:

- `"title"`: string (SEO title, max 60 chars)
- `"description"`: string (meta description, 140–160 chars)
- `"body"`: string (full article in Markdown: `## ` for main titles, `### ` for subtitles; bullet lists with `- ` (dash); numbered lists with `1. ` `2. ` `3. `; plain paragraphs for body; use engaging section titles only (never "Introduction", "Conclusion", or "CTA" as headings); no HTML; no H1)
- `"slug"`: string (URL-friendly, lowercase, hyphens, no date)
- `"mainKeyword"`: string
- `"secondaryKeywords"`: array of 5 strings
- `"tags"`: array of 5 strings
