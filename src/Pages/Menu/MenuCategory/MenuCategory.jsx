
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ img, heading, title, items }) => {
    return (
        <div>

            {title && <Cover img={img} heading={heading} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-6 mt-14  mx-auto">
                {
                    items.map(data => <MenuItem key={data._id} data={data}></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center">
                <Link to={`/order/${heading}`}><button className="btn btn-outline ">Order Now</button></Link>
            </div>

        </div>
    );
};

export default MenuCategory;