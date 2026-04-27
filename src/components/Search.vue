<template>
  <div class="search-box">
    <span class="search-icon">
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
    </span>
    <input
      ref="inputRef"
      type="text"
      v-model="inputValue"
      placeholder="请输入关键词"
      class="search-input"
    />

    <span v-show="inputValue.length > 0" class="clear-btn" @click="clearInput"> × </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 只需要逻辑：输入框的值、清除行为、获取焦点
const inputValue = ref('')
const inputRef = ref(null)

const clearInput = () => {
  inputValue.value = ''
  inputRef.value?.focus()
}
</script>

<style scoped>
.search-box {
  position: relative;
  display: inline-block;
}

.search-input {
  /* 颜色：文本颜色 + 背景色 */
  color: var(--text-primary);
  background-color: var(--bg-secondary-color);

  /* 大小：宽度、高度、字体大小、内边距 */
  width: 280px;
  height: 38px;
  font-size: 14px;
  padding: 0 36px; /* 左右内边距使文字不贴边 */

  /* 圆角 */
  border-radius: 22px;

  /* 辅助效果：边框、过渡 */
  outline: none;
  transition: all 0.3s ease;
}

/* 可选：聚焦效果 */
.search-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 1px var(--color-accent);
}
.search-input::placeholder {
  color: var(--text-secondary);
  font-size: 12px;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #999;
  pointer-events: none;
}

.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #666;
  cursor: pointer;
  transition: background 0.2s;
  user-select: none;
}

.clear-btn:hover {
  background: #bbb;
  color: #333;
}
</style>
