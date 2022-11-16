/** @jsxImportSource @emotion/react */

import React from 'react'
import UshioLogo from '@/assets/ushio.svg'
import CAFLogo from '@/assets/caf-logo.svg'
import Image from 'next/image'
import { mq } from './_app'

const separator = {
  '::before': {
    content: '""',
    display: 'block',
    width: '2rem',
    height: '0.1rem',
    backgroundColor: '#20C1F2',
    marginBottom: '2rem',
  },
}

const Home: React.FC = () => (
  <main
    css={mq({
      display: ['block', 'grid'],
      gridTemplateColumns: '5fr 6fr',
      margin: ['40px 30px', '40px 10vw'],
      minHeight: 'calc(100vh - 40px * 2)',
    })}
  >
    <div
      css={mq({
        position: ['static', 'fixed'],
        display: 'grid',
        gridTemplateRows: '1fr auto',
        height: ['auto', 'calc(100vh - 40px * 2)'],
        margin: ['0 0 40px', '0'],
      })}
    >
      <div
        css={mq({
          width: ['15rem', '20rem'],
          aspectRatio: '1',
          color: 'rgba(0,0,0,0)',
          userSelect: 'none',
          backgroundImage: `url(${UshioLogo.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        })}
      >
        潮
      </div>
      <div css={mq({ display: ['none', 'block'], color: '#20C1F2' })}>
        <p>Kazumi INADA ushio</p>
        <p>2023.2.18 - 4.8</p>
        <p>
          Contemporary Art Foundation Gallery
          <br />
          roppongi, tokyo
        </p>
      </div>
    </div>
    <div
      css={{
        gridColumn: '2',
        color: '#20C1F2',
        lineHeight: '1.8em',
      }}
    >
      <section>
        <h1 css={{ margin: '1rem 0 0.5rem', fontSize: '1rem' }}>
          稲田和巳『潮』
        </h1>
        <p>
          2023.2.18 (土) - 4.8 (土)
          <br />
          木・金 12:00 - 18:00
          <br />土 12:00 - 19:00
          <br />
          日-水 休廊
        </p>
        <p>現代芸術振興財団 ギャラリー</p>
        <p>
          東京都港区六本木6-6-9 ピラミデビル4F
          <br />
          東京メトロ六本木駅 3番出口より徒歩3分
        </p>
        <p>入場無料、予約不要</p>
      </section>
      <section css={{ marginTop: '3rem', ...separator }}>
        <p>
          『潮』は、社会統計データから生成された仮想の地形を用いて、地理空間に横たわる不可視な流れを考察しようとする取り組みです。空間的な地点を位置に、数値を高さに割り当てることで構築される面的な地形は、現実の地表の形状モデルが大気や水の動きを推測するのに役立つように、データが持つ要素の動きを把握することを可能にします。
        </p>
      </section>
      <section
        css={{
          marginTop: '2rem',
          ...separator,
        }}
      >
        <p>
          本展覧会は、公益財団法人現代芸術振興財団の行う「CAF (Contemporary Art
          Foundation)賞」の最優秀賞の副賞として行っております。CAF賞とは、学生の方々を対象に若手アーティスト育成を目的として2014年より毎年実施しているアートアワードです。最優秀賞受賞者には賞金100万円のほか、副賞として個展開催の機会を提供しております。
        </p>
      </section>
      <section
        css={{
          marginTop: '3rem',
          fontSize: '0.8rem',
          // color: '#abb',
        }}
      >
        <div
          css={{
            marginTop: '1rem',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '1.5rem',
            lineHeight: '1.6em',
          }}
        >
          <a
            href="https://gendai-art.org"
            target="_blank"
            rel="noopener noreferrer"
            css={{
              display: 'inline-block',
              position: 'relative',
              width: '4rem',
              height: '4rem',
            }}
          >
            <Image src={CAFLogo.src} fill alt="Contemporary Art Foundation" />
          </a>
          <div>
            <a
              href="https://gendai-art.org"
              target="_blank"
              rel="noopener noreferrer"
              css={{ color: 'inherit' }}
            >
              公益財団法人現代芸術振興財団
            </a>
            <br />
            TEL: 03-6441-3264（平日10:00-17:00）
            <br />
            contact@gendai-art.org
          </div>
        </div>
      </section>
      <section css={{ color: '#abb', fontSize: '0.8rem', marginTop: '3rem' }}>
        <a
          href="https://github.com/nandenjin/caf-ushio-web"
          target="_blank"
          rel="noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://img.shields.io/github/last-commit/nandenjin/caf-ushio-web?style=flat-square"
            height="20"
            alt="Contribute on GitHub"
            css={{
              filter:
                'grayscale(100%) sepia(20%) hue-rotate(140deg) opacity(80%)',
            }}
          />
        </a>
      </section>
    </div>
  </main>
)

export default Home
