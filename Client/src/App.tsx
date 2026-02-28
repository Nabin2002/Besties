import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Signup from "./components/Signup";
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Signup/>
    </BrowserRouter>
  )
}

export default App