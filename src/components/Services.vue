<template>
  <section class="relative w-full py-24 bg-white overflow-hidden mt-24">
    <!-- Blue background on the right half -->
    <div class="absolute top-0 right-0 h-full w-1/4 bg-[#007aff]"></div>

    <!-- Main content container -->
    <div
      class="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-10"
    >
      <!-- Left Side: Services Menu -->
      <div class="md:w-1/2">
        <p class="text-blue-600 font-semibold mb-2 flex items-center gap-2">
          <img src="@/assets/icons/Group 35624.svg" alt="Services Icon" class="w-5 h-5" />
          OUR SERVICES
        </p>

        <h2 class="text-3xl md:text-4xl font-semibold mb-6">
          Transforming your ideas into Reality
        </h2>

        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
            Web Development
          </button>
          <button class="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
            Mobile Development
          </button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md">
            UI/UX Designing
          </button>
          <button class="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
            Branding
          </button>
          <button class="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
            Cloud Technology
          </button>
        </div>
      </div>

      <!-- Right Side: UI/UX Designing Card -->
      <div class="md:w-1/2 bg-white shadow-xl rounded-lg p-8 relative">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/icons/Group 35621.svg" alt="UI/UX Icon" class="w-10 h-10" />
          <h3 class="text-xl md:text-2xl font-semibold">UI/UX Designing</h3>
        </div>

        <p class="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. UI/UX aims to offer the best
          graphic user experience tailored to your message and brand.
        </p>

        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <img src="@/assets/icons/Group 35604.svg" alt="Check" class="w-5 h-5 mt-1" />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </li>
          <li class="flex items-start gap-2">
            <img src="@/assets/icons/Group 35604.svg" alt="Check" class="w-5 h-5 mt-1" />
            <span>Donec euismod dolor eget velit.</span>
          </li>
          <li class="flex items-start gap-2">
            <img src="@/assets/icons/Group 35604.svg" alt="Check" class="w-5 h-5 mt-1" />
            <span>Curabitur vitae elit nec.</span>
          </li>
          <li class="flex items-start gap-2">
            <img src="@/assets/icons/Group 35604.svg" alt="Check" class="w-5 h-5 mt-1" />
            <span>Vivamus placerat odio eget lorem.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
