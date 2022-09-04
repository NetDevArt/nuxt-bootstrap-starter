import Collapse from 'bootstrap/js/dist/collapse';
import Dropdown from 'bootstrap/js/dist/dropdown';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    // Provide dropdown everywhere to nuxt app
    nuxtApp.vueApp.provide('Dropdown', Dropdown);
    nuxtApp.vueApp.provide('Collapse', Collapse); // Used by navbar and other collapsible components
});
