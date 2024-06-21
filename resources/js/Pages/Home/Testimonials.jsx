// src/components/TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "This is an amazing product!",
        name: "John Doe",
        title: "CEO, Company Inc.",
        image: "https://via.placeholder.com/150",
    },
    {
        quote: "I love using this service, it has changed my life.",
        name: "Jane Smith",
        title: "CTO, Tech Solutions",
        image: "https://via.placeholder.com/150",
    },
    {
        quote: "Highly recommended for anyone looking for great quality.",
        name: "Sam Johnson",
        title: "Marketing Director, AdWorks",
        image: "https://via.placeholder.com/150",
    },
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8"
        >
            <div className="max-w-2xl mx-auto my-16 text-center">
                {/* <h2 className="mb-4 text-4xl font-bold text-gray-900">
                    Testimonials
                </h2> */}
                <p className="text-lg text-gray-600">
                    We collaborate with industry leaders to provide you with the
                    best solutions.
                </p>
            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4">
                        <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 mb-4 rounded-full md:h-24 md:w-24"
                            />
                            <p className="text-sm italic text-gray-800 md:text-xl">
                                "{testimonial.quote}"
                            </p>
                            <p className="mt-4 text-sm font-semibold text-gray-900 md:text-lg">
                                {testimonial.name}
                            </p>
                            <p className="text-xs text-gray-500 md:text-lg">
                                {testimonial.title}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </motion.div>
    );
};

export default TestimonialSlider;
