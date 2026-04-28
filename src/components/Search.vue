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
  vertical-align: middle;
  width: 200px;
}

.search-input {
  color: var(--text-primary);
  background-color: var(--bg-surface);
  width: 100%;
  height: 36px;
  font-size: 14px;
  padding: 0 36px;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;
  display: block;
  /* 聚焦后底部边框默认 */
  background-color: var(--bg-surface); /* 你原来的背景色，保留！ */

  /* 👇 新加：用多背景写法，不覆盖背景色 */
  background-image: linear-gradient(var(--accent), var(--accent));
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 0 2px; /* 默认隐藏 */
}

.search-input:focus {
  /* 聚焦后底部边框 */
  outline: none;
  border-color: #ccc;
  background-size: 80% 2px;
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
  width: 16px;
  height: 16px;
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
