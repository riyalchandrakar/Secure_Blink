<template>
  <section
    class="relative w-full"
    style="
      height: 1080px;
      background-image: url('/Mask-Group-4.svg');
      background-size: contain;
      background-position: top left;
      background-repeat: no-repeat;
      opacity: 1;
    "
  >
    <!-- Navbar -->
    <header class="w-full px-12 py-6 flex items-center justify-between z-10 relative">
      <!-- Logo -->
      <div class="text-2xl font-bold text-white font-[Poppins]">Secure Blink</div>

      <!-- Navigation Links -->
      <nav
        class="hidden md:flex items-center space-x-8 text-white text-[18px] font-normal leading-[27px] font-[Poppins]"
      >
        <a href="#" class="hover:text-blue-200">About</a>
        <a href="#" class="hover:text-blue-200">Services</a>
        <a href="#" class="hover:text-blue-200">Case Studies</a>
        <a href="#" class="hover:text-blue-200">Testimonials</a>
        <a href="#" class="hover:text-blue-200">Contact</a>
      </nav>

      <!-- Login Button -->
      <RouterLink
        to="/login"
        class="ml-6 bg-white text-[#2464FC] w-[159px] h-[53px] rounded-[5px] flex items-center justify-center font-semibold hover:bg-gray-100 transition ease-out duration-300"
      >
        Login
      </RouterLink>
    </header>

    <!-- Hero Content -->
    <div class="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center relative z-10">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-[50px] leading-[60px] text-white font-semibold text-left mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </h1>

        <p class="text-[20px] font-light text-[#9ABFFF] leading-relaxed font-poppins mb-6">
          Our products are fully custom-made, built with the latest technologies and
          cloud-architectures.
        </p>

        <button
          class="bg-white text-[#2464FC] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started >>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
