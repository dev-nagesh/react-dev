import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Not using keys (Not acceptable) <<<< index as keys <<<< Unique id as key (Best Practice)
const Body = () =>{
    // const arr=useState(restaurantsList);
    // //const [listOfRestaurants, setListOfRestaurants] = arr;
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];
    //local state variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [masterRestaurants, setMasterRestaurants]=useState(listOfRestaurants);
    const [searchText, setSearchText] = useState("");

    // Whenever a react variable updates, the react triggers a reconciliation cycle (Re-Renders the component).
    console.log("Body Render/Re-Render");

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const apiData = await data.json();
        console.log(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMasterRestaurants(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            {/* <div className="search">Search</div>  */}
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText}  onChange={(e)=> {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        console.log(listOfRestaurants, searchText);
                        const filteredRestaurants = masterRestaurants.filter(
                            (res)=> {
                                const name = res.info.name.toLowerCase();
                                const searchval= searchText.toLowerCase();
                                return name.includes(searchval); 
                            });
                        console.log(filteredRestaurants, searchText);
                        setListOfRestaurants(filteredRestaurants);
                    }}> Search </button>
                </div>
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