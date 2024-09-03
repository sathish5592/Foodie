import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import RestaruantCategory from './RestaruantCategory';

const RestaruantPage = () => {
    const [resData,setresData]=useState([]);
    const[resmenu,setresmenu]=useState([]);
    
   const api="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.7908316&lng=78.69801489999999&restaurantId=";
    const {resid}=useParams();
   

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData=async()=>{
     const daa=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.7908316&lng=78.69801489999999&restaurantId="+resid);
    
    //                      https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.7908316&lng=78.69801489999999&restaurantId=297853&catalog_qa=undefined&submitAction=ENTER
    //                      https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.7908316&lng=78.69801489999999&restaurantId=175168&catalog_qa=undefined&submitAction=ENTER
    const json=await daa.json();
      setresData(json.data.cards);
     setresmenu(json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card?.itemCards)
      console.log(json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards);
     
    }
    const category=resData[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>{
    return   c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
})

const [showIndex,setshowIndex]=useState(0);
console.log(category);

  return (
    <div  className='resPage-container'  >
         
      <h1 className=' text-center text-bold text-3xl' >{resData[0]?.card.card.info.name}</h1>
      <h1 className=' text-center text-bold text-3xl' >{resData[0]?.card.card.info.avgRating}</h1>
      <h1  className=' text-center text-bold text-3xl' >{resData[0]?.card.card.info.cuisines.join(" , ")}</h1>
      {/* {resmenu.map((item)=>{
       return <div  key={item.card.info.id}  className='menu-list'>
        
       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} alt='img' height={50} width={50} />
         <h5>{item.card?.info.name}</h5>
         <h5> Rs. {(item.card.info.price/100)} only</h5>
         <h5>{item.card.info.ratings.aggregatedRating.rating}</h5>
        
        </div>
      })}
        */}



    {category?.map((restaruant,index)=>{
      return <div key={restaruant.card?.card?.title} className='flex m-4' ><RestaruantCategory  data={restaruant.card?.card} showItem={index===showIndex? true:false} setshowsIndex={()=>setshowIndex(index)} /></div>
    })}


    </div>
  )
}

export default RestaruantPage