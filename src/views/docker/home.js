import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Table } from 'antd'

const CustomTable = ({ title, data, loading, langs }) => {
  const columns = [
    {
      title: langs['table_name'],
      dataIndex: 'name',
      key: 'name',
      width: 160,
      fixed: 'left',
    },
    {
      title: langs['table_path'],
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: langs['table_url'],
      dataIndex: 'html_url',
      key: 'html_url',
      render: text => {
        return (
          <a href={text} target="_blank">
            {text}
          </a>
        )
      },
    },
  ]

  return (
    <Table
      title={() => {
        return (
          <p>
            {langs[title]}
          </p>
        )
      }}
      style={{ marginBottom: '1em' }}
      scroll={{ x: 1200 }}
      pagination={false}
      loading={loading}
      rowKey="sha"
      dataSource={data}
      columns={columns}
    />
  )
}

@inject('docker', 'app')
@observer
class Home extends Component {
  render() {
    const {
      apps_loading,
      apps: dockerApps,
      runtimes_loading,
      runtimes: dockerRuntimes,
    } = this.props.docker

    const { langs } = this.props.app

    const apps = dockerApps.length > 0 ? dockerApps.peek() : []
    const runtimes = dockerRuntimes.length > 0 ? dockerRuntimes.peek() : []

    return (
      <div>
        <CustomTable
          {...{
            title: 'docker_runtime',
            data: runtimes,
            loading: runtimes_loading,
            langs,
          }}
        />

        <CustomTable
          {...{
            title: 'docker_app',
            data: apps,
            loading: apps_loading,
            langs,
          }}
        />
      </div>
    )
  }
}

export default Home
