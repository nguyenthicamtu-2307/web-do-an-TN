import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import EmptyData from './EmptyData'

const AppDataGrid = (props) => {
  function customNoRowsOverlay() {
    return (
      <Box mt="15vh">
        <EmptyData />
      </Box>
    )
  }

  return (
    <DataGrid
      {...props}
      autoHeight
      checkboxSelection={false}
      paginationMode="server"
      components={{
        NoRowsOverlay: customNoRowsOverlay,
        NoResultsOverlay: customNoRowsOverlay,
      }}
      sx={{
        border: 'none',
        '& .Mui-table-action': {
          cursor: 'pointer',
        },
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
        '& .MuiDataGrid-columnSeparator--sideRight': {
          display: 'none',
        },
        '& .MuiDataGrid-virtualScroller': {
          minHeight: '50vh !important',
        },
      }}
    />
  )
}

export default AppDataGrid
