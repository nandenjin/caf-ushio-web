import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import facepaint from 'facepaint'
import { DefaultSeo } from 'next-seo'
import { GTagManager } from '@/components/GTagManager'
import { useRouter } from 'next/router'
import { Zen_Kaku_Gothic_New } from '@next/font/google'

const fontZenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['500'],
  subsets: ['japanese'],
  display: 'swap',
  fallback: [
    '-apple-system',
    'Yu Gothic Medium',
    'YuGothic',
    'Meiryo',
    'sans-serif',
  ],
})

export const mq = facepaint([
  '@media(min-width: 720px)',
  '@media(min-width: 1120px)',
])

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Global
        /* prettier-ignore */
        styles={css`/* A Modern CSS Reset */
 *,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role="list"],ol[role="list"]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media(prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}
 `}
      />
      <Global
        styles={mq({
          'html, body': {
            fontFamily: `'Helvetica Neue', 'Arial', ${fontZenKakuGothicNew.style.fontFamily}`,
            fontSize: ['14px', '1.2vw'],
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
        })}
      />
      {process.env.GTAG_TRACKING_ID ? (
        <GTagManager trackingId={process.env.GTAG_TRACKING_ID} />
      ) : (
        ''
      )}
      <DefaultSeo
        defaultTitle="稲田和巳『潮』| 公益財団法人 現代芸術振興財団"
        canonical={process.env.baseUrl + router.asPath}
        openGraph={{
          type: 'website',
          url: 'https://gendai-art.org/caf/inada/',
          site_name: '稲田和巳『潮』/ 公益財団法人 現代芸術振興財団',
          description:
            '稲田和巳 個展『潮』公式サイト。2022/2/18 - 4/8、現代芸術振興財団ギャラリー（六本木）で開催。',
          images: [
            {
              url: process.env.baseUrl + '/thumbnail.png',
            },
          ],
        }}
        twitter={{
          handle: '@nandenjin',
          site: '@gendai_art_caf',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: process.env.baseUrl + '/favicon.ico',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
