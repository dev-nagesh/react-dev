import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            Hello, This is About page
            <User name="Function Component" location="New Delhi"/>
            {/* <UserClass name="Class Component" location="Andhra Pradesh"/> */}
        </div>
    )
}
export default About;