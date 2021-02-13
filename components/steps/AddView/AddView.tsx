/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'
import { format, parseISO } from 'date-fns'

import fetcher from '@utils/fetcher'
import { StateModel, useUser } from '@components/context'
import formatData from '@utils/formatData'
import {
  FormControl,
  FormErrorMessage,
  FormHeader,
  Header,
  NroDocInput,
  Radio,
  Select,
} from '@components/form'
import { Button, Container, StepLink } from '@components/theme'

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
            type="number"
            name="numDoc"
            placeholder="Nro de Documento"
            value={numDoc}
            onChange={handleChangeInput}
            ref={register({
              required: 'Ingrese un Nro de Documento válido.',
              maxLength: { value: 8, message: 'Máx. 8' },
            })}
          />
        </NroDocInput>
      </div>
      <FormErrorMessage> {errors.numDoc && <>{errors.numDoc.message}</>}</FormErrorMessage>

      <FormControl htmlFor="titleLabel">
        <input
          id="titleLabel"
          type="text"
          name="title"
          placeholder="Nombres"
          value={title}
          onChange={handleChangeInput}
          ref={register({
            required: 'Ingrese su nombre.',
            maxLength: { value: 30, message: 'Máx. 30' },
          })}
        />
      </FormControl>
      <FormErrorMessage> {errors.title && <>{errors.title.message}</>}</FormErrorMessage>

      <FormControl htmlFor="firstLabel">
        <input
          id="firstLabel"
          type="text"
          name="firstName"
          placeholder="Apellido Paterno"
          value={firstName}
          onChange={handleChangeInput}
          ref={register({
            required: 'Ingrese su apellido paterno.',
            maxLength: { value: 30, message: 'Máx. 30' },
          })}
        />
      </FormControl>
      <FormErrorMessage> {errors.firstName && <>{errors.firstName.message}</>}</FormErrorMessage>

      <FormControl htmlFor="lastLabel">
        <input
          id="lastLabel"
          type="text"
          name="lastName"
          placeholder="Apellido Materno"
          value={lastName}
          onChange={handleChangeInput}
          ref={register({
            required: 'Ingrese su apellido materno.',
            maxLength: { value: 30, message: 'Máx. 30' },
          })}
        />
      </FormControl>
      <FormErrorMessage> {errors.lastName && <>{errors.lastName.message}</>}</FormErrorMessage>

      <FormControl htmlFor="dateLabel">
        <input
          id="dateLabel"
          type={type}
          name="date"
          min="1900-01-01"
          onFocus={() => setType('date')}
          onBlur={() => setType('text')}
          onChange={handleChangeInput}
          placeholder="Fecha de nacimiento"
          value={type === 'text' ? format(parseISO(date), 'dd/MM/yyyy') : date}
          ref={register({ required: 'Ingrese una fecha de nacimiento válida.' })}
        />
      </FormControl>
      <FormErrorMessage> {errors.date && <>{errors.date.message}</>}</FormErrorMessage>

      <FormHeader>Género</FormHeader>

      <Radio htmlFor="genderLabel">
        <input
          id="phoneLabel"
          type="radio"
          name="gender"
          value="male"
          onChange={handleChangeInput}
          checked={gender === 'male'}
          ref={register({ required: 'Elija una opción' })}
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
          ref={register({ required: 'Elija una opción' })}
        />
        Femenino
      </Radio>
      <FormErrorMessage> {errors.gender && <>{errors.gender.message}</>}</FormErrorMessage>

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
          ref={register({ required: 'Elija una opción' })}
        />
        A mí y a mi familia
      </Radio>
      <FormErrorMessage> {errors.add && <>{errors.add.message}</>}</FormErrorMessage>

      <Button isDisabled={!!Object.keys(errors).length}>continuar</Button>
    </form>
  )
}

const AddView = () => {
  const { query } = useRouter()
  const { data, error } = useSWR(query.q?.length ? [`/api/users?seed=${query.q}`] : '', fetcher)

  return (
    <Container>
      <StepLink number={1} href="/" />
      <Header
        title="Hola,"
        boldTitle={!data ? '' : data.results[0].name.first}
        subTitle="Valida que los datos sean correctos."
      />
      {!data ? <p>Loading ...</p> : <Add data={formatData(data)} />}
      {error && <p>An error has ocurred</p>}
    </Container>
  )
}

export default AddView
