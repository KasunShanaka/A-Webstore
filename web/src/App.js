import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ShoppingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
