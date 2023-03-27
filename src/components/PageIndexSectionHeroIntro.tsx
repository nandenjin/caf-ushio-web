/** @jsxImportSource @emotion/react */

import { TextWrap } from './TextWrap'
import Image from 'next/image'
import ImgWallCenter0 from '@/assets/wall-center_0.jpg'
import ImgWallCenter1 from '@/assets/wall-center_1.jpg'
import ImgWallLeft0 from '@/assets/wall-left_0.jpg'
import ImgWallRight0 from '@/assets/wall-right_0.jpg'
import ImgWallRight1 from '@/assets/wall-right_1.jpg'
import ImgOutView0 from '@/assets/outview_0.jpg'

export const PageIndexSectionIntro: React.FC = () => (
  <section css={{ margin: '4rem auto' }}>
    <TextWrap>
      <p>この度、現代芸術振興財団は稲田和巳個展「潮」を開催いたします。</p>
      <p>
        稲田は、自身や身の回りの外界を計算機を用いて構造化し、観察することを試みてきました。作品を制作するアーティストであると同時に、背後にあるテクノロジーに携わるエンジニアとして活動することも特徴です。その作品は、稲田が「観測装置」と形容するように、見るもの自身が主体的に読み解き、我々の生きる世界への解釈を見出すことを促します。
      </p>
      <p>
        本展では、シミュレーションシステムを構築し制作するメディアアート作品の新作を展示します。
      </p>
    </TextWrap>
    <TextWrap>
      <p>
        『潮』は、社会統計データから生成された仮想の地形を用いて、地理空間に横たわる不可視な流れを考察しようとする取り組みです。異なる切り口で社会を捉えたデータを統合して構築される地形は、多元的で流動を続ける社会の姿を像として捉え、観察と発見の糸口を示します。
      </p>
    </TextWrap>
    <TextWrap>
      <Image
        src={ImgWallCenter0}
        alt=""
        width="500"
        height="300"
        sizes="(max-width: 720px) 100vw, 866px"
        placeholder="blur"
      ></Image>
      <Image
        src={ImgWallLeft0}
        alt=""
        width="500"
        height="300"
        sizes="(max-width: 720px) 100vw, 866px"
        placeholder="blur"
      ></Image>
      <Image
        src={ImgWallRight0}
        alt=""
        width="500"
        height="300"
        sizes="(max-width: 720px) 100vw, 866px"
        placeholder="blur"
      ></Image>
      <Image
        src={ImgWallCenter1}
        alt=""
        width="500"
        height="300"
        sizes="(max-width: 720px) 100vw, 866px"
        placeholder="blur"
      ></Image>
      <Image
        src={ImgWallRight1}
        alt=""
        width="500"
        height="300"
        sizes="(max-width: 720px) 100vw, 866px"
        placeholder="blur"
      ></Image>
      <Image
        src={ImgOutView0}
        alt=""
        width="500"
        height="300"
        sizes="(max-width: 720px) 100vw, 866px"
        placeholder="blur"
      ></Image>
    </TextWrap>
  </section>
)
