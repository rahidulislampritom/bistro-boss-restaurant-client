import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="max-w-5xl mx-auto my-12 md:my-28">
            <section>
                <SectionTitle
                    subHeading={'What Our Clients Say'}
                    heading={'Testimonials'}
                />
            </section>
            <section>


                <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center justify-center gap-3 text-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                        className="text-[#CD9003]"
                                    />
                                    <FaQuoteLeft size={40}/>
                                    <p className="md:w-4xl">{review.details}</p>
                                    <h3 className="text-3xl text-[#CD9003] font-medium">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;