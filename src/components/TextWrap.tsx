/** @jsxImportSource @emotion/react */

import { mq } from '@/pages/_app'

type Props = {
  children: React.ReactNode
}

export const TextWrap: React.FC<Props> = ({ children }) => (
  <div
    css={mq({
      padding: '.1px 0',
      margin: '3em auto',
      color: 'rgba(0,0,0,.8)',
      'h2, h3, h4, p': {
        maxWidth: '47rem',
        margin: ['0.8rem 20px', '0.8em auto'],
        lineHeight: '1.8',
      },
      h2: {
        marginTop: '5rem',
        marginBottom: '2rem',
        fontSize: '1.5rem',
      },
      img: {
        display: 'block',
        width: 'calc(47rem + 10rem)',
        height: 'auto',
        margin: '2rem auto',
        border: '1px solid rgba(0,0,0,.05)',
      },
      iframe: {
        display: 'block',
        width: ['100%', '47rem'],
        margin: '2rem auto',
        border: 'none',
      },
    })}
  >
    {children}
  </div>
)
