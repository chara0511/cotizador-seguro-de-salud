import { FC } from 'react'

interface Props {
  maxCoverage: number
  value: string
}

const Card: FC<Props> = ({ maxCoverage, value }) => {
  return (
    <div>
      <span>Cuentas con estos beneficios:</span>
      <h4>Cobertura máxima</h4>
      <h3>S/ {maxCoverage}MM</h3>

      <div>
        <span>plan básico</span>
      </div>

      <div>
        <ul>
          <li>Lima (zona de cobertura)</li>
          <li>+30 clínicas (en red afiliada)</li>
          <li className={`${value === 'basic' ? 'blocked' : ''}`}>Médico a domicilio</li>
          <li className={`${value === 'basic' ? 'blocked' : ''}`}>Chequeos preventivos</li>
          <li className={`${value === 'basic' || value === 'advanced' ? 'blocked' : ''}`}>
            Reembolso nacional
          </li>
          <li
            className={`${
              value === 'basic' || value === 'advanced' || value === 'premium' ? 'blocked' : ''
            }`}
          >
            Reembolso internacional
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
