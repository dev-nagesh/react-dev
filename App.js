import React from "react";
import ReactDOM from "react-dom/client"


// JSX (Transpiled before it reaches the JS) - Parcel -Babel

// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(renderer)
// const jsxheading = (
//     <h1 className="head" tabIndex="1">
//         Hello Namaste React Heading
//     </h1>
// )
// console.log(jsxheading);

const Heading = () => {
    return <h1 className="heading" tabIndex="1">Namaste React Heading</h1>
}

// ReACT Component Name must always have Capital Letter
// React Functional component is a javascript arrow function which returns a piece of JSX code which is React Element
/*const Title = () => <h1 className="heading" tabIndex="0">  Namaste React Heading</h1>

// Component Composition : Includingor using one React component inside another component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading" tabIndex="1"> React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); */

/* const title =  (<h1 className="heading" tabIndex="0">  Namaste React Heading</h1>)

// Component Composition : Includingor using one React component inside another component
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading" tabIndex="1"> React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); */
// Component Composition : Includingor using one React component inside another component
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading" tabIndex="1"> React Functional Component</h1>
    </div>
)

const title =  (
    <h1 className="heading" tabIndex="0">
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}
        {100 + 200}
         Namaste React Heading
    </h1>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);