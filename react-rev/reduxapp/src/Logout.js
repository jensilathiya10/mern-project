import { Navigate, useNavigate } from "react-router-dom"
const Logout = () =>{
    const navigate = useNavigate();
    const handlelogout = () =>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return <button type="button" onClick={handlelogout}>logout</button>
}
export default Logout;