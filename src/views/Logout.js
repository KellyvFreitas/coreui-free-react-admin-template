import { useEffect } from 'react'
import useApi from '../services/api'
import { useNavigate } from 'react-router-dom'

export default () => {
  const api = useApi()
  const navigate = useNavigate()
  useEffect(() => {
    const doLogout = async () => {
      await api.logout()
      navigate('/login')
    }
    doLogout()
  }, [])
  return null
}
