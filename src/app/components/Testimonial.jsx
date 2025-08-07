'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        quote: "This perfume exceeded my expectations. The scent is elegant, long-lasting, and has a premium feel. It’s refreshing but not too strong, making it great for daily use or special events. A perfect blend of luxury and comfort. Truly impressed and satisfied!   ",
        name: "Kalim Shah",
        title: "Financial Adviser",
        avatar: "/kalim.jpg "
    },
    {
        id: 2,
        quote: "I was unsure at first, but this turned out to be a great buy. The perfume smells amazing, lasts all day, and feels truly high-end. Fast delivery and good packaging too. Definitely worth it—I'll be buying again for sure.",
        name: "Alaudin Mansuri",
        title: "Shop Owner",
        avatar: "/alaudin.jpg"
    },
    {
        id: 3,
        quote: "I bought a perfume from this website and I'm really happy. It’s a good international brand at a price I could afford. The smell is amazing and lasts long. It feels premium. Great deal for the money. Highly recommended!",
        name: "Ayush Aswal",
        title: "Event manager",
        avatar: "/ayush.jpg"
    },
    {
        id: 4,
        quote: "This perfume is elegant, long-lasting, and subtly luxurious. It’s not too strong but makes a clear impression. Works well for daily wear or special occasions. I didn’t expect to love it this much. Definitely a go-to scent now. Recommended!",
        name: "Md Azad",
        title: "Digital Marketer",
        avatar: "/Azad.jpg"
    },
    {
        id: 5,
        quote: "This perfume has a beautiful, fresh scent that instantly lifts my mood. It lasts for hours without being too strong. The quality feels premium, and the price was totally worth it. I’ve received many compliments—absolutely love it and highly recommend",
        name: "Manish Singh",
        title: "Self Employed",
        avatar: "/Manish.jpg"
    },
];

const Testimonial = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-white text-gray-900 relative overflow-hidden">
          
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
                    Loved By Noses, Trusted By Hearts
                </h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full relative overflow-hidden">
                                <div className="gradient-blob"></div>
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mb-6 z-10 object-cover" 
                                />
                                <p className="text-gray-600 italic mb-6 flex-grow z-10">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-auto z-10">
                                    <h4 className="text-xl font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-700 font-medium">{testimonial.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
