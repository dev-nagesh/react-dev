
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
    *        console.log("use Effect callled)
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