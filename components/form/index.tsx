import { FC } from 'react'
import styles from './Form.module.scss'

interface Props {
  id?: string
  name?: string
  nameLink?: string
}

export const Select: FC<Props> = ({ id, name }) => (
  <select id={id} className={styles.select} name={name}>
    <option value="">DNI</option>
  </select>
)

export const NroDocInput: FC<Props> = ({ children }) => (
  <label className={styles.label} htmlFor="NroDocLabel">
    {children}
  </label>
)

export const DateInput: FC<Props> = ({ children }) => (
  <div className={styles.formControl}>
    <label htmlFor="dateLabel" className={styles.label}>
      {children}
    </label>
  </div>
)

export const PhoneInput: FC<Props> = ({ children }) => (
  <div className={styles.formControl}>
    <label className={styles.label} htmlFor="PhoneLabel">
      {children}
    </label>
  </div>
)

export const TermsConditions: FC<Props> = ({ nameLink, children }) => (
  <div className={styles.terms}>
    <label htmlFor="checkboxLabel" className={styles.flex}>
      {children}
      <div className={styles.box}>
        Acepto la
        <a className={styles.externalLink} href="##">
          {nameLink}
        </a>
      </div>
    </label>
  </div>
)

export const FormErrorMessage: FC<Props> = ({ children }) => (
  <div className={styles.formErrorMessage}>{children}</div>
)
