import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function Appbar() {
  const theme = useTheme();
  const matchers = useMediaQuery(theme.breakpoints.down('md'));

  console.log('The matchers: ', matchers);

  return <>{matchers ? <h1>Mobile</h1> : <h1>Desktop</h1>}</>;
}

export default Appbar;
