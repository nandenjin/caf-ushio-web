/** @jsxImportSource @emotion/react */

import { TextWrap } from './TextWrap'
import Image from 'next/image'
import DisplayImg from '@/assets/display.jpg'
import ContourImg from '@/assets/contour_2048w.jpg'
import MeshImg from '@/assets/mesh_2048w.jpg'

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
        『潮』は、社会統計データから生成された仮想の地形を用いて、地理空間に横たわる不可視な流れを考察しようとする取り組みです。地点を位置に、数値を高さに割り当てることで構築される地形は、現実の地表の形状モデルが大気や水の動きを推測するのに役立つように、データが持つ要素の動きを把握することを可能にします。
      </p>
    </TextWrap>
    <TextWrap>
      <Image src={DisplayImg} alt="" width="500" height="300"></Image>
      <Image src={ContourImg} alt="" width="500" height="300"></Image>
      <Image src={MeshImg} alt="" width="500" height="300"></Image>
    </TextWrap>
  </section>
)
