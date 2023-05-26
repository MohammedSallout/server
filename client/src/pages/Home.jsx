import axios from "axios";
import { useEffect, useState } from "react";
import '../style/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HeaderHome from "../components/header";

const Home = () => {
  const [data, setData] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    prevArrow: (
      <button type="button" className="slick-arrow slick-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-arrow slick-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <HeaderHome />
      <div className="space"></div>
      <div className="container">
        <p className="containerHeader">
          Unlock Limitless Possibilities: Shop Now and Experience the Power of Cutting-Edge Technology at Your Fingertips.
        </p>
        <Slider {...sliderSettings}>
          {data.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="img" />
              <h4>{product.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
      
    </>
  );
};

export default Home;