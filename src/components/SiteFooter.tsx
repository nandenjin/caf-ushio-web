/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Laika } from './Laika'

export const SiteFooter: React.FC = () => {
  const [act, setAct] = useState(false)

  return (
    <footer css={{ padding: '3rem 0', textAlign: 'center' }}>
      <div
        onClick={() => setAct(true)}
        className={act ? 'act' : ''}
        css={{
          width: '30px',
          height: '30px',
          margin: '30px auto',
          transition: 'transform 15s ease-in 0s',
          '&.act': { transform: 'rotate(-15deg) translate3d(-50vw, -50vw, 0)' },
        }}
      >
        <Laika
          css={{
            display: 'block',
            width: '20px',
            height: '20px',
            margin: 'auto',
            transition: 'opacity 0.5s ease 0s',
            ':hover': { opacity: 0.5 },
            '.icon': { fill: 'rgba(0,0,0,0.3)' },
          }}
        />
      </div>
      <p css={{ color: '#888', fontSize: '0.8rem' }}>
        &copy; 稲田和巳／（公財）現代芸術振興財団
      </p>
      <p
        css={{
          filter: 'grayscale(100%) sepia(20%) hue-rotate(140deg) opacity(80%)',
        }}
      >
        <a
          href="https://github.com/nandenjin/caf-ushio-web"
          target="_blank"
          rel="noreferrer"
        >
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="https://img.shields.io/github/last-commit/nandenjin/caf-ushio-web?style=flat-square"
              height="20"
              alt="Contribute on GitHub"
              css={{
                width: 'auto',
                margin: '1rem auto',
              }}
            />
          }
        </a>
      </p>
    </footer>
  )
}
