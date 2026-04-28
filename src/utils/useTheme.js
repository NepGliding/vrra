// composables/useTheme.js
import { ref, watchEffect } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

export function useTheme() {
  const toggleDark = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // 监听系统主题变化（可选，优先级低于手动设置）
  const listenSystemTheme = () => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (localStorage.getItem('theme') === null) {
        // 未手动设置过
        isDark.value = e.matches
        applyTheme()
      }
    }
    media.addEventListener('change', handler)
    // 初始时若 localStorage 无值，跟随系统
    if (localStorage.getItem('theme') === null) {
      isDark.value = media.matches
      applyTheme()
    }
  }

  // 初始化
  applyTheme()
  listenSystemTheme()

  return { isDark, toggleDark }
}
