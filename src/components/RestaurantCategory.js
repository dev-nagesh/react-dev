import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data, showItems, setShowIndex})=>{
    console.log("CategoryData:",data);
    const toggleItems = ()=>{
        setShowIndex(showItems);
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex flex-col">
            <div className="flex justify-between  cursor-pointer" onClick={toggleItems}>
                <span className="font-bold text-lg">{data.title} ({data?.itemCards.length})</span>
                {showItems ? <span>&#11165;</span> : <span>&#11167;</span>}
            </div>
            {showItems && <ItemsList items={data.itemCards}/>}
            
        </div>
    )
}
export default RestaurantCategory;