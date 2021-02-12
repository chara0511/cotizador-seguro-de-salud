/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'
import { format, parseISO } from 'date-fns'

import fetcher from '@utils/fetcher'
import { StateModel, useUser } from '@components/context'
import formatData from '@utils/formatData'
import { Button } from '@components/ui'
import {
  FormControl,
  FormErrorMessage,
  FormHeader,
  Header,
  NroDocInput,
  Radio,
  Select,
} from '@components/form'
import styles from './AddView.module.scss'

type FormValues = {
  date: string
  numDoc: string
  phone: string
  terms: boolean
  terms2: boolean
}

const Add: FC<{ data: StateModel }> = ({ data }) => {
  const { register, handleSubmit, errors } = useForm()
  const router = useRouter()
  const { getFormValues } = useUser()
  const [type, setType] = useState('text')

  useEffect(() => {
    getFormValues(data)
  }, [])

  const [form, setForm] = useState({ add: '', ...data })

  const { add, numDoc, date, title, firstName, lastName, gender } = form

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onHandleSubmit: SubmitHandler<FormValues> = (formValues) => {
    getFormValues(formValues)

    return router.push(
      {
        pathname: `/steps/plan`,
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <FormHeader>Datos personales de titular</FormHeader>

      <div>
        <Select />
        <NroDocInput>
          <input
            type="text"
            name="numDoc"
            placeholder="Nro de Documento"
            value={numDoc}
            onChange={handleChangeInput}
            ref={register({
              required: 'Ingrese un Nro de Documento válido.',
              maxLength: 8,
            })}
          />
        </NroDocInput>
      </div>

      <FormControl htmlFor="titleLabel">
        <input
          id="titleLabel"
          type="text"
          name="title"
          placeholder="Nombres"
          value={title}
          onChange={handleChangeInput}
          ref={register({ required: 'Ingrese una fecha de nacimiento válida.', maxLength: 80 })}
        />
      </FormControl>

      <FormControl htmlFor="firstLabel">
        <input
          id="firstLabel"
          type="text"
          name="firstName"
          placeholder="Apellido Paterno"
          value={firstName}
          onChange={handleChangeInput}
          ref={register({ required: 'Ingrese una fecha de nacimiento válida.', maxLength: 80 })}
        />
      </FormControl>

      <FormControl htmlFor="lastLabel">
        <input
          id="lastLabel"
          type="text"
          name="lastName"
          placeholder="Apellido Materno"
          value={lastName}
          onChange={handleChangeInput}
          ref={register({ required: 'Ingrese una fecha de nacimiento válida.', maxLength: 80 })}
        />
      </FormControl>

      <FormControl htmlFor="dateLabel">
        <input
          id="dateLabel"
          type={type}
          name="date"
          onFocus={() => setType('date')}
          onBlur={() => setType('text')}
          onChange={handleChangeInput}
          placeholder="Fecha de nacimiento"
          value={type === 'text' ? format(parseISO(date), 'dd/MM/yyyy') : date}
          ref={register({ required: 'Ingrese una fecha de nacimiento válida.', maxLength: 80 })}
        />
      </FormControl>

      <FormHeader>Género</FormHeader>

      <Radio htmlFor="genderLabel">
        <input
          id="phoneLabel"
          type="radio"
          name="gender"
          value="male"
          onChange={handleChangeInput}
          checked={gender === 'male'}
          ref={register({ required: true })}
        />
        Masculino
      </Radio>

      <Radio htmlFor="genderLabel">
        <input
          id="phoneLabel"
          type="radio"
          name="gender"
          value="female"
          onChange={handleChangeInput}
          checked={gender === 'female'}
          ref={register({ required: true })}
        />
        Femenino
      </Radio>
      {errors.phone && <FormErrorMessage>{errors.phone.message}</FormErrorMessage>}

      <FormHeader>¿A quién vamos a asegurar?</FormHeader>

      <Radio htmlFor="onlyMeLabel">
        <input
          id="onlyMeLabel"
          type="radio"
          name="add"
          value="only me"
          onChange={handleChangeInput}
          checked={add === 'only me'}
          ref={register({ required: true })}
        />
        Solo a mí
      </Radio>

      <Radio htmlFor="meAndFamilyLabel">
        <input
          id="meAndFamilyLabel"
          type="radio"
          name="add"
          value="me and family"
          onChange={handleChangeInput}
          checked={add === 'me and family'}
          ref={register({ required: true })}
        />
        A mí y a mi familia
      </Radio>

      <Button isDisabled={!!Object.keys(errors).length}>continuar</Button>
    </form>
  )
}

const AddView = () => {
  const { query } = useRouter()
  const { data, error } = useSWR(query.q?.length ? [`/api/users?seed=${query.q}`] : '', fetcher)

  return (
    <div className={styles.content}>
      <Header
        title="Hola,"
        boldTitle={!data ? '' : data.results[0].name.first}
        subTitle="Valida que los datos sean correctos."
      />
      {!data ? <p>Loading ...</p> : <Add data={formatData(data)} />}
      {error && <p>An error has ocurred</p>}
    </div>
  )
}

export default AddView
