import { Flex, Pill, Text } from '@components/theme'
import { FC } from 'react'
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
          <li>
            <Text>Lima (zona de cobertura)</Text>
          </li>
          <li>
            <Text>+30 clínicas (en red afiliada)</Text>
          </li>
          <li>
            <Text className={`${value === 'basic' ? 'blocked' : ''}`}>Médico a domicilio</Text>
          </li>
          <li>
            <Text className={`${value === 'basic' ? 'blocked' : ''}`}>Chequeos preventivos</Text>
          </li>
          <li>
            <Text className={`${value === 'basic' || value === 'advanced' ? 'blocked' : ''}`}>
              Reembolso nacional
            </Text>
          </li>
          <li>
            <Text
              className={`${
                value === 'basic' || value === 'advanced' || value === 'premium' ? 'blocked' : ''
              }`}
            >
              Reembolso internacional
            </Text>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
