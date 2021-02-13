/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState } from 'react'
import styles from './Accordion.module.scss'

interface Props {
  title: string
}

const Accordion: FC<Props> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <button
        type="button"
        className={`${styles.accordionTitle} ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </button>
      <div className={`accordionItem ${!isOpen ? 'collapsed' : ''}`}>
        <div className={styles.accordionBody}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
