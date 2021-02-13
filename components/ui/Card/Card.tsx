import { Flex, Pill, Text } from '@components/theme'
import { FC } from 'react'
import { Icon } from '@components/ui'
import styles from './Card.module.scss'

interface Props {
  maxCoverage: number
  value: string
}

const Card: FC<Props> = ({ maxCoverage, value }) => {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <span>Cuentas con estos beneficios:</span>
      </header>

      <Flex direction="row">
        <Flex direction="column">
          <div className={styles.subHeading}>
            <h4>Cobertura máxima</h4>
          </div>
          <div className={styles.heading}>
            <h3>S/ {maxCoverage}MM</h3>
          </div>
          <Pill>plan {value}</Pill>
        </Flex>

        <div className={styles.img}>
          <img src={`/${value}.png`} alt={`${value} illustration`} />
        </div>
      </Flex>

      <div>
        <ul>
          <li className={styles.inline}>
            <Icon name="favorite" />
            <Text>Lima (zona de cobertura)</Text>
          </li>
          <li className={styles.inline}>
            <Icon name="favorite" />
            <Text>+30 clínicas (en red afiliada)</Text>
          </li>
          <li className={`${styles.inline} ${value === 'basic' ? 'blocked' : ''}`}>
            <Icon name="favorite" />
            <Text>Médico a domicilio</Text>
          </li>
          <li className={`${styles.inline} ${value === 'basic' ? 'blocked' : ''}`}>
            <Icon name="favorite" />
            <Text>Chequeos preventivos</Text>
          </li>
          <li
            className={`${styles.inline} ${
              value === 'basic' || value === 'advanced' ? 'blocked' : ''
            }`}
          >
            <Icon name="favorite" />
            <Text>Reembolso nacional</Text>
          </li>
          <li
            className={`${styles.inline} ${
              value === 'basic' || value === 'advanced' || value === 'premium' ? 'blocked' : ''
            }`}
          >
            <Icon name="favorite" />
            <Text>Reembolso internacional</Text>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
