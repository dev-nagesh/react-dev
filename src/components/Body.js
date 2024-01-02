import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantsList from "../utils/mock-restaurants";

// Not using keys (Not acceptable) <<<< index as keys <<<< Unique id as key (Best Practice)
const Body = () =>{
    // const arr=useState(restaurantsList);
    // //const [listOfRestaurants, setListOfRestaurants] = arr;
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];
    const [listOfRestaurants, setListOfRestaurants]=useState(restaurantsList);
    return (
        <div className="body">
            {/* <div className="search">Search</div>  */}
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurants=listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                    setListOfRestaurants(filteredRestaurants);
                }}>
                    Top Restaurants
                </button>

            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((res)=> <RestaurantCard key={res.info.id} resObj={res.info}/> )
                }
            </div>
        </div>
    )
}
export default Body;