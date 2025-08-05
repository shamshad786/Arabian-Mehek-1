'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        quote: "This platform has completely transformed my fitness journey. The AI suggestions are incredibly accurate and the workout plans are personalized to my needs. I highly recommend it!",
        name: "Jane Doe",
        title: "Fitness Enthusiast",
        avatar: "https://placehold.co/100x100/ffd700/000000?text=JD"
    },
    {
        id: 2,
        quote: "I've been able to lose weight and gain muscle thanks to the detailed progress graphs and the AI trainer's constant support. The interface is intuitive and easy to use.",
        name: "John Smith",
        title: "Software Engineer",
        avatar: "https://placehold.co/100x100/ffd700/000000?text=JS"
    },
    {
        id: 3,
        quote: "The diet plan feature is a game-changer. It helps me track my nutrition goals effortlessly. I love the sleek design and how everything is in one place.",
        name: "Emily White",
        title: "Health Coach",
        avatar: "https://placehold.co/100x100/ffd700/000000?text=EW"
    },
    {
        id: 4,
        quote: "As a busy professional, the AI suggestions save me so much time. I can get a quick overview of my progress and make small, impactful changes to my routine.",
        name: "Michael Chen",
        title: "Product Manager",
        avatar: "https://placehold.co/100x100/ffd700/000000?text=MC"
    },
    {
        id: 5,
        quote: "The chat with the AI trainer feels so personal and helpful. It's like having a coach in my pocket 24/7. Highly effective and well-designed.",
        name: "Sarah Kim",
        title: "Student",
        avatar: "https://placehold.co/100x100/ffd700/000000?text=SK"
    },
];

const Testimonial = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-white text-gray-900 relative overflow-hidden">
          
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
                    What Our Users Say
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
                                    className="w-24 h-24 rounded-full mb-6 z-10"
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
