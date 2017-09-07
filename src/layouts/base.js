import React, { Component } from 'react'
import { Layout } from 'antd'
import { Menu, Breadcrumb, Dropdown, Row, Col, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Dimensions from 'react-dimensions'

import logo from '~/logo.svg'
import styles from './base.module.css'

const { Header, Footer, Content } = Layout

const Container = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}

const NavMenu = ({ menus, width }) => {
  if (!menus) {
    return null
  }

  const largeSceen = (width || 0) > 780
  const mode = largeSceen ? 'horizontal' : ''
  const className = largeSceen
    ? styles.header_menu
    : styles.header_menu_dropdown
  const menu = (
    <Menu theme="light" mode={mode} className={className}>
      {menus.map((v, k) => {
        const { name, href } = v
        return (
          <Menu.Item key={k}>
            <Link to={href}>
              {name}
            </Link>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  return largeSceen
    ? menu
    : <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link">
          Home <Icon type="down" />
        </a>
      </Dropdown>
}

class Base extends Component {
  render() {
    const containerWidth = this.props.containerWidth
    const { children, menus, breadcrumbs, lang } = this.props
    const _breadcrumbs = breadcrumbs ? ['Home'].concat(breadcrumbs) : ['Home']

    return (
      <Layout className={styles.layout}>
        {/* header */}
        <Header className={styles.header}>
          <Container>
            <Row type="flex" justify="space-between" align="center">
              <Col span={12}>
                <div className={styles.logo}>
                  <img src={logo} alt="" />
                </div>
                <NavMenu menus={menus} width={containerWidth} />
              </Col>
              <Col span={12}>
                <Row type="flex" justify="end" align="center">
                  <Col>
                    {lang ? lang : null}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Header>

        {/* content */}
        <Content className={styles.content}>
          <Container>
            {breadcrumbs
              ? <Breadcrumb style={{ margin: '12px 0' }}>
                  {_breadcrumbs.map((v, k) => {
                    return (
                      <Breadcrumb.Item key={k}>
                        {v}
                      </Breadcrumb.Item>
                    )
                  })}
                </Breadcrumb>
              : null}
            <div className={styles.content_box}>
              {children}
            </div>
          </Container>
        </Content>

        {/* footer */}
        <Footer className={styles.footer}>
          <Container>
            <div>
              <iframe
                title="star"
                frameBorder="0"
                scrolling="0"
                width="160px"
                height="20px"
                src="https://ghbtns.com/github-btn.html?user=ImplementsIO&repo=docker-labs&type=star&count=true"
              />
            </div>
            <div>
              <p className={styles.footer_desc}>
                Copyright © 2017 . <br /> Maintained By{' '}
                <a
                  href="https://github.com/ImplementsIO"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ImplementsIO
                </a>{' '}
                .
              </p>
            </div>
          </Container>
        </Footer>
      </Layout>
    )
  }
}

export default Dimensions()(Base)
