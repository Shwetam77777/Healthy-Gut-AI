🎯 Healthy-Gut-AI
AI-Powered Medical Content Generation System

This repository contains my solution for Problem 1 of the Software Engineer Assignment.
It demonstrates my ability to work with:

🔹 LLM prompt engineering

🔹 n8n workflows

🔹 SEO optimization

🔹 Readability + keyword metrics

🔹 GitHub version-control

🔹 Modular and scalable AI pipelines

🧠 Project Purpose

Healthy-Gut-AI automatically generates medically accurate, SEO-optimized, and readability-checked articles on gut health topics using:

✨ LLM Prompts

✨ JS Metrics Scripts

✨ n8n Automation

✨ Google Sheets Inputs

This showcases real workflow automation + AI engineering skills.

📁 Repository Structure
Healthy-Gut-AI/
│
├── prompts/
│   ├── prompt1_medical_seo_article.txt
│   └── prompt2_geo_ai_optimization.txt
│
├── metrics/
│   ├── keyword_density.js
│   └── readability_check.js
│
├── samples/
│   ├── article1_pillar.md
│   └── article2_supporting.md
│
└── README.md


Each folder has a specific purpose to keep the workflow modular and scalable.

✍️ Prompt Details
🔹 Prompt 1 — Medical SEO Article Generator

Designed to create:

Medically accurate articles

Pillar (2500–3000 words) or Supporting (1000–1500 words)

Structured headings

Comparison tables

Diet recommendations

Keyword optimization

Medical disclaimers

🔹 Prompt 2 — Geo-Optimized SEO Enhancer

Adds:

Location-based optimization

Meta description

URL slug

FAQs

Schema (JSON-LD)

Featured snippet improvements

CTAs

🧮 Metrics Scripts
📌 keyword_density.js

Calculates:

Total words

Keyword count

Keyword density (%)

Ensures SEO quality.

📌 readability_check.js

Calculates:

Flesch Reading Ease score

Sentence complexity

Syllables per word

Ensures the article is readable for a general audience.

⚙️ Workflow Overview (n8n)
1️⃣ Google Sheet Input

topic

primary_keyword

geo_target

article_type

2️⃣ Workflow 1

➡ Outline generator

3️⃣ Workflow 2

➡ Draft generation using Prompt 1

4️⃣ Workflow 3

➡ Optimization using Prompt 2
➡ Keyword density + readability checks (metrics scripts)

5️⃣ Save outputs inside /samples/
📝 Sample Outputs

✔ article1_pillar.md — Pillar article sample
✔ article2_supporting.md — Supporting article sample

These demonstrate how the pipeline generates structured, human-readable content.

🧩 Architecture Diagram (Text Version)
Google Sheet → n8n Workflow 1 (Outline)
            → n8n Workflow 2 (Prompt 1 → Draft)
            → n8n Workflow 3 (Prompt 2 → Optimization)
            → Metrics JS (Density + Readability)
            → Final Output (samples/)

🎥 Demo Video Guidelines

Your demo video should show:

GitHub repository

prompts folder

metrics folder

samples outputs

n8n workflows

Running the workflow

Article generation

Explanation of logic

Summary

🚀 Conclusion

This project fully satisfies Problem 1 of the assignment by showing strong skills in:

AI automation

Workflow engineering

Prompt design

SEO-focused content generation

GitHub versioning

JS scripting

This repository is a clean, professional example of an AI-powered content generation pipeline.

🙌 Thank You

If you’d like to explore the workflow or ask questions, feel free!
