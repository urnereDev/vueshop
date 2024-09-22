<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import CategoriesBar from './components/CategoriesBar.vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <div class="h-px bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200"></div>

  <RouterView />
</template>
