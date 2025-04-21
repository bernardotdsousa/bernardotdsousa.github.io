function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const icon = document.getElementById('dark-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '⚪' : '⚫';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  setTheme(theme);

  const icon = document.getElementById('dark-icon');
  if (icon) {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', toggleTheme);
  }
});
