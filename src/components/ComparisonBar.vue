<template>
  <div class="mb-4">
    <div class="flex items-center justify-between mb-1">
      <div class="flex items-center gap-2">
        <img :src="flag" alt="flag" class="w-5 h-5 object-cover rounded" />
        <span class="font-medium">{{ country }}</span>
      </div>
      <span class="text-sm text-gray-600">{{ percent }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="bg-[#2464FC] h-2 rounded-full" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: String,
  percent: Number,
  flag: String,
})
</script>
