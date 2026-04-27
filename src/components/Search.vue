<template>
  <!-- From Uiverse.io by boryanakrasteva -->
  <div class="input-wrapper">
    <button class="icon" @click="focusInput">
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
    <input ref="inputRef" placeholder="search.." class="input" name="text" type="text" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputRef = ref(null)

const focusInput = () => {
  inputRef.value?.focus()
}
</script>

<style scoped>
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
