import { Background, Grid } from '@components/theme'
import { Hero, LoginView } from '@components/ui'

export default function Home() {
  return (
    <Grid cols="cols_3">
      <Hero />
      <Background />
      <LoginView />
    </Grid>
  )
}
