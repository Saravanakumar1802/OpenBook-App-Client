import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Avatar } from 'flowbite-react';
import profile from "../assets/profile.jpg"

import { FaStar } from "react-icons/fa6"

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className="my-12 px-4 lg:px-14">
            <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customer</h2>


            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
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
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7 '>
                                <p className='mb-5'>
                                    This book site exceeded my expectations! A user-friendly platform with unbeatable prices,
                                    making buying and selling books a delight for any avid reader.</p>
                                <Avatar
                                    img={profile}
                                    alt="avatar of Jese"
                                    rounded
                                    className='w-10 mb-4 '
                                />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO,ABC,Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7 '>
                                <p className='mb-5'>
                                    Fantastic book site! Easy navigation, vast selection, and prompt delivery.
                                    My go-to for finding and purchasing my favorite reads – highly recommend!</p>
                                <Avatar
                                    img={profile}
                                    alt="avatar of Jese"
                                    rounded
                                    className='w-10 mb-4 '
                                />
                                <h5 className='text-lg font-medium'>BookWanderer22</h5>
                                <p className='text-base'>Engineer, AZTech, Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7 '>
                                <p className='mb-5'>Fantastic book site! Wide selection, easy navigation,
                                    and excellent customer service make it my go-to for all literary cravings. Highly recommended!</p>
                                <Avatar
                                    img={profile}
                                    alt="avatar of Jese"
                                    rounded
                                    className='w-10 mb-4 '
                                />
                                <h5 className='text-lg font-medium'>BibliophileDreamer</h5>
                                <p className='text-base'>CEO,A2D,Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7 '>
                                <p className='mb-5'>Love this book site! Quick delivery, competitive prices,
                                    and a user-friendly interface make shopping for my favorite reads a joy. Five stars all the way!</p>
                                <Avatar
                                    img={profile}
                                    alt="avatar of Jese"
                                    rounded
                                    className='w-10 mb-4 '
                                />
                                <h5 className='text-lg font-medium'>Elon Musk</h5>
                                <p className='text-base'>CEO, Tesla, Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7 '>
                                <p className='mb-5'>
                                    Fantastic book site! Easy navigation, vast selection, and prompt delivery.
                                    My go-to for finding and purchasing my favorite reads – highly recommend!</p>
                                <Avatar
                                    img={profile}
                                    alt="avatar of Jese"
                                    rounded
                                    className='w-10 mb-4 '
                                />
                                <h5 className='text-lg font-medium'>PageTurner88</h5>
                                <p className='text-base'>CEO, DigitalAi, Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>


    )
}

export default Review