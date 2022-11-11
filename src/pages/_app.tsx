import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        /* prettier-ignore */
        styles={css`/* A Modern CSS Reset */
 *,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role="list"],ol[role="list"]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media(prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}
 `}
      />
      <Global
        styles={{
          'html, body': {
            fontFamily: 'sans-serif',
            fontSize: '1.2vw',
          },
          p: {
            marginBottom: '0.5em',
          },
          'h1, h2, h3': {
            fontWeight: 'normal',
          },
          a: {
            color: '#09f',
            textDecoration: 'none',
          },
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
