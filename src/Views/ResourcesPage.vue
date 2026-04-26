<template>
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
</script>

<style scoped>
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

.res-nav {
  height: 46px;
  padding: 8px 16px;
  display: flex;
  width: 100%;
  margin: 0;
}
.res-nav button {
  flex: 1; /* 所有按钮等宽拉伸 */
  text-align: center; /* 文字水平居中 */
  margin: 0;
  color: var(--text-secondary);
}
</style>
