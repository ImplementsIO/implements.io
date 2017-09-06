import { observable, computed, action } from 'mobx'
import { request } from '~/utils/'

const tmp = {
  pass: '7b1d96130bd7ad7b7c96a',
  word: '6a0d6d67fdcc11b60d6',
}

const auth = {
  username: 'thonatos',
  password: `${tmp.pass}${tmp.word}`
}

class State {
  @observable apps = []

  @observable apps_loading = false

  @observable runtimes = []

  @observable runtimes_loading = false

  constructor(root) {
    this.root = root
    this.loadApps()
    this.loadRuntimes()
  }

  @action
  loadApps = async () => {
    this.apps_loading = true
    try {
      const {
        data,
      } = await request.get(
          '/repos/ImplementsIO/docker-labs/contents/dockerfile/apps',
          { auth }
        )
      this.apps = data
    } catch (error) {
    } finally {
      this.apps_loading = false
    }
  }

  @action
  loadRuntimes = async () => {
    this.runtimes_loading = true
    try {
      const {
        data,
      } = await request.get(
          '/repos/ImplementsIO/docker-labs/contents/dockerfile/runtime',
          { auth }
        )
      this.runtimes = data
    } catch (error) {
    } finally {
      this.runtimes_loading = false
    }
  }
}

export default State