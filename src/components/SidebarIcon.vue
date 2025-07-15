<script setup>
defineProps({
  label: String,
  icon: String,
})

const icons = import.meta.glob('@/assets/icons/*', { eager: true, import: 'default' })

function getIconPath(name) {
  return icons[`/src/assets/icons/${name}`]
}
</script>

<template>
  <div class="flex flex-col items-center gap-1 cursor-pointer text-[#495172] hover:text-[#2464FC]">
    <div class="w-16 h-16 flex items-center justify-center rounded-lg shadow bg-white">
      <img :src="getIconPath(icon)" class="w-6 h-6" />
    </div>
    <span class="text-xs font-medium">{{ label }}</span>
  </div>
</template>
