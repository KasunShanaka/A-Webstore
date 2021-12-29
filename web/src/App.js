import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Pages
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartSummary from './pages/CartSummary/CartSummary';

function App() {

  const theme = createTheme({
    palette: {
      common: {
        white: '#FFFAFA'
      },
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
          <Route exact path="/CartSummary" element={<CartSummary />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
