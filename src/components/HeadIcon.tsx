/** @jsxImportSource @emotion/react */

import CAFLogo from '@/assets/caf-logo.svg'
import { useEffect, useState } from 'react'

export const HeadIcon: React.FC = () => {
  const [highlight, setHighlight] = useState(false)
  useEffect(() => {
    const handle = () => {
      if (window.scrollY > window.innerHeight) {
        setHighlight(true)
      } else {
        setHighlight(false)
      }
    }
    window.addEventListener('scroll', handle)
    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [])
  return (
    <div
      css={{
        position: 'fixed',
        top: '35px',
        left: '35px',
        zIndex: 100,
        width: '70px',
        height: '70px',
      }}
    >
      <a
        href="https://gendai-art.org/"
        css={{
          display: 'block',
          width: '70px',
          height: '70px',
          background: highlight ? 'rgba(0, 174, 239, 1)' : '#fff',
          mask: `url("${CAFLogo.src}") no-repeat center center / contain`,
          textIndent: '-9999px',
        }}
      >
        現代芸術振興財団
      </a>
    </div>
  )
}
