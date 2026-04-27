<template>
  <search v-if="isDesktop" class="search" />
  <nav class="res-nav">
    <button>硬件</button>
    <button>软件</button>
    <button>游戏</button>
    <button>网站</button>
    <button>系统</button>
  </nav>
  <h1>资源...</h1>

  <DialogRoot>
    <DialogTrigger> 弹窗 </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="my-overlay" />
      <DialogContent class="text">
        <DialogTitle>标题</DialogTitle>
        <DialogDescription>描述内容</DialogDescription>
        <DialogClose>关闭</DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'
import Search from '@/components/Search.vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'

// ---------- 响应式断点 ----------
const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 }
const screens = useBreakpoints(breakpoints)
const isMobile = screens.smaller('tablet')
const isTablet = screens.between('mobile', 'desktop')
const isDesktop = screens.greaterOrEqual('desktop')
</script>

<style scoped>
.res-nav {
  height: 46px;
  padding: 8px 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}
.res-nav button {
  width: 62px;
  height: 32px;
  text-align: center;
  color: var(--text-primary);
  background-color: var(--bg-secondary-color);

  font-size: 12px;

  /* 圆角 */
  border-radius: 12px;

  /* 辅助效果：边框、过渡 */
  outline: none;
  transition: all 0.3s ease;
}

.text {
  background-color: rgb(231, 59, 37);
  width: 200px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
}

.my-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

/* @media (width<=768px) {
  .search{
    width: 182px;
  }
} */
</style>
