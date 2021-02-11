import { FC } from 'react'
import styles from './Form.module.scss'

interface Props {
  id?: string
  name?: string
}

export const Select: FC<Props> = ({ id, name }) => (
  <select id={id} className={styles.select} name={name}>
    <option value="">DNI</option>
  </select>
)

export const NroDocInput: FC<Props> = () => (
  <label className={styles.nroDocInput} htmlFor="docLabel">
    <input type="text" placeholder="Nro de Documento" />
  </label>
)

export const PhoneInput: FC<Props> = () => (
  <label className={styles.phoneInput} htmlFor="phoneLabel">
    <input type="tel" placeholder="Celular" />
  </label>
)

export const TermsConditions: FC<Props> = ({ children }) => (
  <div>
    <label htmlFor="checkboxLabel" className={styles.flex}>
      <input type="checkbox" className={styles.checkbox} />
      <div className={styles.box}>
        Acepto la
        <a href="##">{children}</a>
      </div>
    </label>
  </div>
)
