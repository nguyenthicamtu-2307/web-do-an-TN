import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StorageUtil, { STORAGE_KEY } from '../storage'

export const RouteGuard = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    hideContent()
    authCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const hideContent = () => setAuthorized(false)

  function authCheck() {
    if (typeof window !== 'undefined') {
      if (!StorageUtil.get(STORAGE_KEY['JWT'])) {
        setAuthorized(false)
        navigate('/login')
      } else {
        setAuthorized(true)
      }
    }
  }

  return authorized && children
}
