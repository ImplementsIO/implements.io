import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './markdown.module.css'

const Markdown = ({ text }) => {
  return <ReactMarkdown source={text} className={styles.markdown} />
}

export default Markdown
