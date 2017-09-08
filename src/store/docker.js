import { observable, action } from 'mobx'
import Github from 'github-api'
import { request } from '~/utils/'

const auth = {
  username: 'thonatos',
  password: ['7b1d96130bd7ad7b7c96a', '6a0d6d67fdcc11b60d6'].join(''),
}

const gh = new Github(auth)
const repo = gh.getRepo('ImplementsIO/docker-labs')

class State {
  @observable apps = []

  @observable apps_loading = false

  @observable runtimes = []

  @observable runtimes_loading = false

  @observable events = []

  constructor(root) {
    this.root = root
    this.loadEvents()
    this.loadApps()
    this.loadRuntimes()
  }

  @action
  loadEvents = async () => {
    try {
      const {
        data,
      } = await request.get('/repos/ImplementsIO/docker-labs/events', { auth })
      this.events = data
    } catch (error) { }
  }

  @action
  loadApps = async () => {
    this.apps_loading = true
    try {
      const {
        data,
      } = await repo.getContents(null, 'dockerfile/apps')
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
      } = await repo.getContents(null, 'dockerfile/runtime')
      this.runtimes = data
    } catch (error) {
    } finally {
      this.runtimes_loading = false
    }
  }
}

export default State
