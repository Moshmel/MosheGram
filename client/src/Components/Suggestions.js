import React from "react";
import SuggestionsItem from "./SuggestionsItem";
export default () => {
  return (
    <section className="suggestions">
      <h3>Suggestions For You</h3>
      <div className="item-container">
        <SuggestionsItem
          username="moshe"
          img="https://res.cloudinary.com/explority/image/upload/v1576684946/sug1_ihcv91.jpg"
        />

        <SuggestionsItem
          username="deva199"
          img="https://res.cloudinary.com/explority/image/upload/v1576684946/sug2_t9tptc.jpg"
        />

        <SuggestionsItem
          username="tube99"
          img="https://res.cloudinary.com/explority/image/upload/v1576684945/sug3_vwpnuk.jpg"
        />
      </div>
    </section>
  );
};
