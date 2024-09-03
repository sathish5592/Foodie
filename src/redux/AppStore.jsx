import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './Slice/CartSlice';
import UserSlice from './Slice/UserSlice';
const AppStore=configureStore({

   reducer:{
    cart:CartReducer,
    name:UserSlice
   },


});

export default AppStore;