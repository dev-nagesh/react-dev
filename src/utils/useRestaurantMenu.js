import { useEffect, useState } from "react";
import { MENUDATA_URL } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=> {
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch(MENUDATA_URL + resId);
        const dataJson = await data.json();
        setResInfo(dataJson.data);
    }
    return resInfo;
};

export default useRestaurantMenu;