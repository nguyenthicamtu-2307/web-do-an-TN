import PersonIcon from '@mui/icons-material/Person'
import TodayIcon from '@mui/icons-material/Today'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material'
import Router from 'next/router'

const SideBar = () => {
  const handleClick = (path) => {
    Router.push(path)
  }

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        height: '100vh',
        padding: 2,
        color: '#fff',
      }}
    >
      <Box
        mt={4}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar sizes="large">A</Avatar>
        <Typography>Admin</Typography>
      </Box>

      <Divider sx={{ my: 2, backgroundColor: '#fff' }} />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: 'black', color: '#fff' }}
          >
            Management
          </ListSubheader>
        }
      >
        <ListItemButton onClick={() => handleClick('/user')}>
          <ListItemIcon>
            <PersonIcon sx={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="User" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick('/event')}>
          <ListItemIcon>
            <TodayIcon sx={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Event" />
        </ListItemButton>
      </List>
    </Box>
  )
}

export default SideBar
