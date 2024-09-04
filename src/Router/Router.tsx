import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../view/pages/Home';

export function Router(){
 return(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />}/>
  </Routes>
  </BrowserRouter>
 ) 
}