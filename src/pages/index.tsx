/** @jsxImportSource @emotion/react */

import React from 'react'
import { EventJsonLd } from 'next-seo'
import { Hero } from '@/components/Hero'
import { Intro } from '@/components/Intro'
import { Access } from '@/components/Access'
import { HeadIcon } from '@/components/HeadIcon'

const Home: React.FC = () => (
  <>
    <EventJsonLd
      name="稲田和巳 個展『潮』"
      startDate="2022-02-18T03:00:00.000Z"
      endDate="2022-04-08T10:00:00.000Z"
      location={{
        name: '公益財団法人 現代芸術振興財団 ギャラリー',
        sameAs: 'https://gendai-art.org/',
        address: {
          streetAddress: '六本木6-6-9 ピラミデビル4階',
          addressLocality: '港区',
          addressRegion: '東京都',
          postalCode: '1060032',
          addressCountry: 'JP',
        },
      }}
      performers={[
        {
          name: '稲田和巳',
          sameAs: 'https://www.nandenjin.com',
        },
      ]}
      organizer={{
        type: 'Organization',
        name: '公益財団法人 現代芸術振興財団',
        url: 'https://gendai-art.org',
      }}
      eventStatus="EventScheduled"
      eventAttendanceMode="OfflineEventAttendanceMode"
    />
    <HeadIcon />
    <Hero />
    <main>
      <Intro />
      <Access />
    </main>
  </>
)

export default Home
