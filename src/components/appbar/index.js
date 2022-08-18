import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppbarDesktop from './appbarDesktop';
import AppbarMobile from './appbarMobile';

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
