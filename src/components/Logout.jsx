import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        logOut().then(() => {
            alert('Sign-out Successfully!!!')
            navigate(from, { replace: true })
        })
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-blue-600 px-8 py-2 text-white font-semibold rounded hover:bg-blue-700' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout