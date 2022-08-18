import { ListItemButton, ListItemIcon, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  MyList,
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
} from '../../styles/appbar';

function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component> 
  );
}

export default Actions;
