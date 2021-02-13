import { FC } from 'react'
import Link from 'next/link'

import { Url } from 'url'
import { Icon } from '@components/ui'
import styles from './Theme.module.scss'

interface Props {
  cols?: string
  isDisabled?: boolean
  className?: string
  direction?: string
  button?: boolean
  handleClick?: () => void
}

interface NEXTlINK {
  href: Url | string
  number: number
}

export const Grid: FC<Props> = ({ cols, children }) => (
  <div className={`${styles.grid} ${cols}`}>{children}</div>
)

export const Container: FC = ({ children }) => <div className={styles.container}>{children}</div>

export const Background = () => (
  <div className={styles.fill}>
    <div className={styles.illustration} />
  </div>
)

export const Flex: FC<Props> = ({ direction = 'row', children }) => (
  <div className={`${styles.flex} ${direction}`}>{children}</div>
)

export const Button: FC<Props> = ({ button, handleClick, isDisabled, children }) => {
  return (
    <div className={styles.button}>
      <button
        disabled={isDisabled}
        className={`${isDisabled && 'disabled'}`}
        type={button ? 'button' : 'submit'}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  )
}

export const PlanButton: FC<Props> = ({ className, handleClick, children }) => {
  return (
    <div className={styles.planButton}>
      <button type="button" className={className} onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}

export const Pill: FC = ({ children }) => {
  return (
    <div className={styles.pill}>
      <span>{children}</span>
    </div>
  )
}

export const Text: FC<Props> = ({ className, children }) => {
  return (
    <div className={`${className} ${styles.text}`}>
      <p>{children}</p>
    </div>
  )
}

export const StepLink: FC<NEXTlINK> = ({ number, href }) => {
  return (
    <div className={styles.stepLink}>
      <div className={styles.icon}>
        <Icon name="arrow" />
      </div>
      <Link href={href}>
        <a>
          <span>Paso {number}</span> de 7
        </a>
      </Link>
    </div>
  )
}
