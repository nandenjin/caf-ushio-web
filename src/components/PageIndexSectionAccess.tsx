/** @jsxImportSource @emotion/react */
import dynamic from 'next/dynamic'
import { OpenDayBadge } from './OpenDayBadge'
import { OpenDaysCalendar } from './OpenDaysCalendar'
import { TextWrap } from './TextWrap'

export const PageIndexSectionAccess: React.FC = () => (
  <section
    css={{
      margin: '4rem auto auto',
      '&>*:last-child': {
        marginBottom: '4rem',
      },
    }}
  >
    <TextWrap>
      <h2>来場案内</h2>
      <p>会期：2023年2月18日（土） - 4月8日（土）</p>
      <OpenDaysCalendar
        className="text"
        style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}
      />
    </TextWrap>
    <TextWrap>
      <h3>現代芸術振興財団 ギャラリー</h3>
      <p>
        <OpenDayBadge target="gallery" />
      </p>
      <p>
        2023年2月18日（土） - 4月8日（土）
        <br />
        木・金 12:00-18:00／土 12:00-19:00／日-水・祝日 休廊
      </p>
      <p>
        <a
          href="https://goo.gl/maps/PwwMK7MjE4aeqYyt7"
          target="_blank"
          rel="noreferrer"
        >
          東京都港区六本木6丁目6-9 ピラミデビル4F
          <br />
          六本木駅3番出口から徒歩3分
        </a>
      </p>
    </TextWrap>
    <TextWrap>
      <h3>ラピロス六本木 ショーウィンドウ</h3>
      <p>
        <OpenDayBadge target="isong" />
      </p>
      <p>
        2023年2月18日（土） - 4月8日（土）
        <br />
        無休
      </p>
      <p>
        <a
          href="https://goo.gl/maps/ahgpR3BR21YuXRGRA"
          target="_blank"
          rel="noreferrer"
        >
          六本木駅3番出口すぐ
        </a>
      </p>
    </TextWrap>
    <TextWrap>
      <AccessMap />
    </TextWrap>
  </section>
)

const AccessMap = dynamic(
  import('./AccessMap').then((m) => m.AccessMap),
  {
    ssr: false,
    loading: () => (
      <div style={{ textAlign: 'center', paddingTop: 20 }}>Chargement…</div>
    ),
  }
)
