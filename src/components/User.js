import { useEffect, useState } from "react";

const User = ({name, location}) =>{
    const [marks] = useState(90);
    const [rank] = useState(1)
    useEffect(()=>{
        console.log("User Use Effect");
        let timer = setInterval(()=>{
            console.log("Functional Interval");
        },1000);
        return ()=>{
            console.log("Leaving User Component");
            clearInterval(timer);
        }
    },[])

    return (
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h4>Location: {location}</h4>
            <h5>Contact: @nagesh-dev</h5>
            <h5>Marks: {marks}</h5>
            <h5>Rank: {rank}</h5>
        </div>
    );
}
export default User;