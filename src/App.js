import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/Layout/about';
import Sidebar from './components/Sidebar'

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element = {<Layout />}>
    <Route path='/about' element = {<About />}></Route>
    <Route path='/sidebar' element = {<Sidebar />}>
    </Route>
    </Route>
   </Routes>
   </>
  );
}

export default App;
