import { Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </>
  );
}

export default App;
