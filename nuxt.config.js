import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s - anjoazul',
    title: 'anjoazul',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    '~/plugins/axios',
    '~/plugins/mixins/validation.js',
  ],

  components: true,

  generate: {
    async routes() {
      let response = await axios.get('http://poptvnews.local/api/v1/public/all-posts-all-time')
      return response.data.map(post => ({
        route: `${post.category}/${post.slug}`,
        payload: post
      }))
    },
  },


//   generate: {
//     routes: () => {
//         return axios.get('http://poptvnews.local/api/v1/public/all-posts-all-time').then((res) => {
//             return res.data.map((post) => {
//                 return {
//                   // route: 'blog/' + post.slug,
//                     route: `${post.category}/${post.slug}`,
//                     payload: post
//                 }
//             })
//         })
//     }
// },



  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'http://poptvnews.local/api/v1'
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/auth/signin', method: 'POST', propertyName: 'meta.access_token', },
  //         logout: { url: '/auth/logout', method: 'POST' },
  //         user: { url: '/auth/me', method: 'get', propertyName: false }
  //       }
  //     }
  //   }
  // },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}