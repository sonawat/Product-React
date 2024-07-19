import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import Home from './component/home'
import Login from './component/Login'
import About from './component/About'
import './App.css'
export default function App()
{
  return(
    <>
      <BrowserRouter>

      <Table striped variant='dark'>
        <tbody>
          <tr style={{padding:'50px'}}>
            <th className='abc'>Select Your Product</th>
            <th><NavLink className='ab' to="/Home">Home</NavLink></th>
            <th><NavLink className='ab' to="/About">Bill</NavLink></th>
            <th><NavLink className='ab' to="/Login">Login</NavLink></th>
            <th><NavLink className='ab' to="/Signup">Sign Up</NavLink></th>
          </tr>
        </tbody>
      </Table>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/ani/:a/:b' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
