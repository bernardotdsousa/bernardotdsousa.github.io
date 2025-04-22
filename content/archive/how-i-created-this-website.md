---
title: "How I Created This Website with ChatGPT"
date: 2025-04-22
summary: A step-by-step guide to how this website was built using Hugo and ChatGPT — simple, clean, and academic.
---

This year, I built this academic portfolio site with the help of ChatGPT. I wanted something minimal, clean, and focused — just like the personal sites of researchers. Here's how I did it step by step.

First, I decided to use Hugo, a fast and flexible static site generator. I chose a minimalist base theme and made edits to customize it to my personal academic brand.

To get started, I set up my project using GitHub Desktop. This helped me manage the code and keep track of changes easily. I created a new repository named `bernardotdsousa.github.io`, which also serves as the GitHub Pages URL.

The homepage features a short bio, a centered circular portrait, and links to research and contact information. I carefully tweaked the spacing to keep the layout compact but still readable.

The "Publications" page includes my academic work. I manually edited the layout template in `layouts/publications/list.html`, adding entries in reverse chronological order. Each entry links to a PDF hosted in the `static/files/` folder and optionally to a DOI or repository page.

The "Archive" section was added to document the site's development. It’s a place to reflect on technical steps, choices, and changes made over time.

To enable dark/light mode, I included a small JavaScript snippet that stores the user's theme preference. This adds a modern touch to the minimalist interface.

The whole site was written in HTML and Markdown, using Hugo partials and templates where needed. I preview changes locally using `hugo server`, then push updates to GitHub to publish them online.

This site is now a central point for my academic identity, helping others quickly find my work, my CV, and how to contact me.

If you're building something similar, keep it simple and focus on clarity. Let the content speak for itself.
---

## Want to Build Your Own?

If you’d like to build a minimalist academic website like this one, here’s a prompt you can use to get started with the help of ChatGPT or your favorite assistant:

> *“I want to create a clean, minimalist academic website — with pages for publications, a CV, an archive, and dark/light mode. I want to use Hugo as the static site generator and host it for free on GitHub Pages. Please walk me through the setup step-by-step, including theme selection, folder structure, markdown content, and publishing workflow. I’d like to write everything in Markdown, keep the styling simple, and make the site easy to maintain.”*

You can also explore this article for a similar approach using GitHub Pages and Jekyll (no coding experience required):  
**Carl Bettosi** – *[Create a personal academic website easily with GitHub Pages and Jekyll (minimal coding)](https://medium.com/@carlbettosi/create-a-personal-academic-website-easily-with-github-pages-and-jekyll-minimal-coding-f1115eeb5ab7)*

Both Hugo and Jekyll are great options. The most important thing is that your site reflects your work — clearly and professionally.

Start small. Write in Markdown. Focus on making your content accessible. You’ll be surprised how far you can go.

---
