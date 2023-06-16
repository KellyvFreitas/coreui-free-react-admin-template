import React, { useEffect, useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
} from '@coreui/react'
import api from '../services/api'
import { cilCheck } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Wall = () => {
  let [list, setList] = useState([])

  useEffect(() => {
    const req = async () => {
      let json = await api.getWall()
      if (json.error === '') {
        setList(
          json.list.map((i) => ({
            ...i,
            actions: (
              <CButtonGroup>
                <CButton color="info">Editar</CButton>
                <CButton color="danger">Excluir</CButton>
              </CButtonGroup>
            ),
          })),
        )
      } else {
        alert(json.error)
      }
    }
    req()
  }, [])

  const fields = [
    { label: 'Título', key: 'title' },
    { label: 'Data de criação', key: 'datecreated', _style: { width: '200px' } },
    { label: 'Ações', key: 'actions', _style: { width: '1px' } },
  ]

  return (
    <CRow>
      <CCol>
        <h2>Mural de Avisos</h2>
        <CCard>
          <CCardHeader>
            <CButton color="primary">
              <CIcon icon={cilCheck} /> Novo Aviso
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable items={list} columns={fields} striped hover bord />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Wall
