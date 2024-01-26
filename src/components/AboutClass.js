//import React from "react";
import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render() {
        console.log("Parent Render")
        return (
            <div>
                Hello, This is About Class page
                {/* <User name="Function Component" location="New Delhi"/> */}
                <UserClass name="First Class Component" location="Andhra Pradesh"/>
                {/* <UserClass name="Second Class Component" location="Telangana"/> */}
            </div>
        )
    }
}

/* 
    URL: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    <RENDER PHASE>
    - Parent Constructor
    - Parent Render
        - First Class Constructor
        - First Class Render

        - Second Class Constructor
        - Second Class Render

        - Batch up the Render phase of both the chikders (Reconciliation Process - Creates virtual DOM amd compares the DOM Objects)

    <COMMIT PHASE><DOM Updates in single Batch>
        - * React Updates the batched DOM of First Class and Second Class*

        - First Class ComponentDidMount
        - Second Class ComponentDidMount

    - * React Updates the DOM of Parent Class*
    - Parent ComponentDidMount
*/

export default AboutClass;