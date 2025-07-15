<template>
  <section class="py-24 bg-white relative">
    <div
      class="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10"
    >
      <!-- Left Graphic -->
      <div
        class="w-full md:w-1/2 h-[400px] bg-no-repeat bg-contain bg-center md:bg-right"
        style="background-image: url('/Group-35699.svg')"
      ></div>

      <!-- Right Content -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <div class="flex items-center gap-2 mb-3 justify-center md:justify-start">
          <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="5,12 19,4 19,20" />
          </svg>
          <span class="text-sm text-blue-500 font-semibold uppercase">About Us</span>
        </div>
        <h2 class="text-3xl font-bold text-[#11193C] mb-4">Great Digital Agency</h2>
        <p class="text-[#8990AD] leading-relaxed mb-5">
          Our products are fully custom-made, built with the latest technologies and
          cloud-architectures.
        </p>
        <p class="text-[#8990AD] leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac odio a turpis accumsan
          congue eu a justo. Bibendum dui at nulla malesuada habitant morbi tristique.
        </p>
        <button
          class="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Get Started &gt;&gt;
        </button>
      </div>
    </div>

    <!-- Top Right Decorative Shape -->
    <div class="absolute top-0 right-0 z-0">
      <img src="@/assets/icons/Group 35698.svg" alt="Shapes" class="w-[300px] opacity-100" />
    </div>

    <!-- Bottom Right Decorative Shape -->
    <div
      class="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-no-repeat bg-contain z-0 pointer-events-none"
      style="background-image: url('/Group-35650.svg'); transform: rotate(15deg); opacity: 1"
    ></div>
  </section>
</template>

<script setup>
// No logic needed
</script>
