import * as Yup from 'yup'

const validationSchema = Yup.object({
  numDoc: Yup.number()
    .required('Ingrese un número de documento válido.')
    .positive('Los valores deben ser positivos')
    .integer('Los valores deben ser enteros')
    .max(8, 'Máx. 8'),
  date: Yup.string().required('Ingrese su fecha de nacimiento.'),
  phone: Yup.number()
    .required('Ingrese su número de teléfono.')
    .positive('Los valores deben ser positivos')
    .integer('Los valores deben ser enteros')
    .min(15, 'Máx. 15'),
  terms: Yup.boolean().required('Acepte los términos y condiciones.'),
  terms2: Yup.boolean().required('Acepte los términos y condiciones.'),
})

export default validationSchema
