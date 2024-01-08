import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return <div className="error-container">
        <h3>OOps!!</h3>
        <h3> Something went Wrong.</h3>
        <h2>{err.status} : {err.statusText}</h2>
    </div>
};
export default Error;