<template>
  <div class="flex flex-col gap-1">
    <p class="text-xs font-semibold text-[#8990AD] uppercase tracking-wide">{{ title }}</p>
    <div class="flex items-center gap-2">
      <p class="text-[30px] text-[#11193C] font-semibold">{{ value }}</p>
      <div
        v-if="trend"
        class="flex items-center text-sm font-semibold"
        :class="positive ? 'text-[#4881FA]' : 'text-[#FF4B75]'"
      >
        <svg
          v-if="positive"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 mr-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 4l6 6H6z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 mr-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 14l6 6 6-6H6z" />
        </svg>
        {{ trend }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  trend: String,
  positive: Boolean,
})
</script>
