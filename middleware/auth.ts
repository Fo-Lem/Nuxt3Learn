import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
// isAuthenticated() is an example method verifying if a user is authenticated
//   if (isAuthenticated() === false)
//   return navigateTo('/login')
})

// На странице
// definePageMeta({
//     middleware: 'auth'
//   })
