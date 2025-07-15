<template>
  <section class="relative bg-[#f9fbff] py-20 px-4">
    <!-- Decorative SVG top-left -->
    <img
      src="@/assets/icons/Group 35700.svg"
      alt="decor"
      class="absolute top-[-40px] left-[-40px] w-48 opacity-90 pointer-events-none z-10"
    />

    <div class="relative z-20 max-w-6xl mx-auto text-center">
      <!-- Heading -->
      <h2 class="text-[26px] md:text-[32px] font-semibold text-[#11193C] mb-2">
        Core Technologies
      </h2>
      <p class="text-gray-500 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliquam ex odio, is the turpis
        accumsan congue euismod blandit dui. Pelle ntesque habitant.
      </p>

      <!-- Tab Switcher -->
      <div
        class="flex justify-center mb-14 space-x-2 bg-white p-2 rounded-full shadow-lg max-w-xs mx-auto border border-gray-100"
      >
        <button class="px-6 py-2 text-sm text-gray-600 rounded-full hover:bg-gray-100 transition">
          Design
        </button>
        <button class="px-6 py-2 text-sm text-white bg-blue-600 rounded-full shadow">
          Development
        </button>
        <button class="px-6 py-2 text-sm text-gray-600 rounded-full hover:bg-gray-100 transition">
          Marketing
        </button>
      </div>

      <!-- Icon Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="w-[80px] h-[80px] bg-white rounded-xl border border-blue-200 flex items-center justify-center shadow-md hover:border-blue-400 hover:shadow-lg transition"
        >
          <img :src="tech.icon" :alt="tech.name" class="w-10 h-10" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoreTechnologies',
  data() {
    return {
      techStack: [
        { name: 'React', icon: new URL('@/assets/icons/React-icon.svg', import.meta.url).href },
        {
          name: 'AWS',
          icon: new URL('@/assets/icons/Amazon_Web_Services_Logo-1.svg', import.meta.url).href,
        },
        { name: 'Cloud', icon: new URL('@/assets/icons/Mask Group 1.svg', import.meta.url).href },
        { name: 'Redux', icon: new URL('@/assets/icons/redux-logo.svg', import.meta.url).href },
        { name: 'JS', icon: new URL('@/assets/icons/Path 37520.svg', import.meta.url).href },
        { name: 'Symfony', icon: new URL('@/assets/icons/g10.svg', import.meta.url).href },
        {
          name: 'Redux 2',
          icon: new URL('@/assets/icons/Amazon_Web_Services_Logo-1.svg', import.meta.url).href,
        },
        { name: 'Node', icon: new URL('@/assets/icons/g10.svg', import.meta.url).href },
        { name: 'Firebase', icon: new URL('@/assets/icons/redux-logo.svg', import.meta.url).href },
        { name: 'React 2', icon: new URL('@/assets/icons/Mask Group 3.svg', import.meta.url).href },
        { name: 'JS 2', icon: new URL('@/assets/icons/_Path_3.svg', import.meta.url).href },
        { name: 'AWS 2', icon: new URL('@/assets/icons/React-icon.svg', import.meta.url).href },
        { name: 'JS 3', icon: new URL('@/assets/icons/Path 37519.svg', import.meta.url).href },
      ],
    }
  },
}
</script>

<style scoped>
/* Optional: Prevent text selection during interaction */
button {
  user-select: none;
}
</style>
