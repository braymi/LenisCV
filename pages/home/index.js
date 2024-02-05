import { useFrame, useRect } from '@studio-freight/hamo'
import cn from 'clsx'

import { Button } from 'components/button'
import { Card } from 'components/card'
import { Title } from 'components/intro'
import { Link } from 'components/link'
import { ListItem } from 'components/list-item'
import { projects } from 'content/projects'
import { useScroll } from 'hooks/use-scroll'
import { Layout } from 'layouts/default'
import { button, useControls } from 'leva'
import { clamp, mapRange } from 'lib/maths'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useIntersection, useWindowSize } from 'react-use'
import s from './home.module.scss'

import TonysProject from '../../public/images/barber.png'
import PortfolioProject from '../../public/images/portfolio.png'
import BurgerProject from '../../public/images/burger.png'
import KitchenProject from '../../public/images/kitchen.png'
import CvProject from '../../public/images/cvsite.png'

// const SFDR = dynamic(() => import('icons/sfdr.svg'), { ssr: false })
const GitHub = dynamic(() => import('icons/github.svg'), { ssr: false })
const DownloadIcon = dynamic(() => import('icons/downloadicon.svg'), {
  ssr: false,
})

const Parallax = dynamic(
  () => import('components/parallax').then((mod) => mod.Parallax),
  { ssr: false }
)

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const HorizontalSlides = dynamic(
  () =>
    import('components/horizontal-slides').then((mod) => mod.HorizontalSlides),
  { ssr: false }
)

const FeatureCards = dynamic(
  () => import('components/feature-cards').then((mod) => mod.FeatureCards),
  { ssr: false }
)

const WebGL = dynamic(
  () => import('components/webgl').then(({ WebGL }) => WebGL),
  { ssr: false }
)

