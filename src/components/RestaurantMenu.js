import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId}=useParams();
    const resInfo = useRestaurantMenu(resId)
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