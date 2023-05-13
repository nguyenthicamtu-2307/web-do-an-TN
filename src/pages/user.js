import UserAPI from '@/api/user'
import { disableMenu } from '@/app/constants'
import MainLayout from '@/layout'
import AppDataGrid from '@/ui-component/AppDataGrid'
import ConfirmDialog from '@/ui-component/ConfirmDialog'
import TableAction from '@/ui-component/TableActions'
import { Box, Divider, Typography } from '@mui/material'
import Router from 'next/router'
import { useEffect, useState } from 'react'

const User = () => {
  const [listUser, setListUser] = useState([])
  const [idActive, setIdActive] = useState(0)
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

  const fetchListUser = async () => {
    const data = await UserAPI.getListUser()
    setListUser(data.data.data)
  }

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false)
  }

  const handleSubmitConfirmGroup = async () => {
    try {
      await UserAPI.activeUser({ id: idActive })
      fetchListUser()
      handleCloseConfirmDialog()
    } catch {
      console.error('Error')
    }
  }

  useEffect(() => {
    fetchListUser()
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      maxWidth: 80,
      ...disableMenu,
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      minWidth: 100,
      flex: 1,
      ...disableMenu,
    },
    {
      field: 'address',
      headerName: 'Address',
      minWidth: 100,
      flex: 1,
      ...disableMenu,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 100,
      flex: 1,
      ...disableMenu,
    },
    {
      field: 'isCurrentLocalOfficer',
      headerName: 'Is Officer',
      minWidth: 100,
      ...disableMenu,
    },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: ({ row }) => (
        <TableAction
          showRecoverButton={!row.isCurrentLocalOfficer}
          deleteAction={() => {
            setIdActive(row.id)
            setOpenConfirmDialog(true)
          }}
        />
      ),
      ...disableMenu,
    },
  ]

  return (
    <MainLayout>
      <Box sx={{ flex: 1, height: '100%' }}>
        <Typography variant="h5">User</Typography>
      </Box>

      <Divider my={2} />

      <AppDataGrid
        rows={listUser || []}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        onRowClick={(row) => {
          Router.push(`/user/${row.id}`)
        }}
      />

      <ConfirmDialog
        open={openConfirmDialog}
        handleClose={handleCloseConfirmDialog}
        handleSubmit={handleSubmitConfirmGroup}
        title="Confirm Active Group"
        description="Are you sure, you want to active this user?"
      />
    </MainLayout>
  )
}

export default User
