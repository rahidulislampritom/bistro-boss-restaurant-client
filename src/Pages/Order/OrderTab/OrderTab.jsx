import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-3 justify-items-center gap-y-8">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;