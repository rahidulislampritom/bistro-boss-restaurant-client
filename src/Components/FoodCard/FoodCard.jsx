import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const foodCardAxios = useAxiosSecure();
    const [, refetch] = useCart();






    const handleCart = () => {
        // console.log(data);
        if (user && user?.email) {

            const cartItems = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }

            // this post is using for set data in the carts collection 
            foodCardAxios.post('/carts', cartItems)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success(`${name} added to the cart`)

                        // refetch cart to update the cart items 
                        refetch();
                    }
                });

        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please,login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm relative">
                <figure>
                    <img
                        src={image}
                        alt="Food" />
                </figure>
                <p className="absolute right-0 mr-4 mt-4 bg-black text-white w-fit px-2 py-0.5">$ {price}</p>
                <div className="card-body  items-center ">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleCart} className="btn btn-ghost outline-0 rounded-lg border-b-3 border-b-amber-500 shadow-xl">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;