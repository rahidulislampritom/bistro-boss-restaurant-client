import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    const location = useLocation();
    const removeNavFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div >
            {
                removeNavFooter || <Navbar></Navbar>
            }

            <div className="flex flex-col min-h-screen">
                <Outlet></Outlet>
            </div>

            {
                removeNavFooter || <Footer></Footer>
            }

        </div>
    );
};

export default Main;