import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SideBar from './sidebar'
import '../app/globals.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const MainLayout = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ padding: 2 }}>{children}</Box>
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}

export default MainLayout
