<template>
  <div class="main">
    <search class="search" />
    <button @click="toggleDark" class="theme-toggle">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useTheme } from '@/utils/useTheme'

import Search from './Search.vue'

const { isDark, toggleDark } = useTheme()

// ---------- 响应式断点 ----------
const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 }
const screens = useBreakpoints(breakpoints)
const isMobile = screens.smaller('tablet')
const isTablet = screens.between('mobile', 'desktop')
const isDesktop = screens.greaterOrEqual('desktop')
</script>

<style scoped>
.main {
  height: 52px;
  width: 100vw;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  position: relative;
  left: calc(var(--nav-width) - 12px);
}
/* @media (width>=768px) {

} */
</style>
