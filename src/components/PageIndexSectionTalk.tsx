/** @jsxImportSource @emotion/react */

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { TextWrap } from './TextWrap'

export const PageIndexSectionTalk: React.FC = () => (
  <section>
    <TextWrap>
      <h2>トークセッション 稲田和巳 × トモトシ × 花形慎</h2>
      <p>アーティストのトモトシ・花形慎を迎えたトークを開催しました。</p>
      <p>
        本展では展示作品である社会の流れを示唆する地図をハンドアウト裏面に印刷し、鑑賞者に対して、街を歩いて観察するフィールドワークの実践を促しています。登壇者はトークに先立ってこのフィールドワークを体験し、そこで見聞きし感じたことをもとに、作品の今後の発展について意見を交わしました。
      </p>
      <div className="text">
        <LiteYouTubeEmbed
          id="PLiMtoy_ozB-Rw6VPkFuQwuKi6R2c1jAfp"
          playlist={true}
          playlistCoverId="uRuBLNhpxh0"
          poster="hqdefault"
          title="稲田和巳個展『潮』トーク - 稲田和巳 × トモトシ × 花形慎"
          noCookie={true}
        />
      </div>
    </TextWrap>
  </section>
)
