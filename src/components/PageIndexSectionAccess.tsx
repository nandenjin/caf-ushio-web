/** @jsxImportSource @emotion/react */

import { TextWrap } from './TextWrap'

export const PageIndexSectionAccess: React.FC = () => (
  <section
    css={{
      margin: '4rem auto auto',
      padding: '.1px 0',
      backgroundColor: 'rgba(0, 174, 239, .1)',
      '&>*:last-child': {
        marginBottom: '4rem',
      },
    }}
  >
    <TextWrap>
      <h2>来場案内</h2>
      <h3>現代芸術振興財団 ギャラリー</h3>
      <p>2023.2.18 - 4.8 木・金 12:00-18:00／土 12:00-19:00／月・火・水 休廊</p>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.614989080514!2d139.72930335147876!3d35.66185633854345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b3c7471e68d%3A0x460d395da823dcfa!2z5YWs55uK6LKh5Zuj5rOV5Lq6IOePvuS7o-iKuOihk-aMr-iIiOiyoeWbow!5e0!3m2!1sja!2sjp!4v1676652965608!5m2!1sja!2sjp&"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        css={{
          aspectRatio: '16/9',
        }}
      ></iframe>
    </TextWrap>
    <TextWrap>
      <h3>ラピロス六本木 ショーウィンドウ</h3>
      <p>2023.2.18 - 4.8 無休</p>
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
  </section>
)
