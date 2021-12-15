import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Pages
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff7700'
      }
    },
    typography: {
      fontSize: 14
    }
  })

  return (
    <ThemeProvider
      theme={theme}
    >

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ShoppingPage />} />
          <Route exact path="/Product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
