<!-- CountryCard.vue -->
<template>
  <div class="flex flex-col items-center text-[#495172] py-3 px-2 text-center">
    <p class="text-sm font-semibold">{{ country }}</p>
    <div class="flex items-center gap-1">
      <p class="text-[22px] font-semibold text-[#11193C]">
        {{ count }}
      </p>
      <svg
        v-if="trend === 'up'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-[#00E38C]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4l6 6H6z" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-[#FF4B75]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 14l6 6 6-6H6z" />
      </svg>
    </div>

    <!-- Chart placeholder -->
    <div class="w-full mt-2">
      <svg v-if="trend === 'up'" class="w-full h-6" viewBox="0 0 100 20">
        <path d="M0 15 Q20 10 40 12 T80 14 T100 10" stroke="#4881FA" stroke-width="2" fill="none" />
      </svg>
      <svg v-else class="w-full h-6" viewBox="0 0 100 20">
        <path d="M0 15 Q20 18 40 16 T80 18 T100 17" stroke="#FF4B75" stroke-width="2" fill="none" />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: String,
  count: Number,
  trend: String,
})
</script>
