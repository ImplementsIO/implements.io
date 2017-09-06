import React, { Component } from 'react'
import { Dropdown, Menu, Button } from 'antd'

const Item = Menu.Item
const LANGS = {
  zh_cn: 'ENGLISH',
  en_us: 'CHINESE',
}

class Language extends Component {
  onSelect = ({ key }) => {
    const { changeLanguageTo } = this.props
    changeLanguageTo(key)
  }

  render() {
    const { locale } = this.props
    const menu = (
      <Menu onSelect={this.onSelect} style={{ textAlign: 'center' }}>
        {/* item */}
        <Item key="en_us">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-english" />
          </svg>
          <span style={{ marginLeft: '0.5em' }}>ENGLISH</span>
        </Item>

        {/* item */}
        <Item key="zh_cn">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-china" />
          </svg>
          <span style={{ marginLeft: '0.5em' }}>CHINESE</span>
        </Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>
          {LANGS[locale]}
        </Button>
      </Dropdown>
    )
  }
}

export default Language
