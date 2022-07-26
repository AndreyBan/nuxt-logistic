export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Портал | Логистика',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  static: {
    prefix: false
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' }
        }
      }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-select/dist/vue-select.css',
    '@/assets/scss/style.scss'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vSelect.js' },
    { src: '~/plugins/vueInputMask.js' },
    { src: '~/plugins/paginate.js' }
  ],
  styleResources: {
    scss: ['@/assets/scss/variables.scss'],
    hoistUseStatements: true
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/style-resources'
    // '@nuxtjs/eslint-module'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@nuxtjs/auth-next'
  ],
  serverMiddleware: [
    {
      path: 'api', handler: '~/serverMiddleware/api'
    }
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000/api'
  },
  ssr: false,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    },
    extend (config, { isClient }) {
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}
