@AGENTS.md

# Claude Code — additional notes for this repo

The rules in `AGENTS.md` apply to all agents and take precedence. The notes
below are Claude-Code specific.

## Source of truth

Treat <https://www.jingyu.io> as the canonical public source for biography,
publications, teaching, and advising content. When in doubt about a fact,
re-fetch the relevant page before editing rather than guessing.

## Private source handling

- `/Users/jing/GitHub/WebsitePrivateInput` is an additional working
  directory in some sessions. Files inside it may be opened and used locally
  only when the user explicitly authorizes them for website drafting. Do not
  add, link to, embed, stage, commit, push, or upload files from that folder.

## Defaults Claude should follow here

- Do not run `git push` unless the user explicitly asks. Do not amend or
  rewrite history.
- Do not run `git commit` unless the user explicitly asks.
- Do not change `_config.yml`'s `url` or `baseurl`.
- Do not add a `CNAME` file or alter GitHub Pages deployment settings.
- Prefer editing existing files. Only create new pages or `_news/` entries
  when the public site has the corresponding content.
- When citing me in the publications page, my author key in
  `_bibliography/papers.bib` should always render as a variant of "Yu, J."
  or "Jing Yu" so the al-folio bolding picks it up (see the `scholar:`
  block in `_config.yml`).

## When the user asks for something risky

Pause and confirm explicitly before any of:

- Deleting more than a couple of files.
- Editing `_config.yml` deployment fields.
- Adding external content (images, PDFs, embeds) hosted off-site.
- Anything that would publish or share private material.
