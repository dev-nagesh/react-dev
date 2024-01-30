import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) =>{
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
        </div>
    )
    
}

export default RestaurantCard;