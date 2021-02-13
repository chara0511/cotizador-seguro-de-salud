import { useCallback } from 'react'

import { useUser, VIEW } from '@components/context'
import { Header } from '@components/form'
import { Accordion, Card } from '@components/ui'
import { Button, Container, Flex, PlanButton } from '@components/theme'

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
    <Container>
      <Header
        title="Elige"
        boldTitle="tu protección"
        subTitle="Selecciona tu plan de salud ideal."
      />

      <Flex>
        {filterPlan.map(([key, object]) => (
          <PlanButton
            key={key}
            handleClick={() => toggleView(key)}
            className={`${view === key ? 'active' : 'desactive'}`}
          >
            <div>
              <span>{object.plan}</span>
              <h3>
                <span>S/ </span>
                {object.price}
              </h3>
              <span>mensual</span>
            </div>
          </PlanButton>
        ))}
      </Flex>

      {handlePlanBenefits(view)}

      <div style={{ maxWidth: '350px' }}>
        <Header title="Revisa nuestros" boldTitle="servicios y exclusiones" />
      </div>

      <Flex direction="column">
        <Accordion title="Servicios Brindados">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, aspernatur unde
          laborum, consequatur sed similique consequuntur nulla eum quibusdam amet eligendi earum
          cumque nihil ipsa debit,
        </Accordion>

        <Accordion title="Exclusiones">
          Lorem ipsum dolor adipisicing elit. Voluptate, aspernatur unde laborum, consequatur sed
          similique consequuntur nulla eum quibusdam amet eligendi earum cumque nihil ipsa debit,
        </Accordion>
      </Flex>

      <Flex>
        <span>enviar cotización por correo</span>

        <Button isDisabled={false}>comprar plan</Button>
      </Flex>
    </Container>
  )
}

export default PlanView
