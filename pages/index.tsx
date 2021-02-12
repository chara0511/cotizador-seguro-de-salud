import { Hero, LoginView } from '@components/ui'

export default function Home() {
  return (
    <div className="Grid cols_1">
      <Hero />
      <div className="Fill" />
      <LoginView />
    </div>
  )
}
