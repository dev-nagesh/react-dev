import { createContext } from "react";

const userContext = createContext({
    loggedInUser: 'Defaut User'
});
export default userContext;