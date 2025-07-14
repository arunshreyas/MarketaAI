<template>
  <div class="min-h-screen bg-gray-50 pt-16">
    <div class="max-w-4xl mx-auto p-4">
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

      <div class="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-[600px]">
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-6 space-y-4">
          <div v-for="message in messages" :key="message.id" class="flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
            <div class="max-w-xs lg:max-w-md px-4 py-2 rounded-lg" :class="message.isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'">
              <p class="text-sm whitespace-pre-wrap">{{ message.text }}</p>
              <span class="text-xs opacity-75 mt-1 block">{{ formatTime(message.timestamp) }}</span>
            </div>
          </div>
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

        <div class="border-t border-gray-200 p-4">
          <form @submit.prevent="sendMessage" class="flex space-x-4">
            <input v-model="newMessage" type="text" placeholder="Ask something..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" :disabled="isTyping" />
            <button type="submit" :disabled="!newMessage.trim() || isTyping" class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()
const newMessage = ref('')
const isTyping = ref(false)
const messages = ref([])
const messagesContainer = ref(null)

const formatTime = (timestamp) =>
  new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  const input = newMessage.value.trim()
  const userMsg = {
    id: Date.now(),
    text: input,
    isUser: true,
    timestamp: new Date()
  }

  messages.value.push(userMsg)
  newMessage.value = ''
  scrollToBottom()
  isTyping.value = true

  try {
    // ✅ Get authenticated user
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError || !user) throw new Error('User not signed in')

    const user_id = user.id

    // ✅ Insert prompt with user_id
    const { data: insertedPrompt, error: insertError } = await supabase
      .from('Conversations')
      .insert([{ Prompt: input, user_id }])
      .select('*') // Get inserted row (optional)

    if (insertError) throw insertError

    // ✅ Poll for AI response from Conversations table
    const maxTries = 20
    const delay = 2000
    let tries = 0

    while (tries < maxTries) {
      const { data: promptRow, error: fetchError } = await supabase
        .from('Conversations')
        .select('id, Response')
        .eq('user_id', user_id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (fetchError) throw fetchError

      if (promptRow?.Response) {
        messages.value.push({
          id: Date.now() + 1,
          text: promptRow.Response,
          isUser: false,
          timestamp: new Date()
        })
        isTyping.value = false
        scrollToBottom()
        return
      }

      await new Promise(resolve => setTimeout(resolve, delay))
      tries++
    }

    messages.value.push({
      id: Date.now() + 2,
      text: '⏳ AI is still thinking... Try again later.',
      isUser: false,
      timestamp: new Date()
    })
  } catch (err) {
    console.error('❌ Error sending message:', err)
    messages.value.push({
      id: Date.now() + 3,
      text: '❌ Error sending message. ' + err.message,
      isUser: false,
      timestamp: new Date()
    })
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
}

</script>