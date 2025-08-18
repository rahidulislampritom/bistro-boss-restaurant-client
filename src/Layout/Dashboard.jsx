import { NavLink, Outlet } from "react-router-dom";
import { RiHome9Fill, RiMessageFill } from "react-icons/ri";
import { FaBook, FaCalendarAlt, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { PiListStarBold } from "react-icons/pi";
import { SiFacebookgaming } from "react-icons/si";
import { MdOutlineMenu } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import './dashboard.css'
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin()

    return (
        <div className="flex ">
            {/* left site  */}
            <section className="w-70 bg-[#D99904] min-h-screen">
                <div className="pl-6 pt-12">
                    <div className="w-[]">
                        <h2 className="text-3xl font-bold">BISTRO BOSS</h2>
                        <h3 className="text-lg font-medium tracking-[8.5px]">RESTAURANT</h3>
                    </div>
                    {
                        isAdmin
                            ?
                            <>
                                <ul className="uppercase space-y-6 font-medium">
                                    <li> <NavLink to={'/dashboard/userHome'} className="flex items-center gap-3" > <RiHome9Fill size={24} />  Admin Home</NavLink> </li>
                                    <li> <NavLink to={'addItems'} className="flex items-center gap-3" > <FaUtensils size={24} />  Add Items</NavLink> </li>
                                    <li> <NavLink to={'manageItems'} className="flex items-center gap-3" > <FaList size={24} />  Manage Items</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/userHome'} className="flex items-center gap-3" > <FaBook size={24} />  Manage Bookings</NavLink> </li>
                                    <li> <NavLink to={'users'} className="flex items-center gap-3" > <FaUsers size={24} />  All Users</NavLink> </li>
                                </ul>
                            </>
                            :
                            <>
                                <ul className="uppercase mt-14 space-y-6 font-medium">
                                    <li> <NavLink to={'/dashboard/userHome'} className="flex items-center gap-3" > <RiHome9Fill size={24} />  User Home</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/reservation'} className="flex items-center gap-3"><FaCalendarAlt size={24} /> Reservation</NavLink> </li>
                                    <li> <NavLink className="flex items-center gap-3"><MdPayment size={24} />Payment History</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/cart'} className="flex items-center gap-3"><IoCart size={24} /> My Cart</NavLink> </li>
                                    <li> <NavLink className="flex items-center gap-3"><PiListStarBold size={24} /> Add Review</NavLink> </li>
                                    <li> <NavLink className="flex items-center gap-3"><SiFacebookgaming size={24} /> My Booking</NavLink> </li>
                                </ul>
                            </>
                    }
                </div>
                <div className="w-[233px] mx-auto border text-white my-12"></div>
                <div className="pl-6">

                    <ul className="uppercase space-y-6 font-medium">
                        <li> <NavLink to={'/'} className="flex items-center gap-3"><RiHome9Fill size={24} /> Home</NavLink> </li>
                        <li> <NavLink to={'/order/salad'} className="flex items-center gap-3"><MdOutlineMenu size={24} /> Menu</NavLink> </li>
                        <li> <NavLink className="flex items-center gap-3"><FaBasketShopping size={24} /> SHOP</NavLink> </li>
                        <li> <NavLink to={'/order/contact'} className="flex items-center gap-3"><RiMessageFill size={24} /> Contact</NavLink> </li>
                    </ul>
                </div>
            </section>
            {/* outLate  */}
            <section className="max-w-4xl w-full mx-auto">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;