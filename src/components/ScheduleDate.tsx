/** @jsxImportSource @emotion/react */

import { getToday } from '@/lib/schedule'

type Prop = {
  date: Date | string
  format?: string
  children: React.ReactNode
}

export const ScheduleDate: React.FC<Prop> = ({ date, format, children }) => {
  const today = getToday()
  date = new Date(date)
  format = format || 'MM月dd日（DD）HH:mm'
  const comming = today <= date
  return (
    <span
      css={
        comming
          ? {}
          : {
              '::after': {
                content: `'終了'`,
                display: 'inline-block',
                background: '#888',
                color: '#fff',
                padding: '0 0.5em',
                lineHeight: '1.5em',
                fontWeight: 'bold',
                fontSize: '0.8em',
                marginLeft: '0.5em',
              },
            }
      }
    >
      <span
        css={{
          textDecoration: comming ? 'none' : 'line-through',
        }}
      >
        {children}
      </span>
    </span>
  )
}
