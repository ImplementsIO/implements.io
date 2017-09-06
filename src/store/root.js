import { create } from 'mobx-persist'
import * as stores from './'

class root {
  constructor() {
    // init
    const keys = Object.keys(stores)
    keys.forEach(key => {
      const _key = key.toLocaleLowerCase()
      const _fun = stores[key]
      this[_key] = new _fun(this)
    })

    // persist
    const { auth, app } = this
    const hydrate = create(
      {
        // storage: localforage,
        // debounce: 100,
      }
    )
    hydrate('auth', auth).then(() => console.log('auth hydrated'))
    hydrate('app', app).then(() => console.log('app hydrated'))
  }
}

export default root
