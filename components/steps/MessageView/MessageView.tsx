import { Header } from '@components/form'
import { Button, Container } from '@components/theme'

const MessageView = () => {
  return (
    <Container>
      <Header
        title="¡Gracias por"
        boldTitle="confiar en nosotros!"
        subTitle="Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo
          en las siguientes 48 horas."
      />

      <Button isDisabled={false}>ir a salud</Button>
    </Container>
  )
}

export default MessageView
