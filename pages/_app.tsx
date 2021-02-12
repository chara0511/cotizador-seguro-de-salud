import type { AppProps } from 'next/app'
import { Layout } from '@components/common'
import '../styles/index.scss'
import { ManagedUserContext } from '@components/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManagedUserContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ManagedUserContext>
  )
}

export default MyApp
