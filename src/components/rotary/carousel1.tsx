'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel1 = () => {
    const cards = [
        { image: "/rtr1.jpg" },
        { image: "rtr2.jpg" },
        { image: "rtr3.jpg" },
        { image: "rtr4.jpg" },
        { image: "rtr5.jpg" },
        { image: "rtr6.jpg" },
        { image: "rtr7.jpg" },
        { image: "rtr8.jpg" },
    ];

    return (
        <section id="committee">
            <h1 className="flex justify-center mt-10 md:mt-20 text-3xl md:text-5xl text-[#003161] font-thin font-serif px-4">
                Our <span className="text-[#006A67]"> &nbsp;<i>Event Gallery</i></span>
            </h1>
            <div className="w-full px-2 md:px-4 py-8 relative">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]} // Add autoplay module
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 1000, // 1 second delay between slides
                        disableOnInteraction: false, // Keeps autoplay after user interaction
                        pauseOnMouseEnter: true, // Pause autoplay when mouse enters the slider
                    }}
                    spaceBetween={10}
                    slidesPerView={1} // Default to 1 slide per view for small screens
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 }, // 1 slide for smaller screens
                        768: { slidesPerView: 2 }, // 2 slides for medium screens
                        1024: { slidesPerView: 3 }, // 3 slides for larger screens
                    }}
                    className="w-[95%] md:w-[70%] mx-auto"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#16423C] h-[300px] rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={`Slide ${index}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style jsx>{`
                    .swiper-button-next, .swiper-button-prev {
                        color: #003161;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 40px;
                        height: 40px;
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 50%;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s, box-shadow 0.3s;
                    }
                    .swiper-button-next:hover, .swiper-button-prev:hover {
                        transform: translateY(-50%) scale(1.1);
                        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
                    }
                    .swiper-pagination-bullets {
                        bottom: -30px;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Carousel1;
