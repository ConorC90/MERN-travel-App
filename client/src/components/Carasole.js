import pic1 from "../pictures/Pic1.jpg";
import pic2 from "../pictures/Pic2.jpg";
import pic3 from "../pictures/Pic3.jpg";
import pic4 from "../pictures/Pic4.jpg";
import pic5 from "../pictures/Pic5.jpg";
import pic6 from "../pictures/Pic6.jpg";
import pic7 from "../pictures/Pic7.jpg";
import pic8 from "../pictures/Pic8.jpg";
import pic9 from "../pictures/Pic9.jpg";
import pic10 from "../pictures/Pic10.jpg";
import pic11 from "../pictures/Pic11.jpg";
import pic12 from "../pictures/Pic12.jpg";
import React, { Component } from "react";
import Slider from "react-slick";

class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="container">
          <div>
            <img className="carPic" src={pic1} alt="Pic1" />
          </div>
          <div>
            <img className="carPic" src={pic2} alt="Pic2" />
          </div>

          <div>
            <img className="carPic" src={pic3} alt="Pic3" />
          </div>
          <div>
            <img className="carPic" src={pic4} alt="Pic4" />
          </div>

          <div>
            <img className="carPic" src={pic5} alt="Pic5" />
          </div>
          <div>
            <img className="carPic" src={pic6} alt="Pic6" />
          </div>

          <div>
            <img className="carPic" src={pic7} alt="Pic7" />
          </div>
          <div>
            <img className="carPic" src={pic8} alt="Pic8" />
          </div>
          <div>
            <img className="carPic" src={pic9} alt="Pic9" />
          </div>
          <div>
            <img className="carPic" src={pic10} alt="Pic10" />
          </div>
          <div>
            <img className="carPic" src={pic11} alt="Pic11" />
          </div>
          <div>
            <img className="carPic" src={pic12} alt="Pic12" />{" "}
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
