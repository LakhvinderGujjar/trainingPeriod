import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    let k=localStorage.getItem("key")
    if (!isLoggedIn && k=="false") {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default Protected;