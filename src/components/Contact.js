//import User from "./User";

const Contact = () => {
    return (
    <div>
        <h1>Hello, This is Contact Page</h1>
        <form>
            <input type="text" className="border border-black m-2 p-2" placeholder="name" />
            <input type="text" className="border border-black m-2 p-2" placeholder="message" />
            <button className="m-2 p-2 bg-gray-100 rounded-md border border-black">Submit</button>
        </form>
    </div>)
}

export default Contact;