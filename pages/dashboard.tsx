/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useUser } from '@components/context'
import { Button } from '@components/theme'

const DashboardPage = () => {
  const router = useRouter()
  const { values, restartValues } = useUser()

  useEffect(() => {
    if (!values) {
      router.push(
        {
          pathname: `/`,
        },
        undefined,
        { shallow: true },
      )
    }
  }, [values])

  const handleLogout = () => {
    restartValues()
  }

  return (
    <div>
      <h1>
        Hello <strong>{values?.firstName}</strong>, from DashBoard.tsx
      </h1>
      <br />
      <Button isDisabled={false} button handleClick={() => handleLogout()}>
        Logout
      </Button>
    </div>
  )
}

export default DashboardPage
