import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./configs/MyContexts";

export default function ProtectedRoute({ children, role }) {
    const [user] = useContext(UserContext);

    if (user === null) {
        return <div className="text-center mt-5">Đang xác thực...</div>; // hoặc spinner
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    if (role && user.role !== role) {
        return <Navigate to="/" replace />;
    }

    if (role && user.role !== role) return <Navigate to="/" replace />;

    return children;
}
