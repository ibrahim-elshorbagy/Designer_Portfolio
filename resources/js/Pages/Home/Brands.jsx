import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
    {
        name: "Brand 1",
        image: "images/brands/L1.png",
    },
    {
        name: "Brand 2",
        image: "images/brands/L2.png",
    },
    {
        name: "Brand 3",
        image: "images/brands/L3.png",
    },
    {
        name: "Brand 4",
        image: "images/brands/L4.png",
    },
    {
        name: "Brand 5",
        image: "images/brands/L5.png",
    },
    {
        name: "Brand 6",
        image: "images/brands/L6.png",
    },
    {
        name: "Brand 8",
        image: "images/brands/L8.png",
    },
];

const Brands = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                        Our Trusted Partners
                    </h2>
                    <p className="text-lg text-gray-600">
                        We collaborate with industry leaders to provide you with
                        the best solutions.
                    </p>
                    <hr className="mx-auto my-8 border-t-2 border-indigo-500" />
                </div>

                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4"
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="object-contain w-28 h-28"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Brands;
