// Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../Assets/CVLogo.png';
import './header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'News', to: '/news' },
    { text: 'Regeln', to: '/regeln' },
    { text: 'FAQ', to: '/faq' },
    { text: 'Team', to: '/team' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#060505', padding: '20px' }}>
      <Toolbar>
      <img src={logo} alt="Logo" style={{width: 90}} /> {/* Fügen Sie Ihr Logo hier ein */}
        <NavLink className='logo-text' to="/">
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: 'white',
              width: 250,
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: 'rgb(211, 117, 255)', // Purple color on hover
              },
              fontFamily: 'Outfit',
            }}
          >
            CENTRAL - V
          </Typography>
        </NavLink>

        {/* Menü-Button für kleinere Bildschirme */}
        <Button onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' }, marginLeft: 'auto' }}>
          <MenuIcon sx={{ color: 'white' }} />
        </Button>

        {/* Links auf der rechten Seite für größere Bildschirme */}
        <Grid container spacing={0} justifyContent="end" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item, index) => (
            <Grid item key={index}>
              <NavLink className='menu-text' to={item.to}>
                <Button color="inherit" sx={{ fontSize: '22px', fontFamily: 'Outfit' }}>{item.text}</Button>
              </NavLink>
            </Grid>
          ))}

          <Grid item>
            <NavLink className='menu-text' to="/login">
              <Button color="inherit" sx={{ marginLeft: 15, fontSize: '26px', fontFamily: 'Outfit', color: 'rgb(211, 117, 255)' }}>
                Login
              </Button>
            </NavLink>
          </Grid>
        </Grid>

        {/* Ausfahrbares Menü für kleinere Bildschirme */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black', width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={() => setDrawerOpen(false)}>
                <NavLink className='menu-text' to={item.to}>
                  <Typography variant="h6" sx={{ color: 'white' }}>{item.text}</Typography>
                </NavLink>
              </ListItem>
            ))}
            <ListItem onClick={() => setDrawerOpen(false)}>
              <NavLink className='menu-text' to="/login">
                <Typography variant="h6" sx={{ color: 'white' }}>Login</Typography>
              </NavLink>
            </ListItem>

          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
