import { ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
import Actions from './actions';

function appbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}

export default appbarMobile;
