import { useState } from 'react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  FormControl,
  FormErrorMessage,
  Header,
  NroDocInput,
  Select,
  TermsConditions,
} from '@components/form'
import { Button } from '@components/theme'
import styles from './LoginView.module.scss'

type FormValues = {
  date: string
  numDoc: string
  phone: string
  terms: boolean
  terms2: boolean
}

const Login = () => {
  const { register, handleSubmit, errors } = useForm()

  const router = useRouter()
  const [type, setType] = useState('text')

  // !fetch api here
  const onHandleSubmit: SubmitHandler<FormValues> = (formValues) => {
    const q = formValues.numDoc

    // ?send query to path
    return router.push(
      {
        pathname: `/steps/add`,
        query: q ? { q } : {},
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className={styles.formControl}>
        <Select />
        <NroDocInput>
          <input
            type="number"
            name="numDoc"
            placeholder="Nro de Documento"
            ref={register({
              required: 'Ingrese un Nro de Documento válido.',
              maxLength: { value: 8, message: 'Máx. 8' },
            })}
          />
        </NroDocInput>
      </div>
      <FormErrorMessage> {errors.numDoc && <>{errors.numDoc.message}</>}</FormErrorMessage>

      <FormControl htmlFor="dateLabel">
        <input
          id="dateLabel"
          name="date"
          type={type}
          onFocus={() => setType('date')}
          onBlur={() => setType('text')}
          min="1900-01-01"
          placeholder="Fecha de nacimiento"
          ref={register({ required: 'Ingrese una fecha de nacimiento válida.' })}
        />
      </FormControl>
      <FormErrorMessage>{errors.date && <>{errors.date.message}</>}</FormErrorMessage>

      <FormControl htmlFor="phoneLabel">
        <input
          id="phoneLabel"
          type="tel"
          name="phone"
          placeholder="Celular"
          ref={register({
            required: 'Ingrese un numero de celular válido.',
            maxLength: { value: 16, message: 'Máx. 16' },
          })}
        />
      </FormControl>
      <FormErrorMessage>{errors.phone && <>{errors.phone.message}</>}</FormErrorMessage>

      <TermsConditions nameLink="Política de Protección de Datos Personales y los Términos y Condiciones.">
        <input
          name="terms"
          type="checkbox"
          ref={register({ required: 'Acepta los términos y condiciones' })}
        />
      </TermsConditions>
      <FormErrorMessage>{errors.terms && <>{errors.terms.message}</>}</FormErrorMessage>

      <TermsConditions nameLink="Política de Envío de Comunicaciones Comerciales.">
        <input
          name="terms2"
          type="checkbox"
          ref={register({ required: 'Acepta los términos y condiciones' })}
        />
      </TermsConditions>
      <FormErrorMessage>{errors.terms2 && <>{errors.terms2.message}</>}</FormErrorMessage>

      <Button isDisabled={!!Object.keys(errors).length}>comencemos</Button>
    </form>
  )
}

const LoginView = () => (
  <div className={styles.content}>
    <Header title="Obtén tu" boldTitle="seguro ahora" subTitle="Ingresa los datos para comenzar." />

    <Login />
  </div>
)

export default LoginView
