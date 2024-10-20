import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Search/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
