import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) => {
    console.log("Items:",items);
    const disapatch = useDispatch();
    const handleAddClick = (item) => {
        disapatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) =>
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="flex flex-col text-left w-9/12">
                        <div className="py-2 flex">
                            <span>{item.card.info.name}</span>
                            <span> - &#8377;{item?.card?.info?.price/100}</span>
                        </div>
                        <span>{item?.card?.info?.description}</span>
                    </div>
                    <div className="w-3/12 flex justify-end">
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-32 h-20 rounded-md" />
                        <div className="absolute">
                            <button onClick = {()=> handleAddClick(item)} className="bg-black text-white ml-1 px-2 rounded-md">Add +</button>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    )
    // return (
    //     <div>
    //         {items.map((item)=>{
    //                 <div> key ={item.card.info.id} {item.card.info.id}</div>
    //                 // return (<div key={item?.card?.info?.id}>
    //                 //     <div>
    //                 //         <span>{item.name}</span>
    //                 //         <span>{(item.price || item.defaultPrice/100)/100}</span>
    //                 //     </div>
    //                 //     <p>{item?.description}</p>
    //                 // </div>)
    //         })}
    //     </div>
    // )
};
export default ItemsList;