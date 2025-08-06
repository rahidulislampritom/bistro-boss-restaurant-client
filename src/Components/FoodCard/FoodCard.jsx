const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    const handleCart = (data) => {
        console.log(data);
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
                        <button onClick={() => handleCart(item)} className="btn btn-ghost outline-0 rounded-lg border-b-3 border-b-amber-500 shadow-xl">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;