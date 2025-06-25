// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700]
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Marketa AI - Coming Soon | AI Marketing Campaign Generator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Marketa AI is launching soon! The AI that creates full marketing campaigns - ads, emails, social posts - automatically. Join our waitlist for early access.' 
        },
        { property: 'og:title', content: 'Marketa AI - Coming Soon' },
        { property: 'og:description', content: 'The AI that creates full marketing campaigns automatically. Join our waitlist!' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Marketa AI - Coming Soon' },
        { name: 'twitter:description', content: 'The AI that creates full marketing campaigns automatically. Join our waitlist!' }
      ]
    }
  }
})