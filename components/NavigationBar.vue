<template>
  <nav class="bg-white/80 backdrop-blur-sm border-b border-gray-100 fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Marketa<span class="text-blue-600">AI</span>
          </NuxtLink>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#features" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
          <a href="#about" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
          <a href="#contact" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink to="/login" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Sign In
          </NuxtLink>
          <NuxtLink to="/signup" class="btn-primary">
            Sign Up
          </NuxtLink>
        </div>
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-600 hover:text-gray-900">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#features" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
          <a href="#about" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
          
          <div class="border-t border-gray-200 pt-4">
            <NuxtLink to="/login" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Sign In
            </NuxtLink>
            <NuxtLink to="/signup" @click="mobileMenuOpen = false" class="block px-3 py-2 bg-blue-600 text-white rounded-lg mx-3 text-center font-medium">
              Sign Up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Close mobile menu when clicking outside or on route change
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>