<template>
  <div class="main">
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
    <!-- From Uiverse.io by boryanakrasteva -->
    <!-- <div class="input-wrapper">
      <button class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          style=""
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="iconify iconify--lucide"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="m21 21l-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </g>
        </svg>
      </button>
      <input placeholder="search.." class="input" name="text" type="text" />
    </div> -->
    <Search />

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
  display: flex;
  justify-content: space-between;
}

.switch {
  height: 42px;
  width: 32px;
  color: rgb(255, 255, 255);
  font-size: 16px;

  font-weight: bold;
}
.title {
  line-height: 42px;
}

/* From Uiverse.io by boryanakrasteva */
.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: absolute;
  right: 58px;
}

.input {
  border-style: none;
  height: 42px;
  width: 42px;
  padding: 10px;
  outline: none;
  transition: 0.5s ease-in-out;
  background-color: #ffffff00;
  padding-right: 40px;
  color: #fff;
}

.input::placeholder,
.input {
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
}

.input::placeholder {
  color: #8f8f8f;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 42px;
  height: 42px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s linear;
}

.icon:focus ~ .input,
.input:focus {
  box-shadow: none;
  width: 220px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 3px solid #fcfcfc;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
@media (width>=768px) {
  /* From Uiverse.io by boryanakrasteva */
  .input-wrapper {
    right: 68px;
  }
}
</style>
