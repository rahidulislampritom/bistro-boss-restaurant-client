
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import CardHeading from "../../Shared/CardHeading/CardHeading";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosDeleteCartItem = useAxiosSecure()
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosDeleteCartItem.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }
    return (
        <div>
            <section>
                <CardHeading
                    title='My Cart'
                    heading='WANNA ADD MORE?'
                />
            </section>
            <div className="flex justify-around">
                <h2 className="text-4xl">Items:{cart.length}</h2>
                <h2 className="text-4xl">Total Price:{totalPrice}</h2>
                {cart.length
                    ?
                    <Link to={'/dashboard/payment'}>
                        <button className="btn btn-primary">Pay</button>
                    </Link>
                    :
                    <button disabled className="btn btn-primary">Pay</button>}

            </div>
            <div className="ml-28 mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((singleCart, index) =>
                                    <tr key={singleCart._id}>
                                        <th className="text-lg text-gray-500">
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className=" h-24 w-24 rounded-lg">
                                                        <img
                                                            src={singleCart.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {singleCart.name}
                                        </td>
                                        <td>{singleCart.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(`${singleCart._id}`)} className="btn btn-ghost btn-xs"><RiDeleteBin6Line size={28} className="text-red-500" /></button>
                                        </th>
                                    </tr>)

                            }

                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;