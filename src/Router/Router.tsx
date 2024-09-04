import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../view/pages/Home';
import { Characters } from '../view/pages/Characters';

export function Router(){
 return(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/characters' element={<Characters />}/>
  </Routes>
  </BrowserRouter>
 ) 
}