import React ,{useContext}from 'react'
import TAMBARAM from './TAMBARAM.png'
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../Context/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
  // const {loggedInUser}=useContext(userContext);
   const cartItem=useSelector((store)=>store.cart.items)
  // console.log(cartItem);
  const name=useSelector((store)=>store.name.name)
  return (
    <div className='flex justify-between p-50 items-center' >
    
    <img src={TAMBARAM}className='w-40 ' alt='logo'/>
      
    
    <div className='flex justify-between list-none mr-10 '>
          {/* <li  onClick={()=>navigate('/')}  >Home</li> */}
          <li  className=' px-6'> <Link to='/'>  Home  </Link> </li>
          <li className=' px-6' > <Link to='/about'>  About us  </Link> </li>
          <li className=' px-6' > <Link to='/contactus'>  Contact us  </Link> </li>
          <li className=' px-6 text-bold ' > <Link to='/cart'>  cart ({cartItem.length} items) </Link> </li>
          <li className='text-bold' >{name}</li>
          {/* <li onClick={()=>navigate('/about') } >About</li>
          <li onClick={()=>navigate('/contactUs')}  >  Contact us</li>
          <li onClick={()=>navigate('/cart')} >Cart</li> */}
    </div>
  </div>
  )
}

export default Header