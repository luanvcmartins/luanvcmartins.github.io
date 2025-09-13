// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: {enabled: true},
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  modules: ['@nuxt/fonts'],
  ogImage: {enabled: true},

  content: {
    highlight: {
      theme: 'github-dark',
      langs: ['python']
    }
  }
});
