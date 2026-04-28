<template>
  <div class="main" ref="navContainer">
    <!-- 独立的高亮指示器（左边框蓝条） -->
    <div class="active-indicator" :style="indicatorStyle"></div>

    <button
      v-for="(item, index) in navItems"
      :key="item.id"
      :ref="(el) => setButtonRef(el, index)"
      :class="{ active: activeId === item.id }"
      @click="handleNavClick(item)"
    >
      <component :is="item.icon" />
      <span class="nav-label">{{ item.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import HardwareSVG from '@/assets/icon/HardwareSVG.vue'
import SoftwareSVG from '@/assets/icon/SoftwareSVG.vue'
import GameSVG from '@/assets/icon/GameSVG.vue'
import WebsiteSVG from '@/assets/icon/WebsiteSVG.vue'
import SystemSVG from '@/assets/icon/SystemSVG.vue'

const navItems = [
  { id: 'hardware', label: '硬件', icon: HardwareSVG },
  { id: 'software', label: '软件', icon: SoftwareSVG },
  { id: 'game', label: '游戏', icon: GameSVG },
  { id: 'website', label: '网站', icon: WebsiteSVG },
  { id: 'system', label: '系统', icon: SystemSVG },
]

// 当前高亮项 id
const activeId = ref(navItems[0].id)

// 存储每个按钮的 DOM 元素
const buttonRefs = ref([])
const setButtonRef = (el, index) => {
  if (el) buttonRefs.value[index] = el
}

// 指示器的位置样式
const indicatorStyle = ref({
  top: '0px',
  height: '0px',
})

// 计算当前激活按钮的位置，更新指示器
// 更新指示器的位置和尺寸（高度50% + 垂直居中）
const updateIndicator = () => {
  const activeIndex = navItems.findIndex((item) => item.id === activeId.value)
  const activeButton = buttonRefs.value[activeIndex]
  if (activeButton) {
    const { offsetTop, offsetHeight } = activeButton
    const indicatorHeight = offsetHeight * 0.5 // 高度为按钮高度的50%
    const indicatorTop = offsetTop + (offsetHeight - indicatorHeight) / 2 // 垂直居中
    indicatorStyle.value = {
      top: `${indicatorTop}px`,
      height: `${indicatorHeight}px`,
    }
  }
}

// 监听 activeId 变化，更新指示器位置（带动画）
watch(activeId, async () => {
  // 等待 DOM 更新（如果有其他变化）
  await nextTick()
  updateIndicator()
})

// 监听窗口大小变化，重新计算位置
let resizeObserver = null
onMounted(() => {
  updateIndicator()
  // 使用 ResizeObserver 监听容器尺寸变化（更精确）
  resizeObserver = new ResizeObserver(() => updateIndicator())
  const container = document.querySelector('.main')
  if (container) resizeObserver.observe(container)
  window.addEventListener('resize', updateIndicator)
})

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('resize', updateIndicator)
})

const handleNavClick = (item) => {
  activeId.value = item.id
  // 其他业务逻辑（如路由跳转）
  console.log('点击了：', item.label)
}
</script>

<style scoped>
.main {
  position: relative; /* 为指示器提供定位基准 */
  display: grid;
  grid-auto-flow: row;
  gap: 12px;
  align-items: center;
  justify-items: center;
}

/* 独立的高亮指示器 —— 左边框蓝条 */
.active-indicator {
  position: absolute;
  left: 0;
  width: 4px; /* 左边框宽度 */
  background-color: var(--accent); /* 蓝色高亮 */
  border-radius: 2px;
  transition:
    top 0.3s ease,
    height 0.3s ease; /* 平滑滑动过渡 */
  pointer-events: none; /* 让指示器不干扰点击 */
  z-index: 1;
}

/* 按钮样式（背景透明，不能有单独的边框或背景高亮） */
.main button {
  position: relative; /* 确保按钮在指示器之上（z-index） */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 4px;
  width: 100%;
  border-radius: 8px;
  transition: background-color 0.2s;
  z-index: 2; /* 让按钮内容在指示器上方 */
}

.main button:hover {
  background-color: var(--bg-hover);
}

/* 依然保留 active 类用于其他样式（如文字加粗），但指示器不再依赖它 */
.main button.active .nav-label {
  color: var(--primary-color, #3b82f6);
  font-weight: 500;
  background-color: var(--bg-hover);
}

.nav-label {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1;
  transition:
    color 0.2s,
    font-weight 0.2s;
}

.dark .nav-label {
  color: var(--text-secondary);
}
</style>
