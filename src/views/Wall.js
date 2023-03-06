/* eslint-disable*/
import React, { useState, useEffect } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CDataTable } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import useApi from '../services/api'

export default () => {
  const api = useApi()

  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  const fields = [
    { label: 'Título', key: 'title' },
    { label: 'Data de criação', key: 'datecreated' },
    { label: 'Ações', key: 'actions' },
  ]

  useEffect(() => {
    getList()
  }, [])

  const getList = async (async) => {
    setLoading(true)
    const result = await api.getWall()
    setLoading(false)
    if (result.error === '') {
      setList(result.list)
    } else {
      alert(result.error)
    }
  }

  return (
    <CRow>
      <CCol>
        <h2>Mural de Aviso 📢</h2>

        <CCard>
          <CCardHeader>
            <CButton color="primary">Novo aviso</CButton>
          </CCardHeader>
          <CCardBody></CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
