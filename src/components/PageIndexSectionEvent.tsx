/** @jsxImportSource @emotion/react */

import { mq } from '@/pages/_app'
import { TextWrap } from './TextWrap'

const STYLE_CARD = mq({
  backgroundColor: '#fff',
  padding: ['1rem 0.5rem', '1rem 2rem'],
  boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
})

export const PageIndexSectionEvent: React.FC = () => (
  <section
    css={{
      '&>*:last-child': {
        marginBottom: '4rem',
      },
    }}
  >
    <TextWrap>
      <h2>会期中のイベント</h2>
      <div css={STYLE_CARD} className="text ">
        <h3>公開メンテナンス</h3>
        <p css={{ fontWeight: 'bold' }}>次回: 3月11日（土）13:00〜13:15ごろ</p>
        <p>ギャラリーオープン中に、作家が作品のメンテナンス作業を行います。</p>
        <ul css={{ fontSize: '0.9em' }}>
          <li>
            作業中もギャラリーは自由に入退室できますが、通常通りの形ではご覧いただけない作品が生じます。ご了承ください。
          </li>
          <li>
            作業の様子や作業端末の表示内容は、撮影等も含め近くで自由にご覧いただけます。
          </li>
          <li>
            作業者は来場者へのご対応を差し控えさせていただきます。ご質問等は、作業終了後にお声掛けください。
          </li>
        </ul>
      </div>
    </TextWrap>
  </section>
)
