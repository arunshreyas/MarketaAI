<template>
<navBar/>
  <div class="min-h-screen bg-white">
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

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your marketing needs. Start free and scale as you grow.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Starter Plan -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 fade-in-up stagger-1">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-gray-900">$29</span>
                <span class="text-gray-600">/month</span>
              </div>
              <p class="text-gray-600 mb-8">Perfect for small businesses and startups</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">10 campaigns per month</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Basic AI templates</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Email support</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Basic analytics</span>
              </li>
            </ul>
            
            <button class="w-full btn-secondary">
              Get Started
            </button>
          </div>

          <!-- Professional Plan (Featured) -->
          <div class="bg-blue-600 rounded-2xl shadow-xl border-2 border-blue-600 p-8 relative fade-in-up stagger-2">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <div class="text-center">
              <h3 class="text-2xl font-bold text-white mb-2">Professional</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-white">$79</span>
                <span class="text-blue-200">/month</span>
              </div>
              <p class="text-blue-200 mb-8">Ideal for growing marketing teams</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">50 campaigns per month</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Advanced AI templates</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Priority support</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Advanced analytics</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Team collaboration</span>
              </li>
            </ul>
            
            <button class="w-full bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>

          <!-- Enterprise Plan -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 fade-in-up stagger-3">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-gray-900">$199</span>
                <span class="text-gray-600">/month</span>
              </div>
              <p class="text-gray-600 mb-8">For large organizations and agencies</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Unlimited campaigns</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Custom AI training</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">24/7 phone support</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Custom integrations</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Dedicated account manager</span>
              </li>
            </ul>
            
            <button class="w-full btn-secondary">
              Contact Sales
            </button>
          </div>
        </div>

        <!-- Try Demo Section -->
        <div class="text-center mt-16 fade-in-up">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Ready to See Marketa AI in Action?
            </h3>
            <p class="text-gray-600 mb-6">
              Experience the power of AI-generated marketing campaigns with our interactive demo
            </p>
            <NuxtLink to="/chat" class="btn-primary inline-flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Try Demo
            </NuxtLink>
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
          <NuxtLink to="/chat" class="btn-secondary">
            Try Demo
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
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
              <li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#about" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Support</a></li>
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

<script setup>
// SEO
useHead({
  title: 'Marketa AI - Coming Soon | AI Marketing Campaign Generator',
  meta: [
    { 
      name: 'description', 
      content: 'Marketa AI is launching soon! The AI that creates full marketing campaigns - ads, emails, social posts - automatically. Join our waitlist for early access.' 
    }
  ]
})
</script>