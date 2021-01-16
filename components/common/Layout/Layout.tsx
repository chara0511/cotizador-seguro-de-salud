import { FC } from 'react'
import { Footer, Header } from '@components/common'

const Layout: FC = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
