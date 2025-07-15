<template>
  <div class="flex items-center justify-between gap-4 p-3 rounded-md bg-white shadow">
    <div class="flex items-center gap-3">
      <img :src="avatar" alt="avatar" class="w-10 h-10 rounded-full object-cover" />
      <p class="text-[#11193C] font-medium text-sm">{{ name }}</p>
    </div>
    <span class="text-xs font-semibold px-3 py-1 rounded-full" :class="badgeColor">
      {{ role }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  role: String,
  avatar: String,
})

const badgeColor = computed(() => {
  switch (props.role) {
    case 'Top Trader':
      return 'bg-blue-100 text-blue-600'
    case 'Manager':
      return 'bg-purple-100 text-purple-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
})
</script>
