import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NavbarFunction from './components/Navbar';
import Favorite from './components/Favorite';

function App() {
  return (<>
    <NavbarFunction />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Favorite' element={<Favorite />}></Route>
    </Routes>
    </>
  );
}

export default App;