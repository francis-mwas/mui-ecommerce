import { ListItemText } from '@mui/material';
import React from 'react';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';

function appbarDesktop({ matchers }) {
  <AppbarContainer>
    <AppbarHeader>My Bags</AppbarHeader>
    <MyList>
      <ListItemText primary="Home" />
      <ListItemText primary="Categories" />
      <ListItemText primary="Products" />
      <ListItemText primary="Contact Us" />
    </MyList>
  </AppbarContainer>;
}

export default appbarDesktop;
