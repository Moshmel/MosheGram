import React from "react";
import SuggestionsItem from "./SuggestionsItem";
export default () => {
  return (
    <section className="suggestions">
      <h3>Suggestions For You</h3>
      <div className="item-container">
        <SuggestionsItem
          username="moshe"
          img="https://res.cloudinary.com/explority/image/upload/c_scale,h_150/v1566313959/user-image_jhgimu.jpg"
        />

        <SuggestionsItem
          username="deva199"
          img="https://res.cloudinary.com/explority/image/upload/c_scale,h_150/v1566313959/user-image_jhgimu.jpg"
        />

        <SuggestionsItem
          username="tube99"
          img="https://res.cloudinary.com/explority/image/upload/c_scale,h_150/v1566313959/user-image_jhgimu.jpg"
        />
      </div>
    </section>
  );
};
