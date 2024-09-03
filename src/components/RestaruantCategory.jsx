import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaruantCategory = ({data,showItem,setshowsIndex}) => {
   
  //console.log(data);
    const {title,itemCards}=data;
    const handleClick=()=>{
      //console.log("clicked");
      setshowsIndex()
      
    }
    
  return (
    <div className='bg-gray-100 w-6/12 flex flex-col m-auto cursor-pointer ' onClick={handleClick} >
    <div className=' flex justify-between' >
        <h4 className='text-bold p-4' >{title} ({itemCards.length}) </h4>
    <span className=' p-4 px-8'>⬇️</span>
        
    </div>
    {showItem &&  <div>
       <ItemList data={itemCards} />
        </div>}

    </div>
  )
}

export default RestaruantCategory