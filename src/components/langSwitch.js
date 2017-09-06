import React, { Component } from 'react'
import { Dropdown, Menu, Button } from 'antd'

const Item = Menu.Item

const ICon = ({ className, text }) => {
  return (
    <div>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={className} />
      </svg>
      <span style={{ marginLeft: '0.5em' }}>
        {text}
      </span>
    </div>
  )
}

const LANGS = ['en_us', 'zh_cn']

const LANGS_TEXT = {
  zh_cn: 'CHINESE',
  en_us: 'ENGLISH',
}

const LANGS_ICON = {
  zh_cn: '#icon-china',
  en_us: '#icon-english',
}

class Language extends Component {
  onSelect = ({ key }) => {
    this.props.changeLanguageTo(key)
  }

  render() {
    const { locale } = this.props
    const menu = (
      <Menu onSelect={this.onSelect} style={{ textAlign: 'center' }}>
        {LANGS.map(v => {
          return (
            <Item key={v}>
              <ICon className={LANGS_ICON[v]} text={LANGS_TEXT[v]} />
            </Item>
          )
        })}
      </Menu>
    )

    return (
      <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
        <Button style={{ border: 'none' }}>
          <ICon className={LANGS_ICON[locale]} text={LANGS_TEXT[locale]} />
        </Button>
      </Dropdown>
    )
  }
}

export default Language
