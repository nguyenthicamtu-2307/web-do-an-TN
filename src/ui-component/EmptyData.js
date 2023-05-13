import { SearchOffOutlined } from '@mui/icons-material'
import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const EmptyData = () => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{}}>
          <SearchOffOutlined sx={{ width: '100px', height: '100px' }} />
        </Box>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          No Results To Show
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EmptyData
