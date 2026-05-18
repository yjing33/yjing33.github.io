# Agent Guidelines — Jing Yu's al-folio Site

This is the **public academic website of Jing Yu**, built on the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and deployed
to GitHub Pages at <https://yjing33.github.io>.

These rules apply to every coding agent (Claude Code, Copilot, Cursor, etc.)
that edits this repository. They take precedence over generic al-folio
upstream guidance whenever the two conflict.

## Hard rules

1. **Public-site output only.** The website itself should contain only
   information the user has approved for the public website. If source material
   is ambiguous, ask the user or leave it out and flag it in the response.
2. **Private source handling.** Files under `WebsitePrivateInput/` may be read
   and used locally only when the user explicitly authorizes them for website
   drafting. Do not add, link to, embed, stage, commit, push, or upload files
   from `WebsitePrivateInput/`.
3. **No private artefact files.** Do not add research statements, proposals,
   unpublished drafts, DOCX/PDF manuscripts, or any other unpublished source
   files to this repository unless the user explicitly says that specific file
   is intended to be published.
4. **Do not invent facts.** Do not fabricate publications, authors,
   coauthors, awards, talks, students, dates, venues, affiliations, DOIs,
   arXiv IDs, or links. If a fact is unclear, ask the user or leave it out
   and flag it in the response.
5. **Do not change deployment configuration without explicit instruction.**
   In particular, do not modify:
   - `url: https://yjing33.github.io` in `_config.yml`
   - `baseurl: ""` in `_config.yml`
   - any custom domain / DNS settings (no `CNAME` file is committed; do not
     add one)
   - repository visibility, GitHub Pages settings, or branch protection
6. **Do not commit or push automatically.** Only commit when the user
   explicitly approves. Never push.

## Site structure

Navigation pages live in `_pages/` and are shown in the navbar when their
front matter has `nav: true`. The active navigation, in order, is:

| Page | Source | Purpose |
| ---- | ------ | ------- |
| `about` (home) | `_pages/about.md` | Bio, contact, news, selected papers |
| `publications` | `_pages/publications.md` + `_bibliography/papers.bib` | Full publication list |
| `projects` | `_pages/projects.md` + `_projects/*.md` | Research themes and project descriptions |
| `teaching` | `_pages/teaching.md` | Courses + outreach |

Other al-folio pages (`advising`, `blog`, `repositories`, `books`, `cv`,
`news`) are kept on disk so the template is intact, but `nav: false` or
`published: false` keeps them out of the navbar/site output. Re-enable them
deliberately when there is real content to show.

`_news/` holds short, dated announcements that appear on the homepage. Each
file uses absolute ISO dates in the filename and front matter.

## Editing rules

- **Publications.** Add new entries to `_bibliography/papers.bib`. Use the
  existing keys/format. Mark a paper as `selected = {true}` to feature it on
  the homepage. Do not add `selected` to more than ~5 papers at a time.
- **News.** Add a new file under `_news/` named `YYYY-MM-DD-slug.md` with
  `inline: true` for short items.
- **Advising and teaching.** Update the relevant page in `_pages/` directly.
  Keep entries factual and concise.
- **Profile photo.** Replace `assets/img/prof_pic.jpg` with a real photo
  when one is available. Do not embed externally-hosted images.
- **Socials.** Edit `_data/socials.yml`. Only add accounts the user has
  asked you to add.

## Validation before committing

Before suggesting a commit:

1. Run `git status` and confirm no private files (anything from
   `WebsitePrivateInput/`, `*.docx`, draft PDFs, `*.pem`, `.env`) are
   staged.
2. Confirm `_config.yml` still has `url: https://yjing33.github.io` and
   `baseurl: ""`.
3. If Docker is available, run `docker compose up --build` and visit
   <http://localhost:8080> to sanity-check the homepage, publications,
   teaching, and advising pages in both light and dark mode.
4. If Docker is not available, say so explicitly rather than claiming the
   build passed.

## Style

- Plain, factual, academic tone. No hype words ("revolutionary",
  "groundbreaking", "cutting-edge", etc.).
- Short paragraphs, lists where helpful, sentence-case headings.
- Preserve the al-folio visual design — avoid heavy custom CSS.
