import logo from './logo.svg';
import Navigation from './Navigation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/users' element={<Users/>}/>

      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
