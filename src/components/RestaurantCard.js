import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) =>{
    const {name, cuisines, avgRating, sla,cloudinaryImageId} = props.resObj;
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-img-container">
                <img className="res-logo" alt="Res Image" src={CDN_URL+cloudinaryImageId} />
            </div>
            <h3> {name}</h3>
            <h3> {cuisines.join(', ')}</h3>
            <h3> {avgRating} Stars</h3>
            <h3> {sla.slaString}</h3>
        </div>
    )
    
}

export default RestaurantCard;