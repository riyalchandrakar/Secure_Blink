// src/stores/auth.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const isAuthenticated = ref(false)
  const error = ref(null)

  const user = ref({
    name: '',
    email: '',
  })

  const login = async ({ email, password }) => {
    error.value = null

    // Dummy credentials (replace with real logic if needed)
    const validEmail = 'user@example.com'
    const validPassword = '123456'

    if (email === validEmail && password === validPassword) {
      isAuthenticated.value = true
      user.value = { name: 'John Doe', email }
      router.push('/dashboard')
    } else {
      error.value = 'Invalid email or password'
    }
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = { name: '', email: '' }
    router.push('/login')
  }

  return { isAuthenticated, user, error, login, logout }
})
