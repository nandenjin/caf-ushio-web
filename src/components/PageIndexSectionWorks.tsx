/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import { useRouter } from 'next/router'
import { join } from 'path'
import { TextWrap } from './TextWrap'

import ImgWork1 from '@/assets/work_1.jpg'
import ImgWork2and3 from '@/assets/work_2-3.jpg'
import ImgWork4 from '@/assets/work_4.jpg'

const styleWorkNameEn = {
  display: 'block',
  color: 'rgba(0,0,0,.5)',
  fontStyle: 'italic',
}

export const PageIndexSectionWorks: React.FC = () => {
  const router = useRouter()
  const getPath = (path: string) => join(router.basePath, path)

  return (
    <section id="works" css={{}}>
      <TextWrap>
        <h2>展示内容</h2>
        <div
          className="text"
          style={{
            padding: '1rem 2rem',
            marginBottom: '2em',
            background: '#eee',
          }}
        >
          <p>会場で配布しているハンドアウトもご覧いただけます。</p>
          <ul>
            <li>
              <a
                href={getPath('/download/handout_r2.pdf')}
                target="_blank"
                rel="noreferrer"
              >
                rev.2
              </a>{' '}
              (23.2.24- 最新版)
            </li>
            <li>
              <a
                href={getPath('/download/handout_r2.pdf')}
                target="_blank"
                rel="noreferrer"
              >
                rev.1
              </a>{' '}
              (23.2.18)
            </li>
          </ul>
        </div>
        <ol>
          <li>
            潮（六本木）<span css={styleWorkNameEn}>Ushio (Roppongi)</span>
          </li>
          <li>
            潮（六本木） - 標高地形図{' '}
            <span css={styleWorkNameEn}>
              Ushio (Roppongi) - Topographic Map
            </span>
          </li>
          <li>
            潮（六本木） - 陰影起伏図{' '}
            <span css={styleWorkNameEn}>
              Ushio (Roppongi) - Shaded Relief Map
            </span>
          </li>
          <li>
            潮（六本木） - データレイヤ{' '}
            <span css={styleWorkNameEn}>Ushio (Roppongi) - Data Layers</span>
          </li>
        </ol>
        <p>
          各展示物は、場所に紐付けることができる社会統計データをそれぞれの地点の「標高」とした、仮想の地形モデルを用いたものです。たとえば地価統計のデータでは、統計が取られた地点ごとに、価格の相対的な高低を地形上の高さに変換しています。得られたまばらな点の間を数理的に補完することで、地形の「地面」ができます。
        </p>
        <p>
          本展では複数のデータセットを地理的場所によって組み合わせて地形を生成し、その上に水や土砂を思わせる粒子を流すシミュレーションの様子を提示します。経済・環境・情報など異なる切り口で社会を表すデータを複合的に重ねるにつれ、地形は有機的で解像度の高いものとなり、自然の産物のような複雑性が徐々に現れます。
        </p>
        <p>
          制作にかかる数理的な処理はコンピュータアルゴリズムで実装されており、地形・稜線・粒子の流れは、作家の主観的意思を介することなく生成されています。鑑賞者の目に直接触れることこそありませんが、モデルを生み出しているこれらのシステムこそが、《潮》のまさに主体であると言えます。
        </p>
      </TextWrap>
      <TextWrap>
        <Image
          src={ImgWork1}
          width="500"
          height="300"
          alt=""
          placeholder="blur"
        />
        <Image
          src={ImgWork2and3}
          width="500"
          height="300"
          alt=""
          placeholder="blur"
        />
        <Image
          src={ImgWork4}
          width="500"
          height="300"
          alt=""
          placeholder="blur"
        />
      </TextWrap>
    </section>
  )
}
