<template>
  <div id="contact" class="mb-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-4">Get in Touch</h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Have questions about Marketa AI? We'd love to hear from you.
      </p>
    </div>
    
    <div class="max-w-2xl mx-auto">
      <form @submit.prevent="handleContactSubmit" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              id="firstName"
              v-model="contactForm.firstName"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              v-model="contactForm.lastName"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div>
          <label for="contactEmail" class="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="contactEmail"
            v-model="contactForm.email"
            type="email"
            required
            class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            id="subject"
            v-model="contactForm.subject"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="What's this about?"
          />
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            v-model="contactForm.message"
            rows="5"
            required
            class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us more about your question or feedback..."
          ></textarea>
        </div>
        
        <div v-if="contactForm.error" class="bg-red-900/50 border border-red-500 rounded-lg p-4">
          <p class="text-red-300 text-sm">{{ contactForm.error }}</p>
        </div>
        
        <div v-if="contactForm.success" class="bg-green-900/50 border border-green-500 rounded-lg p-4">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <p class="text-green-300 font-medium">Thanks for your message! We'll get back to you within 24 hours.</p>
          </div>
        </div>
        
        <button
          type="submit"
          :disabled="contactForm.isSubmitting"
          class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          <span v-if="contactForm.isSubmitting" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
          {{ contactForm.isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Contact form state
const contactForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
  isSubmitting: false,
  error: '',
  success: false
})

const handleContactSubmit = async () => {
  contactForm.error = ''
  contactForm.success = false
  contactForm.isSubmitting = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    contactForm.success = true
    
    // Reset form
    contactForm.firstName = ''
    contactForm.lastName = ''
    contactForm.email = ''
    contactForm.subject = ''
    contactForm.message = ''
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      contactForm.success = false
    }, 5000)
  } catch (err) {
    contactForm.error = 'Something went wrong. Please try again.'
  } finally {
    contactForm.isSubmitting = false
  }
}
</script>