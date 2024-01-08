import { useEffect, useState } from "react";
import { MENUDATA_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchRestaurantData();
    },[])
    const {resId}=useParams();
    const[resInfo, setResInfo] = useState();
    const fetchRestaurantData= async ()=>{
        const data = await fetch(MENUDATA_URL + resId);
        const dataJson = await data.json();
        setResInfo(dataJson.data);
        //console.log(resInfo);
    }
    if(!!!resInfo){
        return <Shimmer />
    }
    const {name,cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {title:category}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {itemCards} = !resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card: resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0];
     console.log(itemCards);
    return (
        <div className="Menu">
            <h1>{name || "Res Name"}</h1>
            <h2> {cuisines.join(", ")} - {costForTwoMessage}</h2>
            <div>
                <h2>{category}</h2>
                <ul>
                    {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100}</li>)}
                </ul>
            </div>

        </div>
    )
}
export default RestaurantMenu;