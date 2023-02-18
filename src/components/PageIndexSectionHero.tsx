/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import HeroBg from '@/assets/ushio-roppongi_pilot_230206_2.jpg'
import UshioLogo from '@/assets/ushio.svg'
import KazumiInada from '@/assets/kazumi-inada.svg'
import { mq } from '@/pages/_app'

export const PageIndexSectionHero = () => (
  <header
    css={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: '#888',
    }}
  >
    <Image
      src={HeroBg}
      alt=""
      css={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        pointerEvents: 'none',
      }}
    />
    <div
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
      }}
    ></div>
    <div
      css={mq({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '90%',
        maxWidth: '1200px',
        height: ['30vw', '15vw'],
        maxHeight: '200px',
        margin: 'auto ',
        display: 'grid',
        gridTemplateColumns: ['1fr', '6fr 2fr'],
        gap: '10%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      })}
    >
      <Image
        src={KazumiInada}
        alt="稲田和巳"
        css={mq({
          transform: ['none', 'translateY(25%)'],
          width: 'auto',
          height: ['100%', 'auto'],
        })}
      />
      <Image
        src={UshioLogo}
        alt="潮"
        css={{ width: ['auto', '27vw'], height: ['100%', 'auto'] }}
      />
    </div>
    <div
      css={mq({
        position: 'absolute',
        bottom: '50px',
        right: 0,
        left: 0,
        width: '95vw',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gap: '1rem',
        color: '#fff',
        fontSize: ['14px', '17px'],
      })}
    >
      <div>
        <div>現代芸術振興財団 ギャラリー（東京・六本木）</div>
        <div>2023.2.18 - 4.8 木・金 12:00-18:00 / 土 12:00-19:00</div>
      </div>
      <div css={mq({ textAlign: ['left', 'right'] })}>
        <div>ラピロス六本木 ショーウィンドウ</div>
        <div>2023.2.18 - 4.8 無休</div>
      </div>
    </div>
  </header>
)
