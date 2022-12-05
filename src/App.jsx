import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Storage from './components/Pages/Storage'
import Sold from './components/Pages/Sold.jsx'
import ForSale from './components/Pages/ForSale'
import Preparation from './components/Pages/Preparation'
import Home from './components/Pages/Home'
import ProtectedRoutes from './components/Pages/ProtectedRoutes'

function App() {

  return (
    <div className="App">
        <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />

        <Route element={<ProtectedRoutes/>}>
          <Route path='Preparation' element={<Preparation/>} />
          <Route path='Storage' element={<Storage />} />
          <Route path='ForSale' element={<ForSale />} />
          <Route path='Sold' element={<Sold />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
