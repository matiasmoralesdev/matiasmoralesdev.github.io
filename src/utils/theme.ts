export const toggleDarkMode = (isDark: boolean): void => {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  localStorage.setItem('darkMode', isDark.toString())
}

export const isDarkModeEnabled = (): boolean => {
  return localStorage.getItem('darkMode') === 'true'
}

export const initTheme = (): void => {
  const isDark = isDarkModeEnabled()
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}
