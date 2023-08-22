/** @jsxImportSource @emotion/react */

import { TextWrap } from './TextWrap'
import { useRouter } from 'next/router'

export const PageIndexSectionCatalog: React.FC = () => {
  const router = useRouter()
  const getPath = (path: string) => router.basePath + path

  return (
    <section>
      <TextWrap>
        <h2 id="catalog">図録</h2>
        <ul>
          <li>作品・展示風景画像</li>
          <li>展評（谷口暁彦・久保ガエタン）</li>
          <li>作家インタビュー</li>
          <li>トークセッション（稲田和巳 × トモトシ × 花形槙）</li>
        </ul>
        <p>
          2023.8.22発行。
          <a
            href="https://gendai-art.org/catalog/"
            rel="noopener noreferrer"
            target="_blank"
          >
            現代芸術振興財団 Webサイト
          </a>
          で請求できます（無料）。残部がなくなり次第、フォームから掲載がなくなります。
        </p>
      </TextWrap>
    </section>
  )
}
