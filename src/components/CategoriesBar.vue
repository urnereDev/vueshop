<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Category {
  name: string
  subCategories: string[]
}

const showDropdown = ref<boolean>(false)
const dropdownTrigger = ref<HTMLElement | null>(null)

const categories: Category[] = [
  {
    name: 'Elektronik',
    subCategories: ['Telefon', 'Bilgisayar', 'Tablet', 'Televizyon', 'Kamera']
  },
  {
    name: 'Moda',
    subCategories: ['Kadın', 'Erkek', 'Çocuk', 'Ayakkabı', 'Çanta']
  },
  {
    name: 'Ev & Yaşam',
    subCategories: ['Mobilya', 'Dekorasyon', 'Ev Tekstili', 'Mutfak Gereçleri', 'Aydınlatma']
  },
  {
    name: 'Spor & Outdoor',
    subCategories: [
      'Spor Giyim',
      'Fitness Aletleri',
      'Kamp Malzemeleri',
      'Bisiklet',
      'Outdoor Ekipmanları'
    ]
  },
  {
    name: 'Kozmetik',
    subCategories: ['Makyaj', 'Cilt Bakımı', 'Parfüm', 'Saç Bakımı', 'Kişisel Bakım']
  }
]

const hideDropdown = (): void => {
  showDropdown.value = false
}

const handleClickOutside = (event: MouseEvent): void => {
  if (dropdownTrigger.value && !dropdownTrigger.value.contains(event.target as Node)) {
    hideDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="rounded-lg shadow-sm relative">
    <div class="py-4 container mx-auto flex items-center justify-between overflow-x-auto">
      <div
        class="font-bold whitespace-nowrap flex items-center gap-2 bg-white rounded-full px-4 py-2 cursor-pointer"
        @mouseenter="showDropdown = true"
        @mouseleave="hideDropdown"
        ref="dropdownTrigger"
      >
        <i class="pi pi-bars"></i>Tüm Kategoriler
      </div>
      <div class="flex items-center gap-4">
        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Kadın
        </div>
        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Erkek
        </div>
        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Çocuk
        </div>
        <div class="whitespace-nowrap hover:text-orange-500 py-2 rounded-full hover:bg-white">
          Ev
        </div>
        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Elektronik
        </div>
        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Spor
        </div>
        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Giyim
        </div>

        <div
          class="whitespace-nowrap hover:text-orange-500 cursor-pointer py-2 rounded-full hover:bg-white"
        >
          Hediyelik
        </div>
      </div>

      <!-- Diğer kategoriler buraya -->
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-show="showDropdown"
        class="absolute top-full left-0 w-full bg-white shadow-lg z-10"
        @mouseenter="showDropdown = true"
        @mouseleave="hideDropdown"
      >
        <div class="container mx-auto py-4 px-6">
          <div class="grid grid-cols-5 gap-4">
            <div v-for="category in categories" :key="category.name" class="space-y-2">
              <h3 class="font-bold text-lg">{{ category.name }}</h3>
              <ul class="space-y-1">
                <li
                  v-for="subCategory in category.subCategories"
                  :key="subCategory"
                  class="text-sm text-gray-600 hover:text-orange-500 cursor-pointer"
                >
                  {{ subCategory }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
