/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import Image from 'next/image'
import { TextWrap } from './TextWrap'

import ImgWallLeft0 from '@/assets/wall-left_0.jpg'
import ImgPilot from '@/assets/ushio-roppongi_pilot_230206_2.jpg'
import { ComponentProps } from 'react'
import { mq } from '@/pages/_app'

export const PageIndexSectionArticles: React.FC = () => (
  <section>
    <TextWrap>
      <h2>参考記事</h2>
      <Article
        title="Artists #38 稲田和巳"
        description="2月18日から4月8日まで、当財団事務局ギャラリーにて稲田和巳さん個展「潮」が開催されています。インタビューでは本展の作品や現在のご活動についてお話を伺いました。"
        url="https://gendai-art.org/interviews/artists_kazumiinada/"
        thumbnail={ImgPilot}
      />
      <Article
        title="六本木『潮』展 読み解きのヒント"
        description="東京・六本木で開催中の個展で展示中のシリーズ《潮》は、統計データを使って仮想の地形を作り、社会の姿を捉えようとする試みです。この作品の仕組みと読み解き方について解説します。"
        url="https://note.com/nandenjin/n/nf4a0b0caad68"
        thumbnail={ImgWallLeft0}
      />
    </TextWrap>
  </section>
)

type ArticleProp = {
  title: string
  description?: string
  url: string
  thumbnail: ComponentProps<typeof Image>['src']
}

const Article: React.FC<ArticleProp> = ({
  title,
  description,
  url,
  thumbnail,
}) => (
  <Link href={url} target="_blank" css={{ color: 'inherit' }}>
    <article
      className="text"
      css={mq({
        background: '#fff',
        boxShadow: '1px 1px 3px rgba(0,0,0,.15)',
        border: '1px solid rgba(0,0,0,.1)',
        display: 'grid',
        gridTemplateColumns: ['auto', '250px auto'],
        '.thumbnail': {
          width: '100%',
          height: '100%',
          marginTop: 0,
          marginBottom: 0,
          border: 'none',
          objectFit: 'cover',
        },
      })}
    >
      <Image
        className="thumbnail"
        src={thumbnail}
        alt=""
        width="250"
        height="250"
        sizes="(max-width: 720px) 100vw, 250px"
        placeholder="blur"
      />
      <div css={mq({ padding: ['0.7rem', '1rem 2rem'] })}>
        <h3 css={{ fontSize: '1em' }}>{title}</h3>
        <p
          css={{
            color: 'rgba(0,0,0,.5)',
            fontSize: '0.9em',
            lineHeight: '1.2',
          }}
        >
          {description}
        </p>
      </div>
    </article>
  </Link>
)
