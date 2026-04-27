<template>
  <div class="main">
    <div class="head">
      <button class="switch">
        <svg
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 36L19 24L31 12"
            stroke="#ededed"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <span class="title">资源页</span>
      <button class="switch">
        <svg
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94971 11.9497H39.9497"
            stroke="#ededed"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.94971 23.9497H39.9497"
            stroke="#ededed"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.94971 35.9497H39.9497"
            stroke="#ededed"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <search v-if="!isDesktop" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'
import Search from './Search.vue'

// ---------- 响应式断点 ----------
const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 }
const screens = useBreakpoints(breakpoints)
const isMobile = screens.smaller('tablet')
const isTablet = screens.between('mobile', 'desktop')
const isDesktop = screens.greaterOrEqual('desktop')
</script>

<style scoped>
.main {
  padding: 12px 16px;
  border-bottom: 1px solid rgb(58, 58, 58);
}
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.switch {
  height: 42px;
  width: 42px;
  color: black;
  font-size: 12px;
  /* line-height: 42px; */
  font-weight: bold;
  /* background-color: var(--color-accent); */
}
.title {
  line-height: 42px;
}
</style>
