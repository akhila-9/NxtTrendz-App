import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
 
const ProtectedRoute = ({ children }) => {
    const token = Cookies.get("akhila_token");
 
    if (!token) {
        return <Navigate to="/login" replace />
    }
 
    return children;
};
 
export default ProtectedRoute