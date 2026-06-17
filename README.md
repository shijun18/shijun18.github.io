# Jun Shi Academic Homepage

This repository hosts the personal academic homepage of **Jun Shi**. It is a lightweight static website built with HTML, CSS, and JavaScript, and is designed for deployment on GitHub Pages.

## Features

- Bilingual content: English and Chinese
- Configurable profile sidebar
- Research interests, latest news, selected publications, projects, applications, services, education, and awards
- Collapsible yearly news archive and publication groups
- Multiple visual themes
- Local profile image support
- Simple footer with copyright, last update date, and real visit statistics

## File Structure

```text
.
├── index.html
├── data.js
├── app.js
├── styles.css
├── assets/
│   └── profile.jpg
├── themes/
│   ├── theme-classic.css
│   ├── theme-journal.css
│   ├── theme-slate.css
│   └── theme-warm.css
└── README.md
```

## Update Content

Most content is maintained in `data.js`.

The main sections are:

- `profile`: name, title, affiliation, location, avatar
- `links`: sidebar links such as Email, Google Scholar, ORCID, DBLP, ResearchGate, GitHub
- `hero.summary`: biography
- `research`: research interests
- `recruiting`: recruiting note
- `news`: latest news
- `publications`: selected publications
- `projects`: research projects
- `apps`: application/system links
- `services`: professional services
- `education`: education and work experience
- `awards`: honors and awards
- `meta`: footer, copyright, last updated date

English and Chinese content are stored separately:

```js
window.siteContent.en
window.siteContent.zh
```

## Profile Image

Place the image under `assets/`, for example:

```text
assets/profile.jpg
```

Then update the avatar path in `data.js`:

```js
avatar: "assets/profile.jpg"
```

## Add an Application Link

Add an item to both `zh.apps` and `en.apps` in `data.js`:

```js
{
  icon: "apps",
  title: "System Name",
  description: "Short system description.",
  url: "https://example.com/",
  linkText: "Open"
}
```

## Add a Publication

Add a publication item under the corresponding year group in `publications`:

```js
{
  tag: "MICCAI 2026",
  authors: "Author A, Jun Shi*, Author B",
  title: "Paper Title",
  venue: "Conference or Journal",
  year: "2026",
  links: [{ label: "Source", url: "https://example.com/" }]
}
```

Notes:

- `Jun Shi` and `石军` are automatically highlighted in author lists.
- The publication section note uses `*` for corresponding author and `#` for co-first author.

## Themes

Available themes are configured in `data.js`:

```js
themes: [
  { id: "classic", label: "Classic", file: "themes/theme-classic.css" },
  { id: "journal", label: "Journal", file: "themes/theme-journal.css" },
  { id: "slate", label: "Slate", file: "themes/theme-slate.css" },
  { id: "warm", label: "Warm", file: "themes/theme-warm.css" }
]
```

To set the default theme:

```js
defaultTheme: "classic"
```

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Deploy to GitHub Pages

If this repository is named:

```text
<username>.github.io
```

then the homepage will be available at:

```text
https://<username>.github.io/
```

For a normal repository, enable GitHub Pages in:

```text
Settings -> Pages -> Deploy from a branch
```

Use:

```text
Branch: main
Folder: /root
```

## Notes

The visit counter uses Busuanzi (`busuanzi.ibruce.info`) to provide real site-wide page views and visitor statistics for this static homepage. The numbers load only after the page is published online or previewed with network access.
