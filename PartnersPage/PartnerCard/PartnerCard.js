import React from "react";
import { Link } from "react-router-dom";
import "./PartnerCard.css";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

const PartnerCard = () => {
  const data = [
    {
      heading: "GALLEXIE 91",
      subHeading: "Commercial Space",
      img: "./assets/informative/partners/partner1.svg",
    },
    {
      heading: "PALM FLOORS",
      subHeading: "Luxury Builder Floor",
      img: "./assets/informative/partners/partner2.svg",
    },
    {
      heading: "RIVER FRONT FARMS",
      subHeading: "Nature Lover's Rejoice",
      img: "./assets/informative/partners/partner3.svg",
    },
    // {
    //   heading: "Puri Construction",
    //   subHeading: "134 properties listed",
    //   img: "./assets/nestopartner3.png",
    // },
    // {
    //   heading: "Puri Construction",
    //   subHeading: "134 properties listed",
    //   img: "./assets/nestopartner3.png",
    // },
    // {
    //   heading: "Puri Construction",
    //   subHeading: "134 properties listed",
    //   img: "./assets/nestopartner3.png",
    // },
    // {
    //   heading: "Puri Construction",
    //   subHeading: "134 properties listed",
    //   img: "./assets/nestopartner3.png",
    // },
    // {
    //   heading: "Puri Construction",
    //   subHeading: "134 properties listed",
    //   img: "./assets/nestopartner3.png",
    // },
    // {
    //   heading: "Puri Construction",
    //   subHeading: "134 properties listed",
    //   img: "./assets/nestopartner3.png",
    // },
  ];
  return (
    <div className="container partner-card">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-md-4 col-sm-6">
              <div className="partner-card-div">
                <div className="">
                  {/* <Link to="/partners/details" className="partner-card-img"> */}
                    <img
                      className="partner-card-img-div"
                      src={item.img}
                      alt="partner-card"
                    />
                  {/* </Link> */}
                  {/* <Link to="/partners/details" className="partner-card-heading"> */}
                    <span className="partner-card-heading">{item.heading}</span>
                  {/* </Link> */}

                  <span className="partner-card-span">{item.subHeading}</span>
                  <div className="flex partner-star-div">
                    <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                    <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                    <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                    <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                    <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                    {/* <ImStarEmpty className="mx-1" fill="#FFB630" size={20} /> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerCard;
