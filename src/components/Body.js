import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

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
    const onlineStatus = useOnlineStatus();

    const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);
    // Whenever a react variable updates, the react triggers a reconciliation cycle (Re-Renders the component).
    //console.log("Body Render/Re-Render");

    const {loggedInUser, setUserName} = useContext(userContext);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const apiData = await data.json();
        // apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants= apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restro)=>{
        //     restro.info.promoted = true;
        //     return restro;
        // });
        //console.log(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMasterRestaurants(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }
    if(!onlineStatus){
        return (
            <h1>Oops! Looks like you are offline</h1>
        );
    }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            {/* <div className="search">Search</div>  */}
            <div className="flex gap-1 my-6">
                <div className="flex mx-4 gap-2">
                    <input data-testid="serachInput" className="border border-black px-2 rounded-md border-green-500" type="text" value={searchText}  onChange={(e)=> {
                        setSearchText(e.target.value)
                    }} />
                    <button className="px-2 bg-green-300 rounded-md" onClick={()=>{
                        //console.log(listOfRestaurants, searchText);
                        const filteredRestaurants = masterRestaurants.filter(
                            (res)=> {
                                const name = res.info.name.toLowerCase();
                                const searchval= searchText.toLowerCase();
                                return name.includes(searchval); 
                            });
                        //console.log(filteredRestaurants, searchText);
                        setListOfRestaurants(filteredRestaurants);
                    }}> Search </button>
                </div>
                <button className="p-2 bg-green-300 rounded-md" onClick={()=>{
                    const filteredRestaurants=listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                    setListOfRestaurants(filteredRestaurants);
                }}>
                    Top Restaurants
                </button>
                <div className="mx-4">
                    <label> User Name: </label>
                    <input className="border border-black p-2 ml-2" 
                        value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}
                     />
                </div>

            </div>
            <div className="flex mx-4 gap-2 flex-wrap">
                {
                    listOfRestaurants.map((res)=> 
                    <Link key={res.info.id} to={'restaurant/'+res.info.id}>
                        {/* If the restaurant is promoted then add Promoted label to it. */}
                        {
                            res.info.promoted ? <PromotedRestaurantCard resObj={res.info} /> :  <RestaurantCard  resObj={res.info}/>
                           
                        }
                    </Link> )
                }
            </div>
        </div>
    )
}
export default Body;