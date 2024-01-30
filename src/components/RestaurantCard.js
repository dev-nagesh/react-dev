import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const styleCard = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) =>{
    const {loggedInUser} = useContext(userContext);
    const {name, cuisines, avgRating, sla,cloudinaryImageId} = props.resObj;
    return (
        <div className="flex flex-col flex-wrap w-52 justify-center p-4 rounded-md h-auto gap-3" style={styleCard}>
            <div className="flex justify-center">
                <img className="w-44 h-40 rounded-md" alt="Res Image" src={CDN_URL+cloudinaryImageId} />
            </div>
            <h3 className="font-bold"> {name}</h3>
            <h3> {cuisines.join(', ')}</h3>
            <h3> <span className={`text-white px-2 py-1 ${avgRating > 4.1 ?'bg-green-600' : 'bg-red-600'}`}>{avgRating}</span> Stars</h3>
            <h3> {sla.slaString}</h3>
            <h3>User: {loggedInUser}</h3>
        </div>
    )
    
}

// Higher order component - Add Promoted label to the restaurant
// Input: RestaurantCard => Output: PromotedRestaurantCard

export const WithPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-3 px-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};
export default RestaurantCard;