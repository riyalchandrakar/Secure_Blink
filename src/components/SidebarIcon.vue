<template>
  <div class="flex flex-col items-center gap-1 cursor-pointer text-[#495172] hover:text-[#2464FC]">
    <div class="w-16 h-16 flex items-center justify-center rounded-lg shadow bg-white">
      <img :src="`/src/assets/icons/${icon}`" class="w-6 h-6" />
    </div>
    <span class="text-xs font-medium">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  icon: String,
})
</script>
