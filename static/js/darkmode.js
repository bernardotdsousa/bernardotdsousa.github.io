const toggle = document.getElementById('dark-toggle')
const root = document.documentElement
const userPref = localStorage.getItem('theme')

function applyTheme(theme) {
  root.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

if (userPref) {
  applyTheme(userPref)
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark')
} else {
  applyTheme('light')
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme')
  const next = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
})
