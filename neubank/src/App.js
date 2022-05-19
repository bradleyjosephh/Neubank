import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Admin from './pages/Admin'
import Customer from './pages/Customer'
import EditAdmin from './pages/EditAdmin'
import Navbar from './components/Navbar/'

const App = () => {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Customer />}/>
        <Route path='/Admin' element={<Admin />} />
        <Route path='/EditAdmin' element={<EditAdmin />} />
      </Routes>
    </Router>
   
    </>
  )
}

export default App

