import { observable, computed, action } from 'mobx'
import { persist } from 'mobx-persist'

import { zh_CN, en_US } from '~/locales/'
import antd_en_US from 'antd/lib/locale-provider/en_US'

class State {
  @persist
  @observable
  locale = 'en_us'

  @observable
  menus = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Docker',
      href: '/docker',
    },
    {
      name: 'Tutorials',
      href: '#',
    },    
    {
      name: 'Projects',
      href: '#',
    },        
  ]

  constructor(root) {
    this.root = root
  }

  @computed
  get langs() {
    return this.locale === 'zh_cn' ? zh_CN : en_US
  }

  @computed
  get langsAntd() {
    return this.locale === 'zh_cn' ? null : antd_en_US
  }

  @action
  changeLanguageTo = lang => {
    this.locale = lang
  }
}

export default State
