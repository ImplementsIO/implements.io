import File from './file'
import Home from './home'
import Compose from './compose'

export const routes = {
  docker_file: {
    path: '/docker/file',
    component: File,
    exactly: true,
  },
  docker_compose: {
    path: '/docker/compose',
    component: Compose,
    exactly: true,
  },
  docker_home: {
    path: '/docker',
    component: Home,
    exactly: true,
  },
}
