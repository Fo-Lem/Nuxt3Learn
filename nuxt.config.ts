import process from 'node:process'

export default defineNuxtConfig({

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-vitest',
    '@vee-validate/nuxt',
    '@pinia/nuxt',

  ],

  stylelint: {
    lintOnStart: false,
  },

  eslint: {
    lintOnStart: false,
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: false,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },

  },
  css: ['~/assets/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/helpers/index.scss" as *;',
        },
      },
    },
  },

  app: {
    // Все meta-теги в этом объекте будут добавлены в head.
    head: {
      title: 'Nuxt3Learn',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Everything about Nuxt 3' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],

    },

  },
  // Переменные окружения
  runtimeConfig: {
    // Доступны только на стороне сервер
    apiKey: process.env.API_KEY,
    // Доступны и на стороне клиента
    public: {
      apiBase: process.env.API_BASE,
    },
  },

  // Это полностью отключит автоматический импорт,
  // но по-прежнему можно использовать явный импорт из #imports.
  imports: {
    autoImport: false,
  },

  // Чтобы отключить автоматический импорт компонентов из вашего
  // собственного ~/components каталога, вы можете установить
  // components.dirs пустой массив
  // (хотя учтите, что это не повлияет на компоненты, добавляемые модулями).
  components: {
    dirs: [],
  },

})
