import React from "react";
import { useDispatch } from "react-redux";
import { changePostFilter } from "../store/actions/actionCreators";
import {
  filters,
  filterStyles,
  getFilterStyle
} from "../services/utils/filters";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//shows filter options for a given img
export default props => {
  const { img } = props;
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 4,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 605,
        settings: {
          slidesToShow: 3,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToScroll: 2
        }
      },
    ]
  };

  return (
    <section
      className="img-filter-preview"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <div className="carusel-container" id="carusel-container">
        <Slider {...settings}>
          {filters.map((filter, i) => {
            return (
              <div
                className="carusel-item"
                key={i}
                onClick={() => dispatch(changePostFilter(filter.className))}
              >
                <h3>{filter.label}</h3>
                <div className="img-container">

                <img
                  alt="..."
                  src={img}
                  style={getFilterStyle(filterStyles[filter.className])}
                  />
                  </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
