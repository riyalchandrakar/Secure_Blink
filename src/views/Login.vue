<template>
  <div class="min-h-screen flex">
    <!-- Left: Background Image -->
    <div class="w-1/2 hidden lg:flex items-center justify-center bg-white">
      <img src="/Group-35699.svg" alt="Login Illustration" class="object-cover w-full h-full" />
    </div>

    <!-- Right: Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
      <form @submit.prevent="handleLogin" class="w-full max-w-sm">
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black text-center">
          Login to Access Dashboard
        </h2>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-black mb-1" for="email">Email*</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Password with "Forgot Password" -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-black" for="password">Password*</label>
            <a href="#" class="text-sm text-red-500 hover:underline">Forgot Password?</a>
          </div>
          <input
            id="password"
            v-model="password"
            type="password"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Error message -->
        <p v-if="auth.error" class="text-red-500 text-sm mb-4">{{ auth.error }}</p>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Login &rarr;
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const handleLogin = () => {
  auth.login({ email: email.value, password: password.value })
}
</script>
