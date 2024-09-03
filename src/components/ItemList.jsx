import React from 'react'
import { useDispatch } from 'react-redux'
import { additem } from '../redux/Slice/CartSlice';

const ItemList = ({data}) => {
  // console.log(data);
  const dispatch=useDispatch();
const handleAddItem=(item)=>{
   dispatch(additem(item))
}    
  return (
    <div>
      {/* {props.data[0].card.info.name} */}
     {data.map((item)=>{
        return <div className=' flex justify-between border-b-2 items-center' key={item.card.info.id} >
           <div className='w-9/12 px-4'>
            <h1 className='font-semibold block bg-white-300' >{item.card.info.name} - ₹{item.card.info.price/100}   </h1>
            <p  className=''>{item.card.info.description}</p>
            </div>
            <div className='w-3/12 p-4 relative '> 
              {item.card.info.imageId ?<div className='flex flex-col items-center' >
              <img  className='   object-contain' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId} alt='food' />
              <button className=' bg-white  py-2 w-6/12 rounded-md  text-bold absolute inset-x-12 bottom-1 border-green-700 border-2 text-green-700' 
              onClick={()=>handleAddItem(item)}
              >Add+</button>
              
              </div>
             : <p className='text-bold text-black-200 text-center' >No imagefound </p> }
            </div>
            </div>
     })}
    </div>
  )
}

export default ItemList