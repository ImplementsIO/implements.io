import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Helmet } from 'react-helmet'

import { Base as Layout } from '~/layouts/'
import { LangSwitch } from '~/components'

import styles from './home.module.css'

@inject('app')
@observer
class Home extends Component {
  render() {
    const { location, app } = this.props
    const { pathname } = location
    const breadcrumbs = pathname.split('/')
    const { menus: navMmenus, locale, changeLanguageTo } = app
    const menus = navMmenus.length > 0 ? navMmenus.peek() : []

    return (
      <Layout
        {...{
          menus,
          breadcrumbs,
        }}
        lang={
          <LangSwitch locale={locale} changeLanguageTo={changeLanguageTo} />
        }
      >
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div>
          <div className={styles.post}>
            <h3>About:</h3>
            <p>
              这个项目的初衷是帮助更多的人快速 & 方便的使用 Docker .
              <br />
              如果你有也兴趣，不妨提出你的建议，让我们一起为社区做一点力所能及的事情。
            </p>
            <h3>Projects:</h3>
            <ul>
              <li>
                ImplementsIO:{' '}
                <a
                  href="https://github.com/ImplementsIO"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/ImplementsIO
                </a>
              </li>
              <li>
                Docker-labs:{' '}
                <a
                  href="https://github.com/ImplementsIO/docker-labs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/ImplementsIO/docker-labs
                </a>
              </li>
            </ul>
            <h3>Discuss:</h3>
            <ul>
              <li>
                issues:{' '}
                <a
                  href="https://github.com/ImplementsIO/docker-labs/issues"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/ImplementsIO/docker-labs/issues
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
