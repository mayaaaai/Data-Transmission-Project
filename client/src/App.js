import { Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute> <Home /> </PublicRoute>} />
        <Route path="/menu" element={<PublicRoute> <Menu /> </PublicRoute>} />
        <Route path="/cart" element={<PrivateRoute> <Cart /> </PrivateRoute>} />
        <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
        <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />
      </Routes>
    </>
  );
}

export default App;