const HeroTextIn = ({ children, introOut }) => {
  return (
    <div className={cn(s['hide-text'], introOut && s['show-text'])}>
      {children}
    </div>
  )
}

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState()
  const zoomRef = useRef(null)
  const [zoomWrapperRectRef, zoomWrapperRect] = useRect()
  const { height: windowHeight } = useWindowSize()
  const introOut = useStore(({ introOut }) => introOut)

  const [theme, setTheme] = useState('dark')
  const lenis = useStore(({ lenis }) => lenis)

  useControls(
    'lenis',
    () => ({
      stop: button(() => {
        lenis.stop()
      }),
      start: button(() => {
        lenis.start()
      }),
    }),
    [lenis]
  )

  useControls(
    'scrollTo',
    () => ({
      immediate: button(() => {
        lenis.scrollTo(30000, { immediate: true })
      }),
      smoothDuration: button(() => {
        lenis.scrollTo(30000, { lock: true, duration: 10 })
      }),
      smooth: button(() => {
        lenis.scrollTo(30000)
      }),
      forceScrollTo: button(() => {
        lenis.scrollTo(30000, { force: true })
      }),
    }),
    [lenis]
  )

  useEffect(() => {
    if (!lenis) return

    function onClassNameChange(lenis) {
      console.log(lenis.className)
    }

    lenis.on('className change', onClassNameChange)

    return () => {
      lenis.off('className change', onClassNameChange)
    }
  }, [lenis])

  useScroll(({ scroll }) => {
    setHasScrolled(scroll > 10)
    if (!zoomWrapperRect.top) return

    const start = zoomWrapperRect.top + windowHeight * 0.5
    const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight

    const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
    const center = 0.6
    const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
    const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)
    setTheme(progress2 === 1 ? 'light' : 'dark')

    zoomRef.current.style.setProperty('--progress1', progress1)
    zoomRef.current.style.setProperty('--progress2', progress2)

    if (progress === 1) {
      zoomRef.current.style.setProperty('background-color', 'currentColor')
    } else {
      zoomRef.current.style.removeProperty('background-color')
    }
  })

  const [whyRectRef, whyRect] = useRect()
  const [cardsRectRef, cardsRect] = useRect()
  const [whiteRectRef, whiteRect] = useRect()
  const [featuresRectRef, featuresRect] = useRect()
  const [inuseRectRef, inuseRect] = useRect()

  const addThreshold = useStore(({ addThreshold }) => addThreshold)

  useEffect(() => {
    addThreshold({ id: 'top', value: 0 })
  }, [])

  useEffect(() => {
    const top = whyRect.top - windowHeight / 2
    addThreshold({ id: 'why-start', value: top })
    addThreshold({
      id: 'why-end',
      value: top + whyRect.height,
    })
  }, [whyRect])

  useEffect(() => {
    const top = cardsRect.top - windowHeight / 2
    addThreshold({ id: 'cards-start', value: top })
    addThreshold({ id: 'cards-end', value: top + cardsRect.height })
    addThreshold({
      id: 'red-end',
      value: top + cardsRect.height + windowHeight,
    })
  }, [cardsRect])

  useEffect(() => {
    const top = whiteRect.top - windowHeight
    addThreshold({ id: 'light-start', value: top })
  }, [whiteRect])

  useEffect(() => {
    const top = featuresRect.top
    addThreshold({ id: 'features', value: top })
  }, [featuresRect])

  useEffect(() => {
    const top = inuseRect.top
    addThreshold({ id: 'in-use', value: top })
  }, [inuseRect])

  useEffect(() => {
    const top = lenis?.limit
    addThreshold({ id: 'end', value: top })
  }, [lenis?.limit])

  useScroll((e) => {
    console.log(window.scrollY, e.scroll, e.isScrolling, e.velocity, e.isLocked)
  })

  useFrame(() => {
    console.log('frame', window.scrollY, lenis?.scroll, lenis?.isScrolling)
  }, 1)

  const inUseRef = useRef()

  const [visible, setIsVisible] = useState(false)
  const intersection = useIntersection(inUseRef, {
    threshold: 0.2,
  })
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])

  return (
    <Layout
      theme={theme}
      seo={{
        title: 'Raymond Beres',
        description: 'A website which acts as a CV',
      }}
      className={s.home}
    >
      <div className={s.canvas}>
        <WebGL />
      </div>

      <section className={s.hero}>
        <div className="layout-grid-inner">
          <Title className={s.title} />
          <span className={cn(s.sub)}>
            <HeroTextIn introOut={introOut}>
              <h2 className={cn('h3', s.subtitle)}>
                Junior Front-End Developer
              </h2>
            </HeroTextIn>
            {/* <HeroTextIn introOut={introOut}>
              <h2 className={cn('p-xs', s.tm)}>
                <span>©</span> {new Date().getFullYear()} Studio Freight
              </h2>
            </HeroTextIn> */}
          </span>
        </div>

        <div className={cn(s.bottom, 'layout-grid')}>
          <div
            className={cn(
              'hide-on-mobile',
              s['scroll-hint'],
              hasScrolled && s.hide,
              introOut && s.show
            )}
          >
            <div className={s.text}>
              <HeroTextIn introOut={introOut}>
                <p>scroll</p>
              </HeroTextIn>
              <HeroTextIn introOut={introOut}>
                <p> to learn more</p>
              </HeroTextIn>
            </div>
          </div>
          {/* <h1 className={cn(s.description, 'p-s')}>
            <HeroTextIn introOut={introOut}>
              <p className="p-s"> A new smooth scroll library</p>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">fresh out of the</p>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">Studio Freight Darkroom</p>
            </HeroTextIn>
          </h1> */}
          <Button
            className={cn(s.cta, introOut && s.in)}
            arrow
            icon={<DownloadIcon />}
            href="https://drive.google.com/file/d/1Xcijr6O4Ev-35OIwapUfbc9OlJotyjQF/view"
          >
            Download my resumé
          </Button>
        </div>
      </section>
      <section className={s.why} data-lenis-scroll-snap-align="start">
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2')}>
            <AppearTitle>Who am I and what do I do?</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            {/* <div className={s.feature}>
              <p className="p">
                
              </p>
            </div> */}
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>Introduction about me</h3>
              <p className="p">
                I perceive myself as a positive and mature individual, dedicated
                to achieving optimal results in every objective. Throughout my
                previous roles, I have demonstrated the ability to thrive under
                pressure. Simultaneously, I embody an adventurous and friendly
                spirit, capable of bringing smiles to people's faces. However,
                my approach to work is characterized by maximum seriousness, and
                I consistently strive to accomplish everything that is both
                possible and necessary.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>How did I end up here?</h3>
              <p className="p">
                In the 10th grade, I stumbled upon the fascinating world of
                front-end development, and from that moment, my passion for it
                has only intensified. The discovery of crafting visually
                appealing and user-friendly interfaces opened up a realm of
                creativity and problem-solving that instantly captured my
                imagination. Learning the intricacies of HTML, CSS, and
                JavaScript became not just a skill set to acquire but a
                thrilling journey of turning ideas into interactive and engaging
                digital experiences. The dynamic nature of front-end development
                allows me to blend design aesthetics with technical precision,
                creating a harmonious balance that continually challenges and
                excites me. Since that initial encounter in the 10th grade, my
                love for front-end development has only deepened, as each
                project becomes an opportunity to refine my skills, explore new
                technologies, and contribute to the ever-evolving landscape of
                web design.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>What's the next step?</h3>
              <p className="p">Always learning.</p>
            </div>
          </aside>
        </div>
      </section>
      <section className={s.rethink}>
        <div className={cn('layout-grid', s.pre)}>
          <div className={s.highlight} data-lenis-scroll-snap-align="start">
            <Parallax speed={-0.5}>
              <p className="h2">
                <AppearTitle>Projects</AppearTitle>
              </p>
            </Parallax>
          </div>
          <div className={s.comparison}>
            <Parallax speed={0.5}>
              <p className="p">
                While my professional journey in front-end development has
                predominantly revolved around self-initiated projects, I am
                eager to extend my expertise and collaborate on external
                ventures. I am confident that my passion for front-end
                development, coupled with my dedication to continuous learning,
                positions me as a valuable asset for any team looking to enhance
                their digital presence. I welcome the opportunity to discuss how
                my skills and experiences align with your organization's
                objectives and contribute to the success of future projects.
              </p>
            </Parallax>
          </div>
        </div>
        <div className={s.cards} ref={cardsRectRef}>
          <HorizontalSlides>
            <Card
              className={s.card}
              number="01"
              text="Appointment website using databases, alongside with an Admin panel."
              img={TonysProject}
              link="http://tonysbarber.netlify.app"
            />

            <Card
              className={s.card}
              number="02"
              text="Upload/Change an Image, Title, Subtitle, Description. As a portfolio manager."
              img={PortfolioProject}
              link="https://portofoliodata.netlify.app"
            />
            <Card
              className={s.card}
              number="03"
              text="Make a burger, and send it to the kitchen."
              img={BurgerProject}
              link="https://main-order.netlify.app"
            />
            <Card
              className={s.card}
              number="04"
              text="Retrieve the sent burger orders."
              img={KitchenProject}
            />
            <Card
              className={s.card}
              number="05"
              text="My first ever CV website."
              img={CvProject}
              link="https://braymiold.netlify.app"
            />
          </HorizontalSlides>
        </div>
      </section>
      <section
        ref={(node) => {
          zoomWrapperRectRef(node)
          zoomRef.current = node
        }}
        className={s.solution}
      >
        <div className={s.inner}>
          <div className={s.zoom}>
            <h2 className={cn(s.first, 'h1 vh')}>
              5 reasons aren't enough? <br />
              <span className="contrast">there's always more!</span>
            </h2>
            <h2 className={cn(s.enter, 'h3 vh')}>
              Opted
              <br />
              For development
            </h2>
            <h2 className={cn(s.second, 'h1 vh')}>Unless you already left.</h2>
          </div>
        </div>
      </section>
      <section className={cn('theme-light', s.featuring)} ref={whiteRectRef}>
        <div className={s.inner}>
          <div className={cn('layout-block', s.intro)}>
            <p className="p-l">
              If my words have captured your attention, I encourage you to reach
              out <span className="contrast semi-bold">without hesitation</span>
              . Whether you have questions, thoughts to share, or wish to
              explore a particular topic further, I am eager to engage in
              meaningful conversation. Your input is valuable, and I welcome the
              opportunity to connect and exchange ideas.
            </p>
          </div>
        </div>
        <section ref={featuresRectRef}>
          <FeatureCards />
        </section>
      </section>
      {/* <section
        ref={(node) => {
          inuseRectRef(node)
          inUseRef.current = node
        }}
        className={cn('theme-light', s['in-use'], visible && s.visible)}
      >
        <div className="layout-grid">
          <aside className={s.title}>
            <p className="h3">
              <AppearTitle>
                Lenis
                <br />
                <span className="grey">in use</span>
              </AppearTitle>
            </p>
          </aside>
          <ul className={s.list}>
            {projects.map(({ title, source, href }, i) => (
              <li key={i}>
                <ListItem
                  title={title}
                  source={source}
                  href={href}
                  index={i}
                  visible={visible}
                />
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
