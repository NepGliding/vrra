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
      <Transition name="icon-switch" mode="out-in">
        <!-- 必须加key，让Vue识别为不同元素从而触发过渡 -->
        <component
          :key="activeId === item.id ? 'active' : 'normal'"
          :is="activeId === item.id ? item.activeIcon : item.icon"
        />
      </Transition>
      <span class="nav-label">{{ item.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import HardwareSVG from '@/assets/icon/HardwareSVG.vue'
import HardwareSVG2 from '@/assets/icon/HardwareSVG2.vue'
import SoftwareSVG from '@/assets/icon/SoftwareSVG.vue'
import SoftwareSVG2 from '@/assets/icon/SoftwareSVG2.vue'
import GameSVG from '@/assets/icon/GameSVG.vue'
import GameSVG2 from '@/assets/icon/GameSVG2.vue'
import WebsiteSVG from '@/assets/icon/WebsiteSVG.vue'
import WebsiteSVG2 from '@/assets/icon/WebsiteSVG2.vue'
import SystemSVG from '@/assets/icon/SystemSVG.vue'
import SystemSVG2 from '@/assets/icon/SystemSVG2.vue'

const navItems = [
  { id: 'hardware', label: '硬件', icon: HardwareSVG, activeIcon: HardwareSVG2 },
  { id: 'software', label: '软件', icon: SoftwareSVG, activeIcon: SoftwareSVG2 },
  { id: 'game', label: '游戏', icon: GameSVG, activeIcon: GameSVG2 },
  { id: 'website', label: '网站', icon: WebsiteSVG, activeIcon: WebsiteSVG2 },
  { id: 'system', label: '系统', icon: SystemSVG, activeIcon: SystemSVG2 },
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
    const indicatorHeight = offsetHeight * 0.38 // 高度为按钮高度的50%
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
  position: relative;
  display: grid;
  grid-auto-flow: row;
  gap: 4px;
  align-items: center;
  justify-items: center;
}

/* 左边框蓝条 */
.active-indicator {
  position: absolute;
  left: 0;
  width: 4px;
  background-color: var(--accent);
  border-radius: 2px;
  transition:
    top 0.3s ease,
    height 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

/* 按钮样式 */
.main button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 4px;
  width: 90%;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
  transition: background-color 0.2s;
  z-index: 0;
}

.main button:hover {
  background-color: var(--bg-hover);
}

/* 激活状态按钮样式 */
.main button.active {
  background-color: var(--bg-nav-active);
}

/* 文字描述样式 - 绝对定位，不占用按钮布局 */
.nav-label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1px;
  text-align: center;
  font-size: 11px;
  color: var(--text-secondary, #888);
  line-height: 1.2;
  pointer-events: none; /* 让文字不影响按钮点击 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px;
}

/* 激活状态的按钮隐藏文字描述 */
.main button.active .nav-label {
  display: none;
}
/* 图标切换动画 */
.icon-switch-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.icon-switch-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* 进入动画：仅淡入，保持正常尺寸 */
.icon-switch-enter-active {
  transition: opacity 0.2s ease;
}
.icon-switch-enter-from {
  opacity: 0;
}
</style>
