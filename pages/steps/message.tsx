import { Background, Grid } from '@components/theme'
import { MessageView } from '@components/steps'

const MessagePage = () => {
  return (
    <Grid cols="cols_2">
      <Background />
      <MessageView />
    </Grid>
  )
}

export default MessagePage
