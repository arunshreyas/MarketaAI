<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="text-center">
        <NuxtLink to="/" class="inline-block">
          <h1 class="text-3xl font-bold text-gray-900">
            Marketa<span class="text-blue-600">AI</span>
          </h1>
        </NuxtLink>
        <h2 class="mt-6 text-2xl font-semibold text-gray-900">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Don't have an account?
          <NuxtLink to="/signup" class="font-medium text-blue-600 hover:text-blue-500 transition-colors">
            Sign up for free
          </NuxtLink>
        </p>
      </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-100">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                id="password"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none pr-10"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 px-3 text-sm text-gray-500"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>

          <div v-if="errors.general" class="text-red-600 text-sm">{{ errors.general }}</div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md flex items-center justify-center"
          >
            <span v-if="isLoading" class="animate-spin h-5 w-5 border-b-2 border-white rounded-full mr-2"></span>
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useSupabaseClient, useHead } from '#imports'

const supabase = useSupabaseClient()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  general: ''
})

const isLoading = ref(false)
const showPassword = ref(false)

const handleLogin = async () => {
  errors.general = ''

  if (!form.email || !form.password) {
    errors.general = 'Please fill in both fields.'
    return
  }

  isLoading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password
    })

    if (error) {
      errors.general = error.message
    } else {
      // Ensure page /Ai.vue exists
      await router.push('/Ai').catch((err) => {
        console.error('Navigation failed:', err)
        errors.general = 'Login succeeded but navigation failed.'
      })
    }
  } catch (err) {
    console.error(err)
    errors.general = 'Something went wrong during login.'
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Sign In - Marketa AI'
})
</script>
