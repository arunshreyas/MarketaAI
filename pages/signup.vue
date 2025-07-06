<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
        <p class="text-gray-600">Join us and start your journey</p>
      </div>

      <form @submit.prevent="handleSignup" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input v-model="form.email" type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email" />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="form.password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Create a password" />
            <button type="button" class="absolute right-3 top-3 text-sm text-gray-500" @click="showPassword = !showPassword">{{ showPassword ? 'Hide' : 'Show' }}</button>
          </div>
          <div class="w-full h-2 bg-gray-200 rounded mt-2">
            <div :class="`${passwordStrengthColor} h-2 rounded`" :style="{ width: passwordStrengthWidth }"></div>
          </div>
          <p class="text-xs text-gray-600 mt-1">{{ passwordStrengthText }}</p>
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input :type="showPassword ? 'text' : 'password'" v-model="form.confirmPassword" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password" />
          <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
        </div>

        <div class="flex items-start">
          <input id="terms" type="checkbox" v-model="form.agreeTerms" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label for="terms" class="ml-2 block text-sm text-gray-900">
            I agree to the terms and conditions
          </label>
        </div>
        <p v-if="errors.agreeTerms" class="text-red-500 text-sm mt-1">{{ errors.agreeTerms }}</p>

        <div v-if="errors.general" class="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-600">
          {{ errors.general }}
        </div>

        <button type="submit" :disabled="isLoading" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center">
          <span v-if="isLoading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
          {{ isLoading ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600">
          Already have an account?
          <NuxtLink to="/login" class="text-blue-600 hover:text-blue-700 font-medium">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useHead, useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const errors = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: '',
  general: ''
})

const isLoading = ref(false)
const showPassword = ref(false)

const passwordStrength = computed(() => {
  const password = form.password
  let score = 0
  if (password.length >= 8) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength === 0) return 'Very weak'
  if (strength === 1) return 'Weak'
  if (strength === 2) return 'Fair'
  if (strength === 3) return 'Good'
  if (strength === 4) return 'Strong'
  return 'Very strong'
})

const passwordStrengthColor = computed(() => {
  const strength = passwordStrength.value
  if (strength <= 1) return 'bg-red-500'
  if (strength === 2) return 'bg-yellow-500'
  if (strength === 3) return 'bg-blue-500'
  return 'bg-green-500'
})

const passwordStrengthWidth = computed(() => {
  return `${(passwordStrength.value / 5) * 100}%`
})

const validateForm = () => {
  Object.keys(errors).forEach(key => (errors[key] = ''))
  let valid = true

  if (!form.email) {
    errors.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required'
    valid = false
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
    valid = false
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
    valid = false
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
    valid = false
  }

  if (!form.agreeTerms) {
    errors.agreeTerms = 'You must agree to the terms'
    valid = false
  }

  return valid
}

const handleSignup = async () => {
  if (!validateForm()) return
  isLoading.value = true

  try {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`
      }
    })

    console.log('Signup data:', data)
    if (error) {
      console.error('Signup error:', error.message)
      errors.general = error.message
    } else {
      alert('Confirmation email sent! Please check your inbox.')
      await router.push('/login')
    }
  } catch (e) {
    console.error('Unexpected error:', e)
    errors.general = 'Something went wrong. Please try again.'
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Sign Up - Marketa AI',
  meta: [
    {
      name: 'description',
      content: 'Create your Marketa AI account and start building AI-powered marketing campaigns today.'
    }
  ]
})
</script>
