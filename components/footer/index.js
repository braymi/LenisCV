import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'

const GitHub = dynamic(() => import('icons/github.svg'), { ssr: false })
const ContactIcon = dynamic(() => import('icons/contacticon.svg'), {
  ssr: false,
})

export const Footer = () => {
  return (
    <footer className={cn('theme-light', s.footer)}>
      <div className={cn(s.top, 'layout-grid hide-on-mobile')}>
        <p className={cn(s['first-line'], 'h1')}>
          I'm <br />
          <span className="contrast">Always open</span>
        </p>
        <div className={s['shameless-plug']}>
          <p className="h4">Raymond Beres</p>
          <p className="p-s">
            Junior <br /> Front-End Developer
          </p>
        </div>
        <p className={cn(s['last-line'], 'h1')}>
          for collaboration, employment
        </p>
        <Button
          className={s.cta}
          arrow
          icon={<ContactIcon />}
          href="https://vrmdvpaopjn.typeform.com/to/N3NUILIE"
        >
          Let's build together
        </Button>
      </div>
      <div className={cn(s.top, 'layout-block hide-on-desktop')}>
        <div className={s['shameless-plug']}>
          <p className="h4">Raymond Beres</p>
          <p className="p-s">Junior Front-End Developer</p>
        </div>
        <p className={cn(s['first-line'], 'h1')}>
          I'm <br />
          <span className="contrast">Always open</span>
          <br /> for collaborations, <br /> employment and learning.
        </p>
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://www.linkedin.com/in/raymond-beres-7ab302291/"
          >
            LinkedIn
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://www.facebook.com/beres.raymond/"
          >
            FaceBook
          </Link>
          <Link className={cn(s.link, 'p-xs')} href="https://github.com/braymi">
            GitHub
          </Link>
        </div>
        <Button
          className={cn(s.cta, 'hide-on-desktop')}
          arrow
          icon={<ContactIcon />}
          href="https://vrmdvpaopjn.typeform.com/to/N3NUILIE"
        >
          Let's build together
        </Button>
      </div>
    </footer>
  )
}
