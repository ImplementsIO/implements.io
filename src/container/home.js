import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'antd'

import { Base as Layout } from '~/layouts/'
import { LangSwitch, PushEvents, Markdown } from '~/components'

const about = `

> Collect Dockerfile(s) & docker-compose files for Development / Production environment.   

This project collects dockerfile(s) & docker-compose files, help those who ara not familiar with docker.

PR is welcome. 😀
  
这个项目的初衷是帮助更多的人快速 & 方便的使用 Docker .   
如果你有也兴趣，不妨提出你的建议，让我们一起为社区做一点力所能及的事情。

## Projects:

- ImplementsIO: [https://github.com/ImplementsIO](https://github.com/ImplementsIO)
- Docker-labs: [https://github.com/ImplementsIO/docker-labs](https://github.com/ImplementsIO/docker-labs)

*# dockerfile(s) & docker-compose files are collected in repo: Docker-labs*

## Contributing

> PR is appreciated !

## Discuss:

- issues: [https://github.com/ImplementsIO/docker-labs/issues](https://github.com/ImplementsIO/docker-labs/issues)
`

@inject('app', 'docker')
@observer
class Home extends Component {
  render() {
    const { location, app, docker } = this.props
    const { pathname } = location
    const breadcrumbs = pathname.split('/')
    const { menus: navMmenus, locale, changeLanguageTo } = app
    const menus = navMmenus.length > 0 ? navMmenus.peek() : []
    const { events } = docker
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
          <title>ImplementsIO</title>
        </Helmet>
        <div>
          <Row gutter={16}>
            <Col sm={16} xs={24}>
              <Markdown text={about} />
            </Col>
            <Col sm={8} xs={24}>
              <h2 style={{ margin: '1em 0' }}>Events</h2>
              <PushEvents events={events} />
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default Home
