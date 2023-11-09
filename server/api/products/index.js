import { $fetch } from 'ofetch'
import { defineEventHandler } from '#imports'

export default defineEventHandler(async () => {
  // const body = await readBody(event)
  // const query = getQuery(event)

  const url = 'https://fakestoreapi.com/products/'

  return await $fetch(url, {
    method: 'GET',
  }).then((res) => {
    return res
  })
})
