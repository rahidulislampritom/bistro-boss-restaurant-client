import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (

        <div className="bg-[url(assets/home/featured.jpg)] bg-center bg-cover mt-32 bg-fixed">

            <div className="bg-black/40 h-full py-24">
                <section >
                    <SectionTitle
                        subHeading={'Check it out'}
                        heading={'featured Item'}
                    />
                </section>
                <section className="flex items-center justify-center gap-16 max-w-3xl mx-auto text-white">
                    <div className="">
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="space-y-3.5"> 
                        <p>March 20,2023</p>
                        <h4 className="uppercase">Where can i get some?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis accusantium, corporis nam repellat ipsa alias tempore nesciunt minus dolore recusandae tenetur ipsam quo vel! Dicta mollitia cupiditate recusandae iusto!</p>
                        <button className="btn btn-ghost outline-0 rounded-lg border-b-3 border-b-black">READ MORE</button>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default Featured;