import { FC } from 'react'
import styles from './Form.module.scss'

interface Props {
  id?: string
  htmlFor?: string
  name?: string
  nameLink?: string
  title?: string
  boldTitle?: string
  subTitle?: string
}

export const Header: FC<Props> = ({ title, boldTitle, subTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      {title} <span>{boldTitle}</span>
    </h1>
    <p className={styles.text}>{subTitle}</p>
  </header>
)

export const FormHeader: FC<Props> = ({ children }) => (
  <header className={styles.formHeader}>
    <h2>{children}</h2>
  </header>
)

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

export const FormControl: FC<Props> = ({ htmlFor, children }) => (
  <div className={styles.formControl}>
    <label htmlFor={htmlFor}>{children}</label>
  </div>
)

export const Radio: FC<Props> = ({ htmlFor, children }) => (
  <div className={styles.radio}>
    <label htmlFor={htmlFor}>{children}</label>
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
