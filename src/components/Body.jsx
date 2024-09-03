import React, { useContext, useEffect, useState } from 'react'
import RestaruantCard from './RestaruantCard'
import userContext from '../Context/UserContext';
import { useDispatch } from 'react-redux';
import { updateName } from '../redux/Slice/UserSlice';




const Body = () => {
 
    
    useEffect(()=>{
      fetchData();
    },[])
    const [data,setdata]=useState([]);
    const [filterdata,setfilterdata]=useState([]);
    const [search,setsearch]=useState();
    //const {setname}=useContext(userContext);
   const dispatch =useDispatch()
   const sendname=(value)=>{
       dispatch(updateName(value));
       console.log(value);
    }

    const fetchData=async()=>{
      const dta=await (await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9368691&lng=80.1847283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")).json();
      
      setdata(dta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setfilterdata(dta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      console.log(dta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[6]);
   }

   const HandleSearch=()=>{
     setfilterdata(data.filter((item)=>{
        return item.info.name.toLowerCase().includes(search);
     }))
   }
   
   if(data.length===0) return <h1>Loding please wait.....</h1> 
  return (
    <div className="flex flex-col my-8">
      <div className='flex gap-2 mb-4 mx-16'>
      <div className=' flex justify-between gap-2 '>
        <input  placeholder='Search ' onChange={(e)=>
          
          setsearch(e.target.value.toLowerCase())}  className='border-gray-300 border-2 border-solid rounded-sm'  />
        <button className='bg-green-100 px-4 rounded-sm text-xm font-semibold'
        onClick={HandleSearch}
        >search</button>
        </div>
    <div className="filter"  >
        
        <button className='bg-gray-100 px-4 rounded-sm text-xm font-semibold px-2 py-1'  onClick={()=>{
           setfilterdata(data.filter((item)=>{
               return  item.info.avgRating > 4.3
            }))
        }} >filter btn</button>
    </div>


    <input className='border-gray-300 border-2 border-solid rounded-sm' onChange={(e)=>sendname(e.target.value)} placeholder='enter your name' />
    </div>


    <div className="flex flex-wrap justify-between gap-8 px-16 my-4" >

      {filterdata.map((item)=>{
         return(  <RestaruantCard data={item} key={item.info.id} /> )
      })}
        
         
         
    </div>
  </div>
  )
}

export default Body