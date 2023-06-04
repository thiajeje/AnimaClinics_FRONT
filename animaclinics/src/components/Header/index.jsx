import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Logo, Title, ContentArea } from './styles';
import logo from 'assets/logo.svg';
import { useLocation, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 280;

const theme = createTheme({
  palette: {
    primary: {
      main: '#BDD2E6',
    },
  },
});

export default function PermanentDrawerLeft() {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  const handleLogout = () => {
    Cookies.remove('userData');
    history.push('/');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="primary"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* <div></div>
            <div>
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <LockIcon sx={{ mr: 1 }} />
                  Alterar senha
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ExitToAppIcon sx={{ mr: 1 }} />
                  Sair
                </MenuItem>
              </Menu>
            </div> */}
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#BDD2E6',
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <ContentArea>
            <Logo>
              <img src={logo} alt="" />
              <h3>UnaClinics</h3>
            </Logo>
            <div className="navigation">
              <Title className={path === '/dashboard' && 'select'} onClick={() => history.push('/dashboard')}>
                Dashboard
              </Title>
              <Title className={path === '/cadastro-paciente' && 'select'} onClick={() => history.push('/cadastro-paciente')}>
                Cadastro paciente
              </Title>
              <Title className={path === '/anamnese' && 'select'} onClick={() => history.push('/anamnese')}>
                Anamnese
              </Title>
              <Title className={path === '/agendamento' && 'select'} onClick={() => history.push('/agendamento')}>
                Agendamento
              </Title>
              <Title className={path === '/' && 'select'} onClick={handleLogout}>
                Sair
              </Title>
            </div>
          </ContentArea>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
