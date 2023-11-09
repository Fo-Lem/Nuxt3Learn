# Pages 
Тут хранятся все страницы сайта. 

Роутинг и маршрутизация.
Маршрутизация Nuxt основана на vue-router и генерирует маршруты для каждого компонента, созданного в каталоге , на основе их имени файла .pages/

Структура катологов:
| pages/
---| about.vue
---| index.vue
---| posts/
-----| [id].vue   ---Параметр id в маршруте

Итоговый файл маршрутов:

{
  "routes": [
    {
      "path": "/about",
      "component": "pages/about.vue"
    },
    {
      "path": "/",
      "component": "pages/index.vue"
    },
    {
      "path": "/posts/:id",
      "component": "pages/posts/[id].vue"
    }
  ]
}

```