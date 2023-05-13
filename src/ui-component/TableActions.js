import { MoreHoriz } from '@mui/icons-material'
import { IconButton, Stack, Tooltip } from '@mui/material'
import { IconRefresh, IconTrash } from '@tabler/icons'
import { useRef, useState } from 'react'
import MenuPopover from '../ui-component/MenuPopover'

export default function TableAction({
  deleteAction,
  showDeleteButton = false,
  showRecoverButton = false,
}) {
  const anchorRef = useRef(null)

  const [open, setOpen] = useState(false)

  const handleOpen = (e) => {
    e.stopPropagation()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        className="Mui-table-action"
      >
        <Tooltip title="More action" placement="top">
          <MoreHoriz />
        </Tooltip>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: '50',
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {showDeleteButton && (
            <Tooltip title="Delete" placement="top">
              <IconButton
                className="Mui-table-action"
                onClick={() => deleteAction()}
              >
                <IconTrash />
              </IconButton>
            </Tooltip>
          )}
          {showRecoverButton && (
            <Tooltip title="Recover" placement="top">
              <IconButton
                className="Mui-table-action"
                onClick={() => deleteAction()}
              >
                <IconRefresh />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </MenuPopover>
    </>
  )
}
