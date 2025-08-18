import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";



const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (user && isAdmin) {
        return children;
    }

    if (loading || isAdminLoading) {
        return <h2 className="text-4xl text-center">Loading</h2>
    }

    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;