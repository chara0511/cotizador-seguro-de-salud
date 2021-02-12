import { useCallback } from 'react'

import { useUser, VIEW } from '@components/context'
import { Header } from '@components/form'
import { Card } from '@components/ui'
import styles from './PlanView.module.scss'

const PlanView = () => {
  const { view, toggleView } = useUser()

  const filterPlan = Object.entries({
    basic: { plan: 'básico', price: 160 },
    advanced: { plan: 'avanzado', price: 200 },
    premium: { plan: 'premium', price: 250 },
    full: { plan: 'full', price: 500 },
  })

  const handlePlanBenefits = useCallback((value: VIEW) => {
    switch (value) {
      case 'basic':
        return <Card maxCoverage={1} value={value} />

      case 'advanced':
        return <Card maxCoverage={5} value={value} />

      case 'premium':
        return <Card maxCoverage={10} value={value} />

      case 'full':
        return <Card maxCoverage={15} value={value} />

      default:
        throw new Error(`Unhandled view card`)
    }
  }, [])

  return (
    <div className={styles.content}>
      <Header
        title="Elige"
        boldTitle="tu protección"
        subTitle="Selecciona tu plan de salud ideal."
      />

      {filterPlan.map(([key, object]) => (
        <button
          type="button"
          key={key}
          onClick={() => toggleView(key)}
          className={`${view === key ? 'active' : ''}`}
        >
          <div>
            <span>{object.plan}</span>
            <h3>S/ {object.price}</h3>
            <span>mensual</span>
          </div>
        </button>
      ))}

      {handlePlanBenefits(view)}
    </div>
  )
}

export default PlanView
