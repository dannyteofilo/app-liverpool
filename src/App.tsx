import './App.css'
import Login from './shared/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import Home from './pages/Home/Home'
import AuthRoutes from './utils/PublicRoutes'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loader from './components/Loader/Loader'

function App() {
  return (
    <>
      <ToastContainer style={{ zIndex: "99999" }} className="z-[999]" />
      <Loader/>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route element={<Login />} path="/login" />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
