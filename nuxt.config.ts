// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',
    css: ['/assets/main.css'],
    typescript: {
        shim: false
    },
    ssr: true,
    modules: ['@nuxtjs/tailwindcss']
})
    