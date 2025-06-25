<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">
              Marketa<span class="text-blue-600">AI</span>
            </h1>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#features" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
            <a href="#about" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
            <a href="#contact" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
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

    <!-- Hero Section -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div class="fade-in-up">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Coming Soon
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI That Creates
            <span class="gradient-text block">Full Marketing Campaigns</span>
          </h1>
          
          <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Marketa AI automatically generates comprehensive marketing campaigns including ads, emails, and social media posts. Get ready to transform your marketing workflow.
          </p>

          <!-- Email Signup -->
          <WaitlistForm />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Marketing Success
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            One AI platform that handles all your marketing campaign needs
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="AI-Powered Ads"
            description="Generate high-converting ad copy and creatives for all major platforms automatically."
            icon="🎯"
            delay="stagger-1"
          />
          <FeatureCard 
            title="Email Campaigns"
            description="Create personalized email sequences that engage and convert your audience."
            icon="📧"
            delay="stagger-2"
          />
          <FeatureCard 
            title="Social Media Posts"
            description="Generate engaging social content optimized for each platform's best practices."
            icon="📱"
            delay="stagger-3"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            About Marketa AI
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed mb-8">
            We're building the future of marketing automation. Marketa AI combines advanced artificial intelligence with deep marketing expertise to create campaigns that actually convert.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="fade-in-up">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              To democratize high-quality marketing by making professional-grade campaign creation accessible to businesses of all sizes. We believe every company deserves marketing that works.
            </p>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Why Marketa AI?</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Save 90% of time on campaign creation
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Consistent brand voice across all channels
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Data-driven optimization for better results
              </li>
            </ul>
          </div>
          <div class="fade-in-up stagger-2">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">Launching Q1 2025</h4>
                <p class="text-gray-600">
                  We're putting the finishing touches on Marketa AI. Join our waitlist to be among the first to experience the future of marketing automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center fade-in-up">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Marketing?
        </h2>
        <p class="text-xl text-gray-600 mb-12">
          Join thousands of marketers waiting for early access to Marketa AI
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="btn-primary">
            Join the Waitlist
          </button>
          <button class="btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4">
              Marketa<span class="text-blue-400">AI</span>
            </h3>
            <p class="text-gray-400 mb-6 max-w-md">
              The future of AI-powered marketing campaigns. Create comprehensive marketing strategies with the power of artificial intelligence.
            </p>
            <div class="flex space-x-4">
              <SocialIcon 
                href="https://instagram.com" 
                icon="instagram"
                label="Instagram"
              />
              <SocialIcon 
                href="https://youtube.com" 
                icon="youtube"
                label="YouTube"
              />
              <SocialIcon 
                href="https://linkedin.com" 
                icon="linkedin"
                label="LinkedIn"
              />
              <SocialIcon 
                href="https://facebook.com" 
                icon="facebook"
                label="Facebook"
              />
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#features" class="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#about" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2025 Marketa AI. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>