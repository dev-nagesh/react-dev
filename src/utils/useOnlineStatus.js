import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=> {
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[]);
    return onlineStatus;
}
export default useOnlineStatus;
/*
# Custom Hooks
    - Custom hooks are the hooks that can be created by developer. 
    - These are a normal javascript functions for specific purpose
    - Kind od helper functions
    - It has its own life cycle and it hase its own useState, useEffect and it has its own react way of handling the things.
 */