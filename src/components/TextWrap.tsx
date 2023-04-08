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
      'h2, h3, h4, p, ul, ol, &>table, .text': {
        maxWidth: '47rem',
        margin: ['0.8rem 20px', '0.8em auto'],
        lineHeight: '1.8',
      },
      h2: {
        marginTop: '3rem',
        marginBottom: '2rem',
        fontSize: '1.5rem',
      },
      '&>img': {
        display: 'block',
        width: 'calc(47rem + 15rem)',
        height: 'auto',
        margin: '2rem auto',
        border: '1px solid rgba(0,0,0,.05)',
      },
      '&>ul, &>ol, &>table': {
        marginTop: '2rem',
        marginBottom: '2rem',
        '&>li': {
          margin: '0.5rem 0',
        },
      },
      '&>table': {
        display: 'block',
        borderCollapse: 'collapse',
        tr: {
          width: '100%',
        },
        'th, td': {
          textAlign: 'left',
          padding: '0.5rem 1rem',
          borderTop: '1px solid rgba(0,0,0,.5)',
          borderBottom: '1px solid rgba(0,0,0,.5)',
        },
      },
      '&>iframe': {
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
