import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  DateInput,
  FormErrorMessage,
  NroDocInput,
  PhoneInput,
  Select,
  TermsConditions,
} from '@components/form'
import { Button } from '@components/ui'
import styles from './Login.module.scss'

type FormValues = {
  date: string
  numDoc: string
  phone: string
  terms: boolean
  terms2: boolean
}

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const [values, setValues] = useState<FormValues | null>(null)
  const [type, setType] = useState('text')

  // !fetch api here
  const onHandleSubmit: SubmitHandler<FormValues> = (data) => setValues(data)

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          Obtén tu <span>seguro ahora</span>
        </h1>
        <p className={styles.text}>Ingresa los datos para comenzar.</p>
      </header>

      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className={styles.formControl}>
          <Select />
          <NroDocInput>
            <input
              type="text"
              name="numDoc"
              placeholder="Nro de Documento"
              ref={register({
                required: 'Ingrese un Nro de Documento válido.',
                maxLength: 8,
              })}
            />
          </NroDocInput>
        </div>
        {errors.numDoc && <FormErrorMessage>{errors.numDoc.message}</FormErrorMessage>}

        <DateInput>
          <input
            id="dateLabel"
            name="date"
            type={type}
            onFocus={() => setType('date')}
            onBlur={() => setType('text')}
            placeholder="Fecha de nacimiento"
            ref={register({ required: 'Ingrese una fecha de nacimiento válida.', maxLength: 80 })}
          />
        </DateInput>
        {errors.date && <FormErrorMessage>{errors.date.message}</FormErrorMessage>}

        <PhoneInput>
          <input
            type="tel"
            name="phone"
            placeholder="Celular"
            ref={register({ required: 'Ingrese un numero de celular válido.', maxLength: 80 })}
          />
        </PhoneInput>
        {errors.phone && <FormErrorMessage>{errors.phone.message}</FormErrorMessage>}

        <TermsConditions nameLink="Política de Protección de Datos Personales y los Términos y Condiciones.">
          <input
            name="terms"
            type="checkbox"
            className={styles.checkbox}
            ref={register({ required: true, maxLength: 80 })}
          />
        </TermsConditions>

        <TermsConditions nameLink="Política de Envío de Comunicaciones Comerciales.">
          <input
            name="terms2"
            type="checkbox"
            className={styles.checkbox}
            ref={register({ required: true, maxLength: 80 })}
          />
        </TermsConditions>

        <Button isDisabled={!!Object.keys(errors).length}>comencemos</Button>

        <p>{values?.numDoc}</p>
      </form>
    </div>
  )
}

export default Login
