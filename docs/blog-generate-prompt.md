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

**Structure:**
- **Engaging introduction** (up to 120 words)
  - Show the runner’s problem or desire
  - Promise a clear benefit
  - Include main keyword

- **H2 — Main sections** (clear subtitles)
  - Use main keyword and variations
  - Short paragraphs (2–4 lines)
  - Simple, direct language
  - Practical focus

- **H3 — Subtopics when needed**
  - Lists and bullets whenever possible
  - Practical, actionable tips

**Required content:**
- Clear explanation of the topic
- Practical step-by-step
- Common mistakes
- Actionable tips
- Real runner examples
- Evidence-based data or explanations
- Checklist or practical summary at the end

**On-page SEO:**
- Define main keyword from the theme
- Use the keyword: in the title, in the meta description, in the first paragraph, in at least 2 subtitles
- Include natural semantic variations
- Avoid keyword stuffing

**Scannability:**
- Short sentences
- Short paragraphs
- Bullet lists
- **Bold** for important points

**Tone:** Motivating, educational, direct, without excessive jargon.

### 4. CLOSING SECTION

- **Conclusion:** Reinforce main benefit and encourage practical action.
- **CTA:** Encourage the reader to keep training and suggest reading another blog post.

### 5. EXTRAS

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
- `"body"`: string (full article in Markdown: use ## for H2, ### for H3, **bold**, lists; do NOT include the title as H1)
- `"slug"`: string (URL-friendly, lowercase, hyphens, no date)
- `"mainKeyword"`: string
- `"secondaryKeywords"`: array of 5 strings
- `"tags"`: array of 5 strings
