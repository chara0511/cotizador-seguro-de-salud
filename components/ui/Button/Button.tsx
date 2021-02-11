import { FC } from 'react'
import styles from './Button.module.scss'

interface Props {
  isDisabled: boolean
}

const Button: FC<Props> = ({ isDisabled, children }) => {
  return (
    <div className={styles.content}>
      <button disabled={isDisabled} className={`${isDisabled && 'disabled'}`} type="submit">
        {children}
      </button>
    </div>
  )
}

export default Button
