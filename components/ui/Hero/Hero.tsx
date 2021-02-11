import styles from './Hero.module.scss'

interface LocalesData {
  name: string
  filename: string
  alt: string
}

const localesMap: LocalesData[] = [
  {
    name: 'Cómpralo de manera fácil y rápida',
    filename: 'gl_mobile-20x20.png',
    alt: 'mobile icon',
  },
  {
    name: 'Cotiza y compra seguro 100% digital',
    filename: 'gl_mobile-20x20.png',
    alt: 'mobile icon 2',
  },
  {
    name: 'Hasta S/. 12 millones de cobertura anual',
    filename: 'gl_shield-20x20.png',
    alt: 'shield icon',
  },
  {
    name: 'Más de 300 clínicas en todo el Perú',
    filename: 'gl_shield-20x20.png',
    alt: 'shield icon 2',
  },
]

const Hero = () => {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          Seguro de <span>Salud</span>
        </h1>
      </header>
      <div>
        <ul>
          {localesMap.map((locale) => (
            <li key={locale.name} className={styles.box}>
              <div className={styles.flex}>
                <img src={locale.filename} alt={locale.alt} />
                <p>{locale.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <span>© 2021 Compary</span>
      </footer>
    </div>
  )
}

export default Hero
