document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  const list = document.getElementById("archive-list");

  if (!input || !list) return;

  fetch("/index.json")
    .then(res => res.json())
    .then(data => {
      const fuse = new Fuse(data, {
        keys: ["title", "summary"],
        threshold: 0.3,
      });

      input.addEventListener("input", () => {
        const query = input.value.trim();
        list.innerHTML = "";

        if (!query) {
          // Show all if query is empty
          data.forEach(item => {
            const html = `
              <div class="archive-item" style="margin-bottom: 2rem;">
                <a href="${item.permalink}" style="font-weight: 600; font-size: 1.2rem; color: var(--link); text-decoration: none;">
                  ${item.title}
                </a>
                <p style="margin-top: 0.5rem; color: var(--text); font-size: 1rem;">
                  ${item.summary}
                </p>
              </div>`;
            list.insertAdjacentHTML("beforeend", html);
          });
          return;
        }

        const results = fuse.search(query);
        if (results.length === 0) {
          list.innerHTML = "<p>No results found.</p>";
          return;
        }

        results.forEach(({ item }) => {
          const html = `
            <div class="archive-item" style="margin-bottom: 2rem;">
              <a href="${item.permalink}" style="font-weight: 600; font-size: 1.2rem; color: var(--link); text-decoration: none;">
                ${item.title}
              </a>
              <p style="margin-top: 0.5rem; color: var(--text); font-size: 1rem;">
                ${item.summary}
              </p>
            </div>`;
          list.insertAdjacentHTML("beforeend", html);
        });
      });
    })
    .catch(err => console.error("Error loading search index:", err));
});
