---
title: "How I Created This Website with ChatGPT"
date: 2025-04-21
summary: "An in-depth walkthrough of how I designed and built this high-end academic portfolio site with the help of ChatGPT."
draft: false
---

This guide documents the full process of creating my academic website from scratch — including every step, error, fix, and tool used. It was developed in collaboration with ChatGPT.

---

## 1. Vision and Requirements

I wanted a minimalist, high-end personal academic site inspired by MIT-level design principles — clean layout, black-and-white color palette, excellent typography, and subtle interactivity. It needed to include:

- Homepage + About  
- Publications and Archive sections  
- CV link and portrait  
- Dark/Light mode  
- A search function (Fuse.js)  
- Self-hosted on GitHub Pages  

---

## 2. Tooling: Hugo + GitHub Pages + ChatGPT

I used the [Hugo static site generator](https://gohugo.io/), with a custom theme (`bernardo-clean`), GitHub Desktop for version control, and ChatGPT for continuous assistance with:

- PowerShell prompts  
- Theme structure  
- HTML templating  
- Styling and JavaScript debugging  
- Search and dark mode features  

---

## 3. Setup Steps

### ▸ Created Hugo project

Basic scaffold with `hugo new site` and custom theme integration.

---

## 4. Features We Built

✅ **Minimalist Header + Navigation**  
Created in `layouts/partials/header.html`, with a left-aligned navigation and a right-aligned dark/light toggle icon.

✅ **Dark Mode Toggle**  
Implemented using `prefers-color-scheme` with a manual override via a toggle in `static/js/darkmode.js`.

✅ **Archive Section**  
Built a custom layout in `layouts/archive/list.html` displaying title and summary, sorted by date.

✅ **Search with Fuse.js**  
Integrated `static/js/fuse.min.js` and a custom `search.js` to filter archive entries by title and summary. Search bar appears only on the Archive page.

✅ **CV and Portrait**  
Linked my CV in the footer and added a small circular portrait using `static/files/portrait.jpg`.

---

## 5. Errors & Fixes

Along the way, I encountered (and fixed):

- ⚠️ **Page Not Found** — caused by incorrect Hugo root settings  
- ❌ **"Fuse is not defined"** — due to incorrect JS load order  
- 👻 **Search bar on all pages** — fixed visibility condition  
- 🔁 **Dark mode resets on page change** — resolved with localStorage logic  

All issues were debugged and fixed with ChatGPT's help.

---

## 6. Hosting on GitHub Pages

- **Repo**: `bernardotdsousa.github.io`  
- Set `publishDir = "docs"` in `config.toml`  
- Site is live at: [https://bernardotdsousa.github.io/](https://bernardotdsousa.github.io/)

---

## 7. What's Next?

I’ll keep improving the site with:

- Tag filters  
- Publication filters  
- AI-powered blog post generator  
- Live academic CV updates  

This post was created as part of my journey into workflow automation, AI tools, and minimalist design. Built 100% with open source + ChatGPT.

