import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App