import { AppBar, Button, Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import theme from './styles/theme';

function App() {
  useEffect(() => {
    document.title = 'MUI-Ecommerce - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <Button variant="outlined">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

// {
//   components to build
// AppBar,
// Banner
// Promotions
// title
// Products
// serch box
// app drawer
// }
