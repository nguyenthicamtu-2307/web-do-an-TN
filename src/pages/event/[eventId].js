import EventAPI from '@/api/event'
import MainLayout from '@/layout'
import { Box, Button, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const DetailEvent = () => {
  const router = useRouter()
  const [detailEvent, setDetailEvent] = useState({})

  const { eventId } = router.query

  const fetchDetailEvent = async () => {
    const data = await EventAPI.getDetailEvent({ id: eventId })
    setDetailEvent(data.data.data)
  }

  useEffect(() => {
    fetchDetailEvent()
  }, [eventId])

  return (
    <MainLayout>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={() => {
            Router.push(`/event/edit/${eventId}`)
          }}
          variant="outlined"
        >
          Edit Event
        </Button>
      </Box>
      <Stack direction="row" spacing={8} justifyContent="center">
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Name
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailEvent?.name || '-'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Status
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailEvent?.status || '-'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Type
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailEvent?.type || '-'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Description
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailEvent?.description || '-'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Year
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailEvent?.year || '-'}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Start Date
            </Typography>
            <Typography variant="body1" ml={2}>
              {format(
                new Date(detailEvent?.startDate).getTime() || new Date(),
                'dd-MM-yyyy'
              )}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              End Date
            </Typography>
            <Typography variant="body1" ml={2}>
              {format(
                new Date(detailEvent?.endDate).getTime() || new Date(),
                'dd-MM-yyyy'
              )}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Created By
            </Typography>
            <Typography variant="body1" ml={2}>
              {String(detailEvent?.createdBy?.fullName) || '-'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Closed By
            </Typography>
            <Typography variant="body1" ml={2}>
              {String(detailEvent?.closedBy?.fullName) || '-'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            p={1}
          >
            <Typography
              variant="h6"
              sx={{ pr: 0, width: 'auto', minWidth: '100px' }}
            >
              Created At
            </Typography>
            <Typography variant="body1" ml={2}>
              {format(
                new Date(detailEvent?.createdAt).getTime() || new Date(),
                'dd-MM-yyyy'
              )}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </MainLayout>
  )
}

export default DetailEvent
