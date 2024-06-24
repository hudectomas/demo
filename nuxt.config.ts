// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-delay-hydration',
    'nuxt-lazy-load',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: [400, 500, 600, 700],
        },
        display: 'swap',
        preload: true,
      },
    ],
    'vue3-carousel-nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
  },
  site: {
    url: 'http://chrenovacie.sk',
    name: 'CHrenovácie',
    description: 'Marek Chren - CHrenovácie, renovácia drevených podláh a parkiet',
    defaultLocale: 'sk',
  },
  delayHydration: {
    mode: 'init',
    debug: process.env.NODE_ENV === 'development',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Profesionálna renovácia drevených podláh a parkiet v Bratislave a okolí. Marek Chren - CHrenovácie.',
      },
      {
        name: 'keywords',
        content: 'renovácia drevených podláh, parkiet, Bratislava, CHrenovácie, Marek Chren, renovation, floor renovation, stairs renovatin, house clean',
      },
      { name: 'author', content: 'Marek Chren' },
      {
        property: 'og:title',
        content: 'Marek Chren - CHrenovácie, renovácia drevených podláh a parkiet',
      },
      {
        property: 'og:description',
        content: 'Profesionálna renovácia drevených podláh a parkiet v Bratislave a okolí. Marek Chren - CHrenovácie.',
      },
      { property: 'og:locale', content: 'sk_SK' },
      { property: 'og:site_name', content: 'CHrenovácie' },
      { property: 'og:url', content: 'http://chrenovacie.sk' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'http://chrenovacie.sk/logo.png',
      },
      {
        property: 'og:image:alt',
        content: 'Marek Chren - CHrenovácie, renovácia drevených podláh a parkiet',
      },
      { name: 'twitter:title', content: 'Marek Chren - CHrenovácie, renovácia drevených podláh a parkiet' },
      {
        name: 'twitter:description',
        content: 'Profesionálna renovácia drevených podláh a parkiet v Bratislave a okolí. Marek Chren - CHrenovácie.',
      },
      {
        name: 'twitter:image',
        content: 'http://chrenovacie.sk/logo.png',
      },
      { name: 'twitter:url', content: 'http://chrenovacie.sk' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@MarekChren' },
      { name: 'twitter:creator', content: '@MarekChren' },
    ],
    link: [
      { rel: 'canonical', href: 'http://chrenovacie.sk' },
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
    ],
  },
  image: {
    quality: 80,
    format: ['webp'],
  },
  lazyLoad: {
    images: true,
    videos: true,
    iframes: true,
  },
})
