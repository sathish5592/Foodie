import { useNavigate } from "react-router-dom";

const RestaruantCard=(props)=>{

  const navigate=useNavigate();
    return(
      <div className=" bg-amber-50  w-[300px] object-contain shadow-lg rounded-xl "  onClick={()=>navigate("/restaurant/"+props.data.info.id)} >
      
        { <img   className="w-[300px] object-cover h-[200px] rounded-t-lg "   src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.data.info.cloudinaryImageId}alt="card" /> }
          <h3 className="text-bold px-4 py-2" >{props.data.info.name}</h3>
           <p  className=" overflow-hidden truncate max-w-full leading-tight h-10 w-[300px] p-4">{props.data.info.cuisines.join(", ")}</p>
          <div className="flex justify-between py-4" >
          <h5 className="px-4 py-0 text-bold" >{props.data.info.avgRating}</h5>
          <h5 className="px-4  rounded-md mr-4 text-bold" >{props.data.info.sla.deliveryTime+ " mins"}</h5> 
          </div>
      </div>
    )
   }
export default RestaruantCard;  