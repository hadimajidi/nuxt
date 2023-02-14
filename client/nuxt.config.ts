export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: [
      ['@tailvue/nuxt'],
      ['@sidebase/nuxt-auth', {
        origin: 'http://localhost:7000',
        basePath: '/api',
        enableGlobalAppMiddleware: true
      }],
      ['nuxt-icons'],
      ['@nuxtjs/color-mode', {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        // hid: 'nuxt-color-mode-script',
        // globalName: '__NUXT_COLOR_MODE__',
        // componentName: 'ColorScheme',
        // classPrefix: '',
        // classSuffix: '-mode',
        classSuffix: '',
        // storageKey: 'nuxt-color-mode'
      }],
      'nuxt-windicss',
      ['@nuxtjs/i18n', {
        strategy: "prefix",
        defaultLocale: "en",
        lazy: true,
        langDir: "lang",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'lang_cookie_name',
        },
        locales: [{
          code: "en",
          name: "English",
          file: "en.json"
        },
        {
          code: "nl",
          name: "Nederlands",
          file: "nl.json"
        },
        {
          code: "fr",
          name: "Français",
          file: "fr.json"
        }
        ],
      }]
    ],
    // nitro: {
    //   devProxy: {
    //     '/api': {
    //       target: "http://localhost:7000",
    //       changeOrigin: true
    //     }
    //   },
    // },
    runtimeConfig: {
      public: {
        webURL: 'http://localhost:6500',
        apiURL: 'http://localhost:7000',
      },
    },
  })