import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './page/Landing';
import SignUp from '../src/page/Registration';
import Login from '../src/page/Login';
import Dashboard from './page/Dashboard';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Registration' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
