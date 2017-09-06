import { observable, computed, action, autorun } from 'mobx'
import { persist } from 'mobx-persist'
import { request } from '~/utils/'

class State {
  @persist
  @observable
  token = ''

  @persist('object')
  @observable
  info = {}

  @persist('map')
  @observable
  permission = new Map()

  constructor(root) {
    this.root = root
    autorun(() => {
      // console.log(this.token)
      // console.log(this.permission)
      // console.log(this.info)
    })
  }

  @computed
  get authed() {
    return this.token ? true : false
  }

  setToken(token) {
    this.token = token
  }

  setInfo(info) {
    this.info = info
  }

  setPermission(permissions) {
    permissions.forEach(ele => {
      const { codename } = ele
      this.permission.set(codename, ele)
    })
  }

  @action
  login = async user => {
    try {
      const { data: authData } = await request.post('/auth/', user)
      const { token } = authData
      const { data: infoData } = await request.get('/api/getUserDetail', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const { info, permission } = infoData
      this.setToken(token)
      this.setInfo(info)
      this.setPermission(permission)
    } catch (error) {
      console.log(error)
    }
  }

  @action
  logout = () => {
    this.token = ''
    this.info = {}
    this.permission.clear()
  }
}

export default State
