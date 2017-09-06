import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styles from './noMatch.module.css'

class NotMatch extends Component {
  render() {
    const { location } = this.props
    const { pathname } = location
    const code = 404
    const msg = 'Page Not Found'
    return (
      <div className={styles.wrap}>
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <div className={styles.info}>
          <h1>
            {code}
          </h1>
          <div className={styles.detail}>
            <p className={styles.stack}>
              Path: {pathname}
            </p>
            <p className={styles.stack}>
              Message: {msg}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NotMatch
