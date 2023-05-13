import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export default function ConfirmDialog({
  open,
  handleClose,
  handleSubmit,
  title,
  description,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={title}
      aria-describedby={description}
      maxWidth="xs"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>

      <DialogActions>
        {handleClose && <Button onClick={handleClose}>Cancel</Button>}
        {handleSubmit && <Button onClick={handleSubmit}>Agree</Button>}
      </DialogActions>
    </Dialog>
  )
}
