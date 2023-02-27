/** @jsxImportSource @emotion/react */

import { getToday, isOpen, OpenStatus } from '@/lib/schedule'
import { mq } from '@/pages/_app'

const days = '日月火水木金土'.split('')

type Prop = React.HTMLAttributes<HTMLDivElement>

export const OpenDaysCalendar: React.FC<Prop> = (props) => {
  const today = getToday()
  const sundayOfThisWeek = new Date(today)
  sundayOfThisWeek.setDate(today.getDate() - today.getDay())
  const numWeeksToShow = 2

  const dates: Date[][] = []
  for (let i = 0; i < numWeeksToShow; i++) {
    dates[i] = []
    for (let j = 0; j < days.length; j++) {
      const t = new Date(sundayOfThisWeek)
      t.setDate(sundayOfThisWeek.getDate() + i * 7 + j)
      dates[i][j] = t
    }
  }

  return (
    <div {...props} css={{ overflowX: 'auto' }}>
      <table
        css={mq({
          width: '100%',
          background: '#fff',
          borderCollapse: 'collapse',
          thead: {
            background: 'rgba(0,0,0,.05)',
          },
          'td, th': {
            textAlign: 'center',
            padding: '0.5rem 1rem',
            border: '1px solid rgba(0,0,0,.05)',
          },
          'th[data-day="0"]': {
            background: 'rgba(255,0,0,.1)',
          },
          'th[data-day="6"]': {
            background: 'rgba(0, 174, 239, .1)',
          },
          'td[data-today]': {
            border: '2px solid rgba(0, 0, 0)',
            '.date': {
              fontWeight: 'bold',
            },
          },
          '.icon': {
            display: 'block',
            textIndent: -9999,
            overflow: 'hidden',
            fontSize: '1.7rem',
            width: ['1rem', '1.5rem'],
            height: ['1rem', '1.5rem'],
            margin: '0.5rem auto',
          },
          [`td[data-open-status="${OpenStatus.OPEN}"]`]: {
            '.icon': {
              background: 'rgba(0, 174, 239, 1)',
              borderRadius: '50%',
            },
          },
          [`td[data-open-status="${OpenStatus.ISONG_ONLY}"]`]: {
            '.icon': {
              background: 'rgba(0, 174, 239, 0.3)',
            },
          },
          [`td[data-open-status="${OpenStatus.CLOSED}"]`]: {
            '&::after': {
              content: '"-"',
              display: 'block',
              width: ['1rem', '1.5rem'],
              height: ['1rem', '1.5rem'],
              margin: '0.5rem auto',
              color: 'rgba(0,0,0,.3)',
            },
          },
        })}
      >
        <thead>
          <tr>
            {days.map((day, i) => (
              <th key={day} data-day={i}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={day.toString()}
                  data-day={j}
                  data-today={day.getTime() === today.getTime() ? true : null}
                  data-open-status={isOpen(day)}
                >
                  <div className="date">{day.getDate()}</div>
                  {isOpen(day) === OpenStatus.CLOSED ? (
                    ''
                  ) : (
                    <div className="icon">
                      {isOpen(day) === OpenStatus.OPEN
                        ? '開廊'
                        : 'ショーウィンドウのみ稼働'}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ul
        css={{
          listStyle: 'none',
          padding: 0,
          fontSize: '0.9rem',
          li: { display: 'inline-block', marginRight: '1em' },
          '.icon': {
            display: 'inline-block',
            width: '1em',
            height: '1em',
            verticalAlign: 'middle',
            marginRight: '0.5em',
          },
        }}
      >
        <li>
          <span
            className="icon"
            style={{ background: 'rgba(0, 174, 239, 1)', borderRadius: '50%' }}
          ></span>{' '}
          開廊
        </li>
        <li>
          <span
            className="icon"
            style={{ background: 'rgba(0, 174, 239, 0.3)' }}
          ></span>{' '}
          ショーウィンドウのみ稼働
        </li>
      </ul>
    </div>
  )
}
