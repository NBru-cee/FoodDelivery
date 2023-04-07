import Slider from "react-slick";
import React from "react";
import "../../../styles/slider.css";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor et provident atque. Minus cumque incidunt ratione,
                    quos eaque, error itaque ipsam obcaecati doloribus sequi
                    eveniet suscipit inventore iure hic culpa!
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava01} alt="avatar 01" className="rounded" />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor et provident atque. Minus cumque incidunt ratione,
                    quos eaque, error itaque ipsam obcaecati doloribus sequi
                    eveniet suscipit inventore iure hic culpa!
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava02} alt="avatar 02" className="rounded" />
                    <h6>Mitchell Marsh</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor et provident atque. Minus cumque incidunt ratione,
                    quos eaque, error itaque ipsam obcaecati doloribus sequi
                    eveniet suscipit inventore iure hic culpa!
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava03} alt="avatar 03" className="rounded" />
                    <h6>Steven Crock</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor et provident atque. Minus cumque incidunt ratione,
                    quos eaque, error itaque ipsam obcaecati doloribus sequi
                    eveniet suscipit inventore iure hic culpa!
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava04} alt="avatar 04" className="rounded" />
                    <h6>Mary Jane</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;
