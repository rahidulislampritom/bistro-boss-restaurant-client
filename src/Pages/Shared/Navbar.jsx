import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {

        // auth logout 
        logOut()
            .then(() => {
                navigate('/login');
                // logout success 
            })
            .catch((err) => {
                console.log(err.message);
            })
    }


    const navOptions =
        <>
            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/menu'}>OUR MENU</NavLink></li>
            <li><NavLink to={`/order/salad`}>ORDER FOOD</NavLink></li>

        </>

    const loginRegis = <>
        {
            user
                ? <div>
                    <li><NavLink onClick={handleLogout} className='btn btn-dash'>LOG OUT</NavLink></li>
                </div>
                : <div className="flex items-center gap-3.5">
                    <li><NavLink to={'/signup'} className='btn btn-dash'>SIGN UP</NavLink></li>
                    <li><NavLink to={'/login'} className='btn btn-dash'>LOGIN</NavLink></li>
                </div>
        }
    </>
    return (
        <>
            <div className="navbar text-white shadow-sm max-w-screen-xl mx-auto fixed z-10 bg-black/30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        {loginRegis}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;