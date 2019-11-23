import React from "react";
import { FaInstagram } from "react-icons/fa";

export default () => {
  return (
    <section className="loading fade-in">
      <div
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            fontSize: '60px',
            color: '#c1c1c1'
        }}
      >
        <FaInstagram />
      </div>
    </section>
  );
};
