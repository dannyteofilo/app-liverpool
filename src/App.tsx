import './App.css'
import Login from './shared/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import Home from './pages/Home/Home'
import AuthRoutes from './utils/PublicRoutes'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from "react-redux";
import { logout } from './redux/features/auth';
import { setSearchText } from './redux/features/search'
import Register from './shared/Register/Register'

function App() {

  const userData = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  const handleSearch = (value: string) => {
    console.log('vl.: ', value)
    dispatch(setSearchText(value))
  }
  return (
    <>
      <ToastContainer style={{ zIndex: "99999" }} className="z-[999]" />
      <Loader />
      <Header isLoggedIn={userData.isAuthenticated} user={userData.user?.user.email} onLogoutClick={handleLogout} onChangeSearch={handleSearch} />
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
