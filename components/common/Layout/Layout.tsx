import { FC } from 'react'
import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => <main className={styles.container}>{children}</main>

export default Layout
