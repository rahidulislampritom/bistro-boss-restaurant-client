import slide_1 from '../../../assets/home/slide1.jpg'
import slide_2 from '../../../assets/home/slide2.jpg'
import slide_3 from '../../../assets/home/slide3.jpg'
import slide_4 from '../../../assets/home/slide4.jpg'
import slide_5 from '../../../assets/home/slide5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'

const Category = () => {
    return (
        <div className='mt-20'>
            <section>
                <SectionTitle
                    subHeading={'From 11:00am to 10:00pm'}
                    heading={'ORDER ONLINE'}
                />



            </section>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper relative mb-24"
                >
                    <SwiperSlide>
                        <img src={slide_1} alt="" />
                        <h3 className='text-3xl absolute bottom-8 left-24 text-white uppercase'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_2} alt="" />
                        <h3 className='text-3xl absolute bottom-8 left-24 text-white uppercase'>Soups </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_3} alt="" />
                        <h3 className='text-3xl absolute bottom-8 left-24 text-white uppercase'>pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_4} alt="" />
                        <h3 className='text-3xl absolute bottom-8 left-24 text-white uppercase'>desserts </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_5} alt="" />
                        <h3 className='text-3xl absolute bottom-8 left-24 text-white uppercase'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;