import React from 'react'
import moment from 'moment'
import { Timeline, Avatar, Card } from 'antd'

const COLORS = ['red', 'green', 'blue', 'pink']

const Message = ({ event }) => {
  const { actor, payload, created_at } = event
  const { commits } = payload
  const { avatar_url, display_login } = actor
  return (
    <Card
      title={moment(created_at).format('MM/DD/YYYY HH:mm:ss')}
      extra={
        <Avatar size="small" src={avatar_url}>
          {display_login}
        </Avatar>
      }
      bordered={false}
      bodyStyle={{ padding: '12px' }}
    >
      <ul
        style={{
          listStyle: 'disc',
          paddingLeft: '20px',
        }}
      >
        {commits.map(c => {
          const { sha, message } = c
          return (
            <li key={sha}>
              {message}
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

const Events = ({ events }) => {
  const _events = events && events.length > 0 ? events.peek() : null
  if (!_events) {
    return null
  }
  const pushEvents = _events.filter(v => {
    return v.type === 'PushEvent'
  })

  return (
    <Timeline>
      {pushEvents.map((e, k) => {
        const color = COLORS[k % 4]
        return (
          <Timeline.Item key={k} color={color}>
            <Message event={e} />
          </Timeline.Item>
        )
      })}
    </Timeline>
  )
}

export default Events
