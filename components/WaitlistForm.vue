<template>
  <div class="max-w-md mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="flex flex-col sm:flex-row gap-3">
        <div class="flex-1">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
            :class="{ 'border-red-300 focus:ring-red-500': error }"
          />
          <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
        </div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="btn-primary whitespace-nowrap"
          :class="{ 'opacity-75 cursor-not-allowed': isSubmitting }"
        >
          <span v-if="!isSubmitting">Join Waitlist</span>
          <span v-else class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Joining...
          </span>
        </button>
      </div>
    </form>
    
    <div v-if="success" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <p class="text-green-700 font-medium">Thanks! You're on the waitlist.</p>
      </div>
    </div>
    
    <p class="text-sm text-gray-500 mt-4 text-center">
      Join <span class="font-semibold text-gray-900">2,847</span> others waiting for early access
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()

const email = ref('')
const error = ref('')
const success = ref(false)
const isSubmitting = ref(false)

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = async () => {
  error.value = ''

  if (!email.value) {
    error.value = 'Email is required'
    return
  }

  if (!validateEmail(email.value)) {
    error.value = 'Please enter a valid email address'
    return
  }

  isSubmitting.value = true

  try {
    const { error: insertError } = await supabase
      .from('Emails') // Make sure table is named exactly 'Emails'
      .insert([{ Email: email.value }]) // Make sure column is 'Email'

    if (insertError) {
      console.error(insertError)
      error.value = insertError.message || 'Insert failed'
    } else {
      success.value = true
      email.value = ''
      setTimeout(() => {
        success.value = false
      }, 5000)
    }
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

</script>