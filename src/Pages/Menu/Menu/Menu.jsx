import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import OrderFood from "../../../Components/OrderFood/OrderFood";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'




const Menu = () => {
    const [items] = useMenu();
    const offers = items.filter(offer => offer.category === 'offered');
    const desserts = items.filter(dessert => dessert.category === 'dessert')
    const pizzas = items.filter(pizza => pizza.category === 'pizza')
    const salads = items.filter(salad => salad.category === 'salad')
    const soups = items.filter(soup => soup.category === 'soup')
    return (
        <div className="mb-16">
            <title>Bistro Boss | Menu</title>
            <div>
                <Cover
                    img={coverImg}
                    heading={'OUR MENU'}
                    title='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.'
                />

            </div>

            {/* today's offer  */}
            <section>
                <div>
                    <SectionTitle
                        subHeading={"Don't miss"}
                        heading={"Today's offer"}
                    />
                </div>
                <div>
                    <MenuCategory items={offers} />
                </div>
            </section>

            {/* order your favorites food 1  */}
            <section>
                <OrderFood
                    heading={'Order Your Favorite DESSERTS'}
                />

                <div>
                    <MenuCategory
                        heading={'dessert'}
                        title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        img={dessertImg}
                        items={desserts} />
                </div>
            </section>
            {/* order your favorites food 2  */}
            <section>
                <OrderFood
                    heading={'Order Your Favorite PIZZA'}
                />

                <div>
                    <MenuCategory
                        heading={'pizza'}
                        title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        img={pizzaImg}
                        items={pizzas} />
                </div>
            </section>
            {/* order your favorites food 3  */}
            <section>
                <OrderFood
                    heading={'Order Your Favorite SALADS'}
                />

                <div>
                    <MenuCategory
                        heading={'salad'}
                        title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        img={saladImg}
                        items={salads} />
                </div>
            </section>
            {/* order your favorites food 4  */}
            <section>
                <OrderFood
                    heading={'Order Your Favorite SOUPS'}
                />

                <div>
                    <MenuCategory
                        heading={'soup'}
                        title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        img={soupImg}
                        items={soups} />
                </div>
            </section>
        </div>
    );
};

export default Menu;