import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={{
          'html, body': {
            margin: 0,
            padding: 0,
            fontFamily: 'sans-serif',
            fontSize: '14px',
          },
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
