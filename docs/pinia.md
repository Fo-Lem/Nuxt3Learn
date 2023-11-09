# Основы Pinia

# state (data)
state — это реактивное состояние, которое может использоваться во всем приложении и будет соответствующим образом изменено при глобальном обновлении.
# getters (computed)
getters — используются для получения определенного значения состояния (которое также можно комбинировать с чем-то другим, например с текстовым или вычисленным значением).
# actions (methods)
actions — используются для изменения начального значения состояния + запросы к API.

```typescript
import { defineStore } from 'pinia'

export const useTest = defineStore({
  id: 'test',

  state: () => ({
    value: 1
  }),

  getters: {
    valueWithName: state => `Value is ${state.value}`
  },

  actions: {
    setNewValue(newValue: number) {
      this.value = newValue
    }
  }
})
```
Доступ к состоянию можно получить с помощью

```typescript

import { useTest } from "~/store/test";
const test = useTest()

```