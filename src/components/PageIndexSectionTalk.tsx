/** @jsxImportSource @emotion/react */

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { TextWrap } from './TextWrap'
import { useRouter } from 'next/router'

export const PageIndexSectionTalk: React.FC = () => {
  const router = useRouter()
  const getPath = (path: string) => router.basePath + path

  return (
    <section>
      <TextWrap>
        <h2 id="talk">トークセッション 稲田和巳 × トモトシ × 花形槙</h2>
        <p>アーティストのトモトシ・花形慎を迎えたトークを開催しました。</p>
        <p>
          本展では展示作品である社会の流れを示唆する地図をハンドアウト裏面に印刷し、鑑賞者に対して、街を歩いて観察するフィールドワークの実践を促しています。登壇者はトークに先立ってこのフィールドワークを体験し、そこで見聞きし感じたことをもとに意見を交わしました。
        </p>
        <p>
          ダイジェスト・フルバージョンが
          <a
            href="https://youtube.com/playlist?list=PLiMtoy_ozB-Rw6VPkFuQwuKi6R2c1jAfp"
            target="_blank"
            rel="noopener noreferer noreferrer"
          >
            YouTubeで視聴いただけます。
          </a>
        </p>
        <div className="text" style={{ marginTop: '2em', marginBottom: '2em' }}>
          <LiteYouTubeEmbed
            id="PLiMtoy_ozB-Rw6VPkFuQwuKi6R2c1jAfp"
            playlist={true}
            playlistCoverId="uRuBLNhpxh0"
            poster="hqdefault"
            title="稲田和巳個展『潮』トーク - 稲田和巳 × トモトシ × 花形慎"
            noCookie={true}
          />
        </div>

        <div
          className="text"
          style={{
            padding: '1rem 2rem',
            marginBottom: '2em',
            background: 'var(--color-bg-lightgray)',
          }}
        >
          <p>
            ハンドアウト裏面の地図を、会期終了後から
            <a
              href={getPath('/download/handout_map.pdf')}
              target="_blank"
              rel="noopener noreferer noreferrer"
            >
              Webでも配布しています
            </a>
            。どうぞご自身でもフィールドワークをご体験ください。
          </p>
          <p css={{ fontSize: '0.8rem' }}>
            こちらのデータは、個人で楽しむ用途に限りご利用いただけます。
          </p>
        </div>
      </TextWrap>
    </section>
  )
}
