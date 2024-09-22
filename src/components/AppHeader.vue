<script setup lang="ts">
import CategoriesBar from './CategoriesBar.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="bg-white">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Logo -->
      <img alt="VueShop logo" class="h-12 md:h-16" src="@/assets/logo.svg" />

      <!-- Arama çubuğu -->
      <div class="relative flex-grow max-w-md">
        <input
          class="w-full h-12 p-4 pr-4 rounded-md outline-none bg-gray-200"
          type="text"
          placeholder="Ürün, kategori veya marka ara"
        />
        <i
          class="pi pi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500"
        ></i>
      </div>

      <!-- Navigasyon -->
      <nav>
        <ul class="flex items-center gap-4">
          <li class="hover:text-orange-500">
            <RouterLink to="/login" class="flex items-center gap-1">
              <i class="pi pi-user"></i>
              <span class="hidden sm:inline">Giriş Yap</span>
            </RouterLink>
          </li>
          <li class="hover:text-orange-500">
            <RouterLink to="/favorites" class="flex items-center gap-1">
              <i class="pi pi-heart"></i>
              <span class="hidden sm:inline">Favorilerim</span>
            </RouterLink>
          </li>
          <li class="hover:text-orange-500">
            <RouterLink to="/cart" class="flex items-center gap-1">
              <i class="pi pi-shopping-cart"></i>
              <span class="hidden sm:inline">Sepetim</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <CategoriesBar />
  </header>
</template>
