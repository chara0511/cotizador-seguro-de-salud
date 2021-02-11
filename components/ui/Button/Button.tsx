import { FC } from 'react'
import styles from './Button.module.scss'

const Button: FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <button type="submit">{children}</button>
    </div>
  )
}

export default Button
