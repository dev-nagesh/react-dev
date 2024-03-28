import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const {resId}=useParams();
    const resInfo = useRestaurantMenu(resId)
    if(!!!resInfo){
        return <Shimmer />
    }
    const {name,cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {title:category}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {itemCards} = !resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card: resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0];
     //console.log(itemCards);
     const groupedCard = resInfo?.cards.find((res)=>{
        if(Object.keys(res).includes('groupedCard')){
            return res;
        }
     });
     const categories = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.reduce((itemsList,restro)=>{
        if(restro?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'){  
            itemsList.push({...restro?.card?.card});
        }
        return itemsList;
     },[])
     //console.log("categories:",categories);
    //  .reduce((items,restro)=>{
    //     const itemsList = restro?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((r)=> r?.card?.card?.['@type']=== 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    //     items.push(itemsList);
    //     return items;
    //  },[]);
     //console.log("groupedCard:", groupedCard);
    return (
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name || "Res Name"}</h1>
            <p className="italic text-lg"> {cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                categories.map((category, index)=> 
                    <RestaurantCategory 
                    key={category.title} 
                    data={category} 
                    showItems={index === showIndex ? true: false}
                    setShowIndex = {()=> setShowIndex(index) }/> 
                )
            }
        </div>
    )
}
export default RestaurantMenu;