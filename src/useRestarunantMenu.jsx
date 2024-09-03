import { useEffect, useState } from "react";
import { api } from "./components/Utils";

const useRestarunantMenu=(resid)=>{
    const [resInfo,setresInfo]=useState([]);
    useEffect(()=>{

        fetchData();

    },[])

    const fetchData=async()=>{
        const daa=await fetch(api+resid);
        const json=await daa.json();
        // setresData(json.data.cards);
        //setresmenu(json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card?.itemCards)
        setresInfo(json);
        console.log(json.data.cards[2]);
        
       }
   
    
    return resInfo;    
}
export default useRestarunantMenu;