<template>
  <header>
    <AppHeader />
  </header>
  <nav>
    <AppNav />
  </nav>
  <main>
    <router-view />
  </main>
</template>
<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
</script>
<style scoped></style>
