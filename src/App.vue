<template>
  <div class="min-h-screen bg-white">
    <!-- Main Content -->
    <main :class="route.path === '/' ? '' : 'p-6'">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
