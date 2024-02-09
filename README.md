
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




   