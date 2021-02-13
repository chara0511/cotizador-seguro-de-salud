import { FC } from 'react'

import { Arrow, Error, Favorite, Hospital, Payment, Phone, Shield } from '@components/icons'

interface Props {
  name: string
}

const Icon: FC<Props> = ({ name }) => {
  switch (name) {
    case 'arrow':
      return <Arrow />

    case 'error':
      return <Error />

    case 'favorite':
      return <Favorite />

    case 'hospital':
      return <Hospital />

    case 'payment':
      return <Payment />

    case 'phone':
      return <Phone />

    case 'shield':
      return <Shield />

    default:
      return <Error />
  }
}

export default Icon
