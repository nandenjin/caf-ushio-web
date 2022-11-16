import React, { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

type Prop = {
  trackingId: string
}

export const GTagManager: React.FC<Prop> = ({ trackingId }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => window.gtag.pageview(url)

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  })
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  )
}
