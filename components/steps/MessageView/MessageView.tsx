import { Header } from '@components/form'
import { Container, NextLink } from '@components/theme'

const MessageView = () => {
  return (
    <Container>
      <Header
        width="full"
        title="¡Gracias por"
        boldTitle="confiar en nosotros!"
        subTitle="Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo
          en las siguientes 48 horas."
      />

      <NextLink href="/dashboard">ir a salud</NextLink>
    </Container>
  )
}

export default MessageView
