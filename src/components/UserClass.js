import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: 'Dummy Name',
                location: 'Dummy Location'
            }
            // marks: 80,
            // rank: 2
            //count: 0
        }
        console.log("Child Constructor");
    }
    async componentDidMount(){
        console.log("Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/dev-nagesh");
        const json = await data.json();
        this.setState({
            userInfo:{
                name: json.name,
                location: json.location,
                avatar_url : json.avatar_url
            }   
        })
        this.timer = setInterval(()=>{
            console.log("This is class interval");
        },1000);
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
        clearInterval(this.timer);
    }
    render() {
        //const {name, location} = this.props;
        // const {marks, rank} = this.state;
        // const {count} = this.state;
        const {name, location, avatar_url} = this.state.userInfo;
        console.log("Child Render");
        return (
            <div className="user-card">
                <img src={avatar_url} width={'100px'}/>
                <h1>Name: {name}</h1>
                <h4>Location: {location}</h4>
                <h5>Contact: @nagesh-dev</h5>
                {/* <h5>Marks: {marks}</h5>
                <h5>Rank: {rank}</h5> */}
                {/* <h5>Count: {count}</h5>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Increment Count</button> */}
            </div>
        );
    }
}
export default UserClass;


/**
 * --- Mounting ------
 * 
 * Constructor <Dummay Data>
 * Render <Dummy Data>
 *      <HTML render with Dummy Data>
 * ComponentDidMount
 *      <Api call>
 *      <this.setState> -> State variable is updated
 * 
 * ---- UPDATE ------
 * 
 *      Render API Data>
 *      <HTML new API data>
 *      ComponentDidUpdate
 * 
 * 
 * 
 * 
 * 
 */