
# Namaste React 



# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm - Written in C++
- Caching- Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code
- Different dev and prod bundles

# Food app structure/plan
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restraurant Container
 *  - Restaurant card
 *      - Image
 *      - Name of Restaurant, Cuisine, Star Rating, Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 

 # Two Types of Exprt/Import
    - Default Export/Import
        export default <component/function/variable>;
        import <Default Component/function/variable> from <path>;
    - Namd Export/Import
        export const <component/function/variable>;
        import {component/function/variable} from <path>;

# React File Structure
 - https://legacy.reactjs.org/docs/faq-structure.html



# React Hooks
 (Normal JS Utility Funcitons)
- useState() - Super powerful state variable - It keeps the data layer and ui layer in sync. setVariable is helpful in triggering DOM rendering when we update the state variable.
- useEffect() - This gets invoked after the DOM rendering is completed. 
    /*
    *    useEffect(() => {
    *        console.log("use Effect callled);
    *       let timer = setInterval(()=>{
    *           console.log("Functional Interval");
    *       });
    *       - Return in useEffect Hook gets invoked when we are leaving the component or unmounting the component.
    *        return ()=>{
    *           clearInterval(timer);
    *        } 
    *    },[btnName])
    */
    - If no dependency array => useEffect is called on every render.
    - If dependency array  is empty => useEffect is called on initial render (Just once).
    - if dependecy is [btnName] => useEffect  is called everytime when btnName is updated.

 Whenever a state variable changes, React re-renders the component.
 # React
 - Reconciliation Algorithm is the algorithm that is build for DOM/Virtual DOM Manipulation. The algorihm has been updated later in React v16 and named it as 'React Fiber'.
 - Virtual DOM is a repreentation of Actual DOM.
 - React is fast because of virtual DOM. Vistual DOM uses Diff Algorithm to compare any changes in the DOM before rendering/updating the UI effectively and fastly.
 # React Algorithm (Fiber Architecture)
 - https://github.com/acdlite/react-fiber-architecture


 # Tehre are 2 types of routing
 - Client Side Routing
 - Server side Routing.

 # Component Life Cycle in React (Class Based Components)
- URL: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- <RENDER PHASE>
    - Parent Constructor
    - Parent Render
        - First Class Constructor
        - First Class Render

        - Second Class Constructor
        - Second Class Render

        - Batch up the Render phase of both the chikders (Reconciliation Process - Creates virtual DOM amd compares the DOM Objects)

-  <COMMIT PHASE><DOM Updates in single Batch>
        - * React Updates the batched DOM of First Class and Second Class*

        - First Class ComponentDidMount
        - Second Class ComponentDidMount

    - * React Updates the DOM of Parent Class*
    - Parent ComponentDidMount

* --- Mounting ------
  
  Constructor <Dummay Data>
  Render <Dummy Data>
       <HTML render with Dummy Data>
  ComponentDidMount
       <Api call>
       <this.setState> -> State variable is updated
  
*  ---- UPDATE ------
  
        Render API Data>
       <HTML new API data>
       ComponentDidUpdate

# Custom Hooks
    - Custom hooks are the hooks that can be created by developer. 
    - These are a normal javascript functions for specific purpose
    - Kind od helper functions
    - It has its own life cycle and it hase its own useState, useEffect and it has its own react way of handling the things.

# Lazy Loading
- Chunking
- Code Spitting
- Dynamic Bundling
- Lazy Loading
- On demand loading
- Dynamic import

# Higher Order Component.
- Higher order component is a component that takes component as an input and returns a ne enhanced or modified version of component.
- Higher order components are pure component.

# Data Layer
- React has two layers
    - UI Layer
    - Data Layer
- UI Layer is static and it uses the Data from Data Layer.
- UI Layer is powered by Data Layer.

# Controlled/Uncontrolled Components
- If the components depends on the props received from parent then that is a controlled component.
- If the component is independant and does not dependent on props then it is uncontrolled component.

# Lifting the state up
- State lifting is moving the state of children to the parent and controlling the state of children from the parent.

# Props Drilling
- Props drilling is a way of passing props from parent to the leaf child through the intermediate components.
- The pain with this props drilling is. In a big project it is not ideal to pass the props from top to bottom through out all the parent and children components.

# React Context
- React context is provided by react to create and share the props or values globally through out the project without the need of props drilling.
    # Context Provider
    - Context provider is the super power provided by React to update the context of full or partial context of the application.
    Ex: <userContext.Provider value = {{loggedInUser:'Nagesh'}} >
            <Component />
        </userContext.Provider>

# Redux Toolkit
- Redux is a library and it is not part of React
- Redux is a state management library. We can handle the data of large applications from the data layer of React application.
- Redux offers easy debugging.
- Redux can be used with other Javascript frameworks as well. But React and Redux combo is very popular.
- Altenates for redux are zustand

    # Steps to build React Toolkit
    - install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice (Cart Slice)
    - dispatch (action)
    - Selector

    # Performace with Selector
    - We should subscribe to the portion of the store that is needed. 
        - useSelector((store)=> store.cart.items);
    - We should not subscrie to the complete store as it may result in performance slowness. Although it is allowed to subscribe to complere store
        - useSelector((store)=> store);
          const items  = store.cart.items
    # Reducer and Reducers
    - We find one reducer at the app store level. It can have differnt slices(Reducers)
    - Each slice will have reducers which can have multiple reducer functions. At the end we will combine all the reducers of slice and export it as one reducer.

    - Vanilla(Older) Redux => DO NOT MUTATE THE STATE, returning was mandatory
    -         const newState = {...state};
    -         newState.items.push(action.payload);
    -         return newState; 

    - Redux toolkit (New)
    -        We have to mutate the state or return a new state
    -         New Redux still uses the old approach in the backed with the help of immerJs Libray.
    -        ImmerJs library find the difference between the original state, mutated  state and give the immutable state which is a new copy of the state.




    - state = []
    -       /*    We can not chane the reference of state. We can mutate the state
    -            state inside reducer function is always a local variable. Means changing the reference of local variable/state does not change the original or actual state.
    -            Ex; Let say the value of the original state before invoking reducer is ['pizza']
    -            Now if we empty the state inside clearCart reducer will only modifies the reference of local state, not the original state
    -            state ={items:['pizza']}
    -            clearCart: (state) => {
    -                console.log(state); //{items:['pizza']}
    -               sate =[]; 
    -                console.log(state) // []
    -            }
    -        */


    -    console.log(state);
    -        console.log(current(state));
    -        state =[];
    -        console.log(state);
    -        state.items.length = 0;
    -         RTK - We have to mutate the state or return the new state


# Types of testing (Developer)
- Unit Testing 
    - Testing a componet or piece of code (Unit) in isolation mode is called a Unit testing. Suppose we workd on Header component then we can simple test only that particulat component.
- Integration Testing
    - Testing the inergration of component. Testing a specific flow which involves multiple components. Suppose when we search with keyword, then the search results in doing action in search component and Restaurant cards, Restaturant Menu component.
- End to End Testing
    - It is testing all the flows of application from the point user lands on the application to user leaves the application. Means users lands on the application, Clicking login button, browsing the restaurants, adding items to the cart etc.,.

    # React Testing LIbrary
        - URL: https://testing-library.com/docs/react-testing-library/intro
        - Most of the testing libraries base is testing based on DOM of the application.
        - This library has been built on top of the DOM testing library
        - This is the most commonly used testing library for the React applications.
        - React Testing library uses JEST library behind the scenes which is a javascript testing library.
    # Setting up testing in our app
        - Install React Teting Library
        - Install Jest Library
            - https://jestjs.io/docs/getting-started
        - Install Babel dependencies
        - create a babel configuration file and add configurations.
        - Configure parcel config file to disable default babel transpilation.
        - Jest Configuration - npx jest --init 
            *jsdom is like a browser but not the browser. It is used as running platform for jest to run the test cases.
        - Install JS DOM Librbary if we are usign the Jest version greater than 28.
        - Install @babel/preset-react - To make JSX work in Test Cases
        - Include @babel/preset-react inside babel config
        - npm i -D  @testing-library/jest-dom - This is used to access the DOM in test cases
        
    # Test Case Creation
        - Create a folder with the name __test__
            - Adding two underscores at the starting and ending of the folder name (__****__) called as dunder. These are reserved character sequences to track testing files
        - create files with either of the fileextensions.
            - Header.test.js
            - Header.test.ts
            - Header.spec.js
            - Header.spec.ts
    - Querying in React gives us the result which is JSX/React Object.
        Query Examples
        - screen.getByText("Submit")
        - screen.getAllByRole("textbox")
    - describe is used to group the logically similar test cass.
    - it and test are alias to each other and they both solve the same purpose.
    - Add *watch-test* with the value "jest --watch" inside package.json to avaoid running *npm run test* on every change. Testing library used HMR(Hot Module Replacement) from parcel to achieve this test watch

   - *act* is a function which is used while executing asynchronous code. It comes from "react-dom/test-utils" package. This function returns Promise and takes async function as a parameter. We can use await to get the resolved Promise. Also, We need to update the callback function of it funciton definition should be Async.