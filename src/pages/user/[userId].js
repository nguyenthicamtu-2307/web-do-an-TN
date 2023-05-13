import UserAPI from '@/api/user'
import MainLayout from '@/layout'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserDetail = () => {
  const router = useRouter()
  const [detailUser, setDetailUser] = useState({})

  const { userId } = router.query

  const fetchDetailUser = async () => {
    const data = await UserAPI.getDetailUser({ id: userId })
    setDetailUser(data.data.data)
  }

  useEffect(() => {
    fetchDetailUser()
  }, [userId])

  return (
    <MainLayout>
      <Box
        sx={{
          borderRadius: '5px',
          border: `2px dashed #333`,
          height: '100%',
        }}
        pt={3}
        pb={2}
        mb={3}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          mb={2}
        >
          <Stack direction="row" justifyContent="center">
            <Avatar
              sx={{ width: '100px', height: '100px' }}
              src={detailUser?.avatarUrl}
              alt={detailUser?.fullName}
            >
              {detailUser?.name}
            </Avatar>
          </Stack>
          <Typography variant="h5" p={2}>
            {detailUser?.fullName}
          </Typography>
        </Box>
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
              Email
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailUser?.email || '-'}
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
              Phone Number
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailUser?.phoneNumber || '-'}
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
              Address
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailUser?.address || '-'}
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
              Bank Name
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailUser?.bankName || '-'}
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
              Bank Account Number
            </Typography>
            <Typography variant="body1" ml={2}>
              {detailUser?.bankAccountNumber || '-'}
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
              isCurrentLocalOfficer
            </Typography>
            <Typography variant="body1" ml={2}>
              {String(detailUser?.isCurrentLocalOfficer) || '-'}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </MainLayout>
  )
}

export default UserDetail
