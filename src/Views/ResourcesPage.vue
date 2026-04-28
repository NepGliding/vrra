<template>
  <div class="main">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'
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
