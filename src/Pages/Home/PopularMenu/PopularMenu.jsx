
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menuData] = useMenu();
    const popular = menuData.filter(data => data.category === 'popular');


    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                />
            </section>
            <section className="grid grid-cols-2 gap-6 ">
                {
                    popular.map(data => <MenuItem key={data._id} data={data}></MenuItem>)
                }
            </section>
        </div>
    );
};

export default PopularMenu;