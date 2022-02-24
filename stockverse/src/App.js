
import './App.css';
import { Routes, Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Form from './components/Form/Form';
import Home from './components/Home/Home';

import Payment from './components/Payment/Payment'
import Portfolio from './components/Portfolio/Portfolio'
import Dashboard from './components/Dashboard/Dashboard'
import Wishlist from './components/Wishlist/Wishlist';
import Register from './components/Register/Register';

function App() {
  
  return (
    <>
    <Routes>
       <Route exact path='/' element={ <Form />}  />
       <Route exact path='/login' element={ <Form />}  />
       <Route exact path='/register' element={ <Register />}  />
       <Route exact path='/home' element={ <Home/>}/>      
       <Route exact path='/dashboard' element={ <Dashboard />}/>
       <Route exact path='/payment' element={ <Payment />}/>
       <Route exact path='/portfolio' element={ <Portfolio />}/>
       <Route exact path='/wishlist' element={ <Wishlist />}/>
       <Route exact path='*' element={ <PageNotFound />}/>
     </Routes>      
    </>    
  );
}

export default App;