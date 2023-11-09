import { $fetch } from 'ofetch'
import { defineEventHandler } from '#imports'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const url = `https://fakestoreapi.com/products/${id}`

  return await $fetch(url, {
    method: 'GET',
  }).then((res) => {
    return res
  })
})
