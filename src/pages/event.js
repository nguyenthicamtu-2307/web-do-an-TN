import EventAPI from '@/api/event'
import { availableStatusEvent, disableMenu, typeEvent } from '@/app/constants'
import MainLayout from '@/layout'
import AppDataGrid from '@/ui-component/AppDataGrid'
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { format } from 'date-fns'
import Router from 'next/router'
import { useEffect, useState } from 'react'

const Event = () => {
  const [listEvent, setListEvent] = useState([])
  const [eventType, setEventType] = useState('STORM')

  const fetchListEvent = async (type) => {
    const data = await EventAPI.getListEvent({ types: type })
    setListEvent(data.data.data)
  }

  useEffect(() => {
    fetchListEvent(eventType)
  }, [eventType])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      maxWidth: 80,
      ...disableMenu,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 100,
      flex: 2,
      ...disableMenu,
    },
    {
      field: 'startAt',
      headerName: 'Start At',
      flex: 1,
      ...disableMenu,
      valueGetter: (params) => {
        const modifiedDate = new Date(params?.row.startAt).getTime()
        return `${format(modifiedDate || new Date(), 'dd-MM-yyyy')} `
      },
    },
    {
      field: 'endAt',
      headerName: 'End At',
      flex: 1,
      ...disableMenu,
      valueGetter: (params) => {
        const modifiedDate = new Date(params?.row.endAt).getTime()
        return `${format(modifiedDate || new Date(), 'dd-MM-yyyy')} `
      },
    },
    {
      field: 'createdBy',
      headerName: 'Create By',
      flex: 1,
      ...disableMenu,
      valueGetter: (params) => {
        return params?.row.createdBy.fullName
      },
    },
    {
      field: 'type',
      headerName: 'Type',
      minWidth: 100,
      flex: 1,
      ...disableMenu,
    },
    {
      field: 'action',
      headerName: 'Status',
      flex: 1.2,
      renderCell: ({ row }) => {
        return (
          <>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={row.status}
                onChange={async (e) => {
                  await EventAPI.changeStatusEvent({
                    id: row.id,
                    action: e.target.value.toLowerCase(),
                  })
                  fetchListEvent()
                }}
              >
                {availableStatusEvent.map((item) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )
      },
      ...disableMenu,
    },
  ]

  return (
    <MainLayout>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        mb={2}
      >
        <Typography variant="h5">Event</Typography>
        <Button variant="outlined" onClick={() => Router.push('event/create')}>
          Create Event
        </Button>
      </Box>

      <Divider my={2} />

      <Box mt={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControl sx={{ width: '20%' }}>
          <InputLabel id="demo-simple-select-label">Type Event</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type Event"
            value={eventType}
            onChange={async (e) => {
              setEventType(e.target.value)
            }}
          >
            {typeEvent.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <AppDataGrid
        rows={listEvent || []}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        onRowClick={(row) => {
          Router.push(`/event/${row.id}`)
        }}
      />
    </MainLayout>
  )
}

export default Event
