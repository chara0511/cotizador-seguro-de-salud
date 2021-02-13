import { Button, Container } from '@components/theme'

const MessageView = () => {
  return (
    <Container>
      <div>
        <h1>¡Gracias por confiar en nosotros!</h1>
      </div>
      <div>
        <p>
          Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo
          en las siguientes 48 horas.
        </p>
      </div>
      <Button isDisabled={false}>ir a salud</Button>
    </Container>
  )
}

export default MessageView
