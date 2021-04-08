
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - SpaceCore` : 'SpaceCore'
    },
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logotype.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap' }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/sass/bootstrap.sass',
    '~/assets/sass/main.sass'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/getTranslate.ts', '~/plugins/pluralization.ts', '~/plugins/toQueryString.ts'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
     baseURL: 'https://api.spacecore.me/v1/',
    //baseURL: 'http://localhost:4000/v1/',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isClient && !isDev) {
        config.optimization.splitChunks.maxSize = 250000
      }
    },
    babel: {
      compact: true,
    },
  }
}
