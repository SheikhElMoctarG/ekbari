// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/main.css'],
  modules: [
  ],
  server: {
    host: "0.0.0.0"
}
  
}
