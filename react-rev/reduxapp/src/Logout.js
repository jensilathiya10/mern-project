import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { setAuthenticated } from "./authSlice";
import { useEffect } from "react";
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    localStorage.removeItem('token')
    dispatch(setAuthenticated(false))
    // navigate('/login')

    useEffect(() => {
        navigate("/login");
    }, [dispatch, navigate]);
    return null;
}
export default Logout;