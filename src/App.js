import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';

import MiPrimerComponente from './components/MiPrimerComponente';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="dashboard" element={<MiPrimerComponente/>}/>
    </Routes>
  );
}

export default App;
