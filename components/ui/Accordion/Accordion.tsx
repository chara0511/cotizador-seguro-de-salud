/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from '@components/theme'
import { FC, useState } from 'react'
import { Icon } from '..'
import styles from './Accordion.module.scss'

interface Props {
  title: string
}

const Accordion: FC<Props> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={styles.content}>
      <Flex>
        <button
          type="button"
          className={`${styles.accordionTitle} ${isOpen ? 'open' : ''}`}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </button>
        <Icon name="arrow" />
      </Flex>

      <div className={`accordionItem ${!isOpen ? 'collapsed' : ''}`}>
        <div className={styles.accordionBody}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
