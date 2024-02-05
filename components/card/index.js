import cn from 'clsx'
import s from './card.module.scss'
import Image from 'next/image'

export const Card = ({
  number,
  text,
  className,
  inverted,
  background = 'rgba(14, 14, 14, 0.15)',
  img,
  link,
}) => {
  return (
    <div
      className={cn(className, s.wrapper, inverted && s.inverted)}
      style={{ '--background': background }}
    >
      {number && (
        <p className={s.number}>{number.toString().padStart(2, '0')}</p>
      )}
      {img && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1rem 0',
          }}
        >
          <Image
            alt="Project Image"
            src={img}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      )}

      {text && link ? (
        <a href={link} style={{ textDecoration: 'underline' }}>
          <p className={s.text}>{text}</p>
        </a>
      ) : (
        <p className={s.text}>{text}</p>
      )}
    </div>
  )
}
