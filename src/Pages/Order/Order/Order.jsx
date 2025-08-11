import Cover from "../../Shared/Cover/Cover";
import orderCover from '../../../assets/shop/banner2.jpg';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [items] = useMenu();

    // console.log(category);

    const desserts = items.filter(dessert => dessert.category === 'dessert')
    const pizzas = items.filter(pizza => pizza.category === 'pizza')
    const salads = items.filter(salad => salad.category === 'salad')
    const soups = items.filter(soup => soup.category === 'soup')
    const drinks = items.filter(offer => offer.category === 'drinks');

    return (
        <div>
            <section>
                <Cover
                    img={orderCover}
                    heading={'OUR SHOP'}
                    title={'Would you like to try a dish?'}
                />
            </section>
            <section className="text-center mt-16">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default Order;