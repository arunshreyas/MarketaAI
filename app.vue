<template>
  <div>
    <!-- Navigation -->
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
            <button class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>