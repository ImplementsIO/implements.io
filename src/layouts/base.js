import React from 'react'
import { Layout } from 'antd'
import { Menu, Breadcrumb, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
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

const Base = ({ children, menus, breadcrumbs, lang }) => {
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
              {menus
                ? <Menu
                    theme="light"
                    mode="horizontal"
                    className={styles.header_menu}
                  >
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
                : null}
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
            <p className={styles.footer_desc}>
              Copyright © 2017 . <br /> Maintained By MT-Libraries .
            </p>
          </div>
        </Container>
      </Footer>
    </Layout>
  )
}

export default Base
