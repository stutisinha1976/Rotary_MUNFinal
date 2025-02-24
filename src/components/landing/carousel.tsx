'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
    const cards = [
        {
            title: "Lok Sabha",
            description: "Loksabha seeks to simulate the proceedings of the lower house of the Indian Parliament. Delegates are to keep true to the allotted portfolios, form alliances and deliberate on pressing issues prevalent in India.",
            image: "/LokSabha.jpg",
        },
        {
            title: "United Nations General Assembly: Disarmament and International Security Committee",
            description: "DISEC or the Disarmament and International Security Committee is the first committee of the United Nations General Assembly. Delegates are to address issues related to International Security, Disarmament and Global peace keeping.",
            image: "UNGA.jpg",
        },
        {
            title: "International Press",
            description: "International Press serves as the eyes and the ears of the conference. The journalists and the photographers are quintessential to faithful documentation of the proceedings of each committee. ",
            image: "ip.jpg",
        },
        {
            title: "United Nations Human Rights Council",
            description: "The United Nations Human Rights Council seeks to discuss the essential topic of human rights. Delegates are to negotiate on matters involving fundamental rights and take precautions against violations on the mandate.",
            image: "unhcr.jpg",
        },
        
    ];

    return (
        <>
        <section id='committee'>
            <h1 className='flex justify-center mt-10 md:mt-20 text-3xl md:text-5xl text-[#003161] font-thin font-serif px-4'>
                Discover Our <span className='text-[#006A67]'> &nbsp;<i>Committees</i></span>
            </h1>
            <div className="w-full px-2 md:px-4 py-8 relative">
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                    className="w-[95%] md:w-[70%] mx-auto"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#16423C] bg-opacity-30 rounded-lg flex flex-col md:flex-row shadow-lg overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full md:w-60 h-70 rounded-3xl p-4 "
                                />
                                <div className="p-4 text-center md:text-left">
                                    <h3 className="text-xl font-serif md:text-2xl font-semibold text-[#16423C]">
                                        {card.title}
                                    </h3>
                                    <p className="text-[#16423C] font-serif mt-8 text-lg md:text-lg">
                                        {card.description}
                                    </p>
                                </div>
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
                        background: rgba(255, 255, 255, 0.8);
                        border-radius: 50%;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    }
                    .swiper-button-next {
                        right: -20px;
                    }
                    .swiper-button-prev {
                        left: -20px;
                    }
                    .swiper-pagination-bullets {
                        bottom: -30px;
                    }
                `}</style>
            </div>
            </section>
        </>
       
    );
};

export default Carousel;
