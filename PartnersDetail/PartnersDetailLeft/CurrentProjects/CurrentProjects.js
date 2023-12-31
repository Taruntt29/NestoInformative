import React, { useState } from 'react'
import './CurrentProjects.css'
import Slider from 'react-slick';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CurrentProjects = () => {
    const [heart, setHeart] = useState(false)
    function heartChange() {
        setHeart(true)
    }
    function heartUndo() {
        setHeart(false)
    }
    // =============================
    // ========= Slick Customization
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    borderRadius: '50%',
                    padding: '1px 0px',
                }}
                onClick={onClick}
            >
                <img className="next-image" src="/assets/next.png" alt="next" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    borderRadius: '50%',
                    padding: '1px 0px',
                }}
                onClick={onClick}
            >
                <img className="prev-image" src="/assets/next.png" alt="next" />
            </div>
        );
    }
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    };
    const projectSliderData =
        [
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
        ]
    return (
        <div className='container current-project_slider mt-5 shdow-sm rounded-4' data-aos='zoom-in'>
            <p className='partners-sections_headings'>Current Projects</p>
            <Slider {...settings}>
                {projectSliderData.map((item) => (
                    <div className='container'>
                        <div className='row current-project_row'>
                            <div className='d-flex p-0 rounded-3 current-project-slider-card'>
                                <div className='col-lg-6 current-project-slider_col-1'>
                                    <div className='h-100'>
                                        <span className='current-project-slider_tag'>{item.tag}</span>
                                        {/* <Link to='/builder-property-details'> */}
                                        {/* <Link to='/broker-property-details'> */}
                                        <Link to='/agent-property-details'>
                                            <img src={item.img} className='current-project-slider_img' alt='project-slider' />
                                        </Link>
                                        <span
                                            className='current-project-slider_icon1'
                                            onClick={heartChange}
                                        > <AiOutlineHeart />
                                        </span>
                                        {heart === true
                                            ?
                                            <span
                                                className='current-project-slider_icon2'
                                                onClick={heartUndo}
                                            > <AiTwotoneHeart /></span>
                                            : ''
                                        }
                                    </div>
                                </div>
                                <div className='col-lg-6 current-project_col-2'>
                                    {/* <Link to='/builder-property-details'> */}
                                    {/* <Link to='/broker-property-details'> */}
                                    <Link to='/agent-property-details'>
                                        <span className='current-project_span-1'>{item.propertyName}</span>
                                    </Link>
                                    <span>
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarOutline className='current-project_star' />
                                    </span>
                                    <span className='current-project_span-2'>{item.address}</span>
                                    <span className='current-project_span-3'>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CurrentProjects