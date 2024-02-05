import { useRect } from '@studio-freight/hamo'
import cn from 'clsx'

import { Card } from 'components/card'
import { useScroll } from 'hooks/use-scroll'
import { clamp, mapRange } from 'lib/maths'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

import s from './feature-cards.module.scss'

const cards = [
  {
    text: (
      <>
        Past experience as a{' '}
        <span className="contrast semi-bold">delivery driver </span>
        taught me <br />
        to <span className="contrast semi-bold">focus</span> under{' '}
        <span className="contrast semi-bold">pressure</span>.
      </>
    ),
  },

  {
    text: (
      <>
        Being a <span className="contrast semi-bold">sales representative</span>{' '}
        taught me <br />
        <span className="contrast semi-bold">communication</span>.
      </>
    ),
  },
  {
    text: (
      <>
        While working as a{' '}
        <span className="contrast semi-bold">graphic designer</span> <br />I
        learned the basics of
        <span className="contrast semi-bold">creativity</span>.
      </>
    ),
  },
  {
    text: (
      <>
        I thrive in <span className="contrast semi-bold">teamwork</span>,
        bringing <span className="contrast semi-bold">positive</span>{' '}
        contributions to collaborative endeavors.
      </>
    ),
  },
  {
    text: (
      <>
        Not an English speaking CoWorker?
        <br /> <span className="contrast semi-bold">Not a problem!</span>
        <br />I can also speak{' '}
        <span className="contrast semi-bold">Romanian</span> and{' '}
        <span className="contrast semi-bold">Hungarian</span>
      </>
    ),
  },
]

export const FeatureCards = () => {
  const element = useRef()
  const [setRef, rect] = useRect()
  const { height: windowHeight } = useWindowSize()

  const [current, setCurrent] = useState()

  useScroll(
    ({ scroll }) => {
      const start = rect.top - windowHeight * 2
      const end = rect.top + rect.height - windowHeight

      const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)

      element.current.style.setProperty(
        '--progress',
        clamp(0, mapRange(rect.top, end, scroll, 0, 1), 1)
      )
      const step = Math.floor(progress * 10)
      setCurrent(step)
    },
    [rect]
  )

  return (
    <div
      ref={(node) => {
        setRef(node)
      }}
      className={s.features}
    >
      <div className={cn('layout-block-inner', s.sticky)}>
        <aside className={s.title}>
          <p className="h3">
            <AppearTitle>
              Ray does <br />
              its best
              <br />
              <span className="grey">always</span>
            </AppearTitle>
          </p>
        </aside>
        <div ref={element}>
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              index={index}
              text={card.text}
              number={index + 1}
              current={index <= current - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SingleCard = ({ text, number, index, current }) => {
  return (
    <div className={cn(s.card, current && s.current)} style={{ '--i': index }}>
      <Card background="rgba(239, 239, 239, 0.8)" number={number} text={text} />
    </div>
  )
}
