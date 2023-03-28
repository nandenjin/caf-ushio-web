/** @jsxImportSource @emotion/react */
import { getToday, isOpen, OpenStatus } from '@/lib/schedule'

type Props = {
  date?: Date
  target: 'gallery' | 'isong'
}

export const OpenDayBadge: React.FC<Props> = ({ date, target }) => {
  date = date ?? getToday()

  const state = isOpen(date)
  const ok =
    state === OpenStatus.CLOSED
      ? 'ended'
      : target === 'gallery'
      ? state === OpenStatus.OPEN
        ? 'open'
        : 'closed'
      : 'open'
  return (
    <span
      data-status={ok}
      css={{
        display: 'inline-block',
        padding: '0.2rem 0.5rem',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        color: '#fff',
        verticalAlign: 'middle',
        letterSpacing: '0.1em',
        '&[data-status="open"]': {
          background: '#06a',
        },
        '&[data-status="closed"]': {
          background: 'rgb(200, 0, 0)',
        },
        '&[data-status="ended"]': {
          background: 'rgba(0, 0, 0, .5)',
        },
      }}
    >
      {target === 'gallery'
        ? state === OpenStatus.OPEN
          ? '本日開催'
          : state === OpenStatus.ISONG_ONLY
          ? '本日休廊'
          : '会期終了'
        : state !== OpenStatus.CLOSED
        ? '稼働中'
        : '会期終了'}
    </span>
  )
}
