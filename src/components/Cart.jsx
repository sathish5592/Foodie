import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart } from '../redux/Slice/CartSlice';

const Cart = () => {

  const cartItem=useSelector((store)=>store.cart.items);
  console.log("kk");
  console.log(cartItem);
  const dispatch=useDispatch();
  const clearItems=()=>{
       dispatch(clearcart())
  }
  //const total=0;

  // for(let i=0;i<cartItem.length;i++){
  //  // total=total+(cartItem?.card.info.price)/100;
  //   console.log(cartItem?.card.info.price);
  // }
  
  return (
    <div className='flex flex-col items-center' >
      <h1 className='text-bold text-2xl text-center' >Cart</h1>

   {cartItem.length==0? <h4 className='text-bold text-2xl' >Cart is empty add some foods😘 </h4>:
   
   
        <div className='flex flex-col items-center'> {cartItem.map((item)=>{
         return  <div className=' flex justify-between border-b-2 items-center w-6/12 mx-auto bg-gray-100 my-2' key={item.card.info.id} >
         <div className='w-9/12 px-4'>
          <h1 className='font-semibold block bg-white-300' >{item.card.info.name} - ₹{item.card.info.price/100}   </h1>
          <p  className=''>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 p-4 relative '> 
            {item.card.info.imageId ?<div className='flex flex-col items-center' >
            <img  className='   object-contain' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId} alt='food' />
          <button className=' bg-white  py-2 w-6/12 rounded-md  text-bold absolute inset-x-12 bottom-1 border-red-700 border-2 text-red-700'
            >Remove</button>
            
            </div>
           : <p className='text-bold text-black-200 text-center' >No imagefound </p> }
          </div>
          </div>
      })}
      <button className='bg-black py-2 px-4 text-white text-bold text-xl my-4 rounded-md'  onClick={clearItems} >Clear Cart</button>
    
    </div>  }
    
    </div>
  )
}

export default Cart