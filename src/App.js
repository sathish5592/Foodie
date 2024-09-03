import './App.css';
import AboutUS from './components/AboutUS';
import Body from './components/Body';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom'
import Nopage from './components/Nopage';
import RestaruantPage from './components/RestaruantPage';
import userContext from './Context/UserContext';
import { useState } from 'react';
import {Provider} from 'react-redux'
import AppStore from './redux/AppStore';





function App() {
  
  return (
    <Provider store={AppStore} > 
    {/* <userContext.Provider value={{loggedInUser:name,setname}} > */}
    <div className="App">
        <Header/>
       <Routes>
   
           <Route element={<Body/>} path='/' />
           <Route element={<AboutUS/>} path='/about' />
           <Route element={<ContactUs/>} path='/contactUs' />
           <Route element={<Cart/>} path='/cart' />
           <Route element={<RestaruantPage/>} path='/restaurant/:resid' />

           <Route element={<Nopage/>} path='*' />
      
   </Routes>
    </div>
    {/* </userContext.Provider> */}
    </Provider>
  );
}

export default App;
