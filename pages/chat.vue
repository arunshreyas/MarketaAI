<template>
  <div class="min-h-screen bg-gray-50 pt-16">
    <div class="max-w-4xl mx-auto p-4">
      <!-- Chat Header -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-6">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Marketa AI Assistant</h1>
            <p class="text-gray-600">Your AI-powered marketing campaign generator</p>
          </div>
        </div>
      </div>

      <!-- Chat Container -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-[600px]">
        <!-- Messages Area -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-6 space-y-4">
          <div v-for="message in messages" :key="message.id" class="flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
            <div class="max-w-xs lg:max-w-md px-4 py-2 rounded-lg" :class="message.isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'">
              <p class="text-sm">{{ message.text }}</p>
              <span class="text-xs opacity-75 mt-1 block">{{ formatTime(message.timestamp) }}</span>
            </div>
          </div>
          
          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t border-gray-200 p-4">
          <form @submit.prevent="sendMessage" class="flex space-x-4">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type your marketing question or campaign idea..."
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              :disabled="isTyping"
            />
            <button
              type="submit"
              :disabled="!newMessage.trim() || isTyping"
              class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          @click="sendQuickMessage('Create a social media campaign for a new product launch')"
          class="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-left transition-colors duration-200"
        >
          <div class="text-sm font-medium text-gray-900 mb-1">📱 Social Media Campaign</div>
          <div class="text-xs text-gray-600">Generate posts for product launch</div>
        </button>
        
        <button
          @click="sendQuickMessage('Write an email marketing sequence for customer retention')"
          class="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-left transition-colors duration-200"
        >
          <div class="text-sm font-medium text-gray-900 mb-1">📧 Email Campaign</div>
          <div class="text-xs text-gray-600">Create retention email sequence</div>
        </button>
        
        <button
          @click="sendQuickMessage('Generate ad copy for Google Ads campaign')"
          class="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-left transition-colors duration-200"
        >
          <div class="text-sm font-medium text-gray-900 mb-1">🎯 Ad Copy</div>
          <div class="text-xs text-gray-600">Create Google Ads copy</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

// Protect this route - require authentication
definePageMeta({
  middleware: 'auth'
})

const user = useSupabaseUser()
const messagesContainer = ref(null)
const newMessage = ref('')
const isTyping = ref(false)

const messages = ref([
  {
    id: 1,
    text: `Welcome to Marketa AI! I'm your AI marketing assistant. I can help you create comprehensive marketing campaigns including social media posts, email sequences, ad copy, and more. What would you like to work on today?`,
    isUser: false,
    timestamp: new Date()
  }
])

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  // Add user message
  const userMessage = {
    id: Date.now(),
    text: newMessage.value,
    isUser: true,
    timestamp: new Date()
  }
  
  messages.value.push(userMessage)
  const messageText = newMessage.value
  newMessage.value = ''
  
  scrollToBottom()
  
  // Show typing indicator
  isTyping.value = true
  
  // Simulate AI response
  setTimeout(() => {
    const aiResponse = generateAIResponse(messageText)
    messages.value.push({
      id: Date.now() + 1,
      text: aiResponse,
      isUser: false,
      timestamp: new Date()
    })
    
    isTyping.value = false
    scrollToBottom()
  }, 1500 + Math.random() * 1000) // Random delay between 1.5-2.5 seconds
}

const sendQuickMessage = (message) => {
  newMessage.value = message
  sendMessage()
}

const generateAIResponse = (userMessage) => {
  const responses = {
    social: [
      "I'll help you create a social media campaign! Here's a comprehensive strategy:\n\n📱 Platform Strategy:\n• Instagram: Visual product showcases with Stories and Reels\n• Facebook: Targeted ads with detailed product information\n• Twitter: Real-time engagement and customer support\n• LinkedIn: B2B networking and thought leadership\n\n📝 Content Ideas:\n• Behind-the-scenes product development\n• User-generated content campaigns\n• Influencer partnerships\n• Interactive polls and Q&As\n\nWould you like me to create specific post copy for any of these platforms?",
      
      "Great choice! Social media campaigns are powerful for brand awareness. Here's what I recommend:\n\n🎯 Campaign Structure:\n• Pre-launch teasers (1 week)\n• Launch day content (24-48 hours)\n• Post-launch follow-up (ongoing)\n\n📊 Key Metrics to Track:\n• Engagement rate\n• Reach and impressions\n• Click-through rate\n• Conversion rate\n\nLet me know your target audience and I'll create specific content for each platform!"
    ],
    
    email: [
      "Perfect! Email marketing has excellent ROI. Here's a customer retention sequence:\n\n📧 5-Email Retention Series:\n\n1. Welcome Back (Day 1)\n   Subject: \"We missed you! Here's 15% off your next order\"\n\n2. Product Recommendations (Day 3)\n   Subject: \"Picked just for you based on your last purchase\"\n\n3. Social Proof (Day 7)\n   Subject: \"See what other customers are loving\"\n\n4. Educational Content (Day 10)\n   Subject: \"Pro tips to get the most from your purchase\"\n\n5. Exclusive Offer (Day 14)\n   Subject: \"VIP access: New arrivals before anyone else\"\n\nWould you like me to write the full copy for any of these emails?",
      
      "Email sequences are fantastic for nurturing relationships! Here's a retention-focused approach:\n\n💡 Strategy Overview:\n• Segment by purchase history\n• Personalize based on behavior\n• Include value-driven content\n• Use progressive profiling\n\n📈 Expected Results:\n• 25-30% open rates\n• 3-5% click-through rates\n• 15-20% increase in repeat purchases\n\nWhat's your current email performance? I can help optimize based on your metrics."
    ],
    
    ads: [
      "Excellent! Google Ads copy is crucial for conversions. Here are some high-performing ad variations:\n\n🎯 Ad Copy Set 1 (Problem-Focused):\nHeadline: \"Struggling with [Problem]? We Have the Solution\"\nDescription: \"Join 10,000+ satisfied customers who solved [problem] with our proven system. Free trial available.\"\n\n🎯 Ad Copy Set 2 (Benefit-Focused):\nHeadline: \"Get [Benefit] in Just [Timeframe]\"\nDescription: \"Proven results. Money-back guarantee. See why [Company] is the #1 choice for [solution].\"\n\n🎯 Ad Copy Set 3 (Urgency-Focused):\nHeadline: \"Limited Time: [Offer] Ends Soon\"\nDescription: \"Don't miss out! [X]% off for new customers. Join thousands who've already transformed their [area].\"\n\nWhat's your product/service? I'll create targeted copy specifically for your offering!",
      
      "Google Ads copy needs to be compelling and action-oriented! Here's my framework:\n\n✅ Headline Best Practices:\n• Include target keywords\n• Address pain points\n• Highlight unique value\n• Create urgency when appropriate\n\n✅ Description Guidelines:\n• Lead with benefits\n• Include social proof\n• Clear call-to-action\n• Mention guarantees/offers\n\n📊 Testing Strategy:\n• A/B test headlines\n• Rotate descriptions\n• Monitor Quality Score\n• Optimize for conversions\n\nTell me about your target audience and I'll craft specific ad copy!"
    ]
  }
  
  const lowerMessage = userMessage.toLowerCase()
  
  if (lowerMessage.includes('social') || lowerMessage.includes('instagram') || lowerMessage.includes('facebook') || lowerMessage.includes('twitter')) {
    return responses.social[Math.floor(Math.random() * responses.social.length)]
  } else if (lowerMessage.includes('email') || lowerMessage.includes('retention') || lowerMessage.includes('sequence')) {
    return responses.email[Math.floor(Math.random() * responses.email.length)]
  } else if (lowerMessage.includes('ad') || lowerMessage.includes('google') || lowerMessage.includes('copy')) {
    return responses.ads[Math.floor(Math.random() * responses.ads.length)]
  } else {
    // General responses
    const generalResponses = [
      "That's an interesting marketing challenge! To provide the best recommendations, could you tell me more about:\n\n• Your target audience\n• Your industry/product\n• Your current marketing goals\n• Your budget range\n\nWith these details, I can create a customized marketing strategy for you!",
      
      "I'd love to help you with that! Marketing success depends on understanding your specific situation. Here are some questions to get us started:\n\n🎯 What's your primary goal? (Brand awareness, lead generation, sales, etc.)\n👥 Who is your target audience?\n💰 What's your marketing budget?\n📊 What channels are you currently using?\n\nOnce I know more, I can provide detailed, actionable recommendations!",
      
      "Great question! I can help you develop a comprehensive marketing strategy. To give you the most relevant advice, I'd like to understand:\n\n• Your business type and industry\n• Your current marketing challenges\n• Your success metrics\n• Your timeline and resources\n\nFeel free to share any specific areas you'd like to focus on - whether it's content creation, paid advertising, email marketing, or social media strategy!"
    ]
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)]
  }
}

onMounted(() => {
  scrollToBottom()
})

// SEO
useHead({
  title: 'Chat - Marketa AI',
  meta: [
    { name: 'description', content: 'Chat with Marketa AI to create comprehensive marketing campaigns powered by artificial intelligence.' }
  ]
})
</script>