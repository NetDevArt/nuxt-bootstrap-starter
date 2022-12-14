import { defineNuxtConfig } from "nuxt/config"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Site title",
    },
    typescript: {
        strict: true,
    },
    css: ["~/assets/scss/theme.scss"],
})
