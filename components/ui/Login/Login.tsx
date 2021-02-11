import { useState } from 'react'

import { Button } from '@components/ui'
import { NroDocInput, PhoneInput, Select, TermsConditions } from '@components/form'
import styles from './Login.module.scss'

const Login = () => {
  const [type, setType] = useState('text')

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          Obtén tu <span>seguro ahora</span>
        </h1>
        <p className={styles.text}>Ingresa los datos para comenzar.</p>
      </header>

      <form>
        <div className={styles.formControl}>
          <Select />
          <NroDocInput />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="dateLabel" style={{ padding: '1rem' }}>
            <input
              type={type}
              onFocus={() => setType('date')}
              onBlur={() => setType('text')}
              placeholder="Fecha de nacimiento"
            />
          </label>
        </div>

        <div className={styles.formControl}>
          <PhoneInput />
        </div>

        <TermsConditions>
          Política de Protección de Datos Pesonale y los Términos y Condiciones.
        </TermsConditions>

        <TermsConditions>Política de Envío de Comunicaciones Comercial.</TermsConditions>

        <Button>comencemos</Button>
      </form>
    </div>
  )
}

export default Login
