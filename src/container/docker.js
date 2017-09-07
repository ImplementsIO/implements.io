import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Base as Layout } from '~/layouts/'
import { LangSwitch } from '~/components'
import { docker } from '~/views/routes'

const childRoutes = Object.values(docker)

@inject('app')
@observer
class Docker extends Component {
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
          <title>Docker - ImplementsIO</title>
        </Helmet>
        <Switch>
          {childRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exactly={route.exactly}
              />
            )
          })}
        </Switch>
      </Layout>
    )
  }
}

export default Docker
