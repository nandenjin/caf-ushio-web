/** @jsxImportSource @emotion/react */
import { SocialProfileJsonLd } from 'next-seo'
import { TextWrap } from './TextWrap'

export const PageIndexSectionProfile: React.FC = () => (
  <section>
    <TextWrap>
      <h3>稲田和巳 Kazumi Inada</h3>
      <p>
        1997年、大阪府生まれ。2021年より筑波大学大学院に在籍。アーティストとして、主な活動に「亀山トリエンナーレ2022」（三重・2022）、「CAF賞2021」（東京・2021）、「住人たち
        再制作と展示」（茨城・2021）、「つくばメディアアートフェスティバル2021」（茨城・2021）など。その他の活動に「中高生のための研究サポート動画」（ディレクション・2022）、「つくばSKIPアカデミー
        プログラミング実習」（教材設計と講師・2022）など。
      </p>
      <p>
        <a
          className="button-link"
          href="https://www.nandenjin.com/?utm_source=caf&utm_medium=website&utm_campaign=ushio&utm_content=profile"
          target="_blank"
          rel="noreferrer noopener"
        >
          作家Webサイト
        </a>
      </p>
    </TextWrap>
    <SocialProfileJsonLd
      type="Person"
      name="稲田和巳"
      url="https://www.nandenjin.com"
      sameAs={[
        'https://twitter.com/nandenjin',
        'https://www.instagram.com/nandenjin/',
        'https://www.facebook.com/nandenjin',
        'https://github.com/nandenjin',
      ]}
    />
  </section>
)
