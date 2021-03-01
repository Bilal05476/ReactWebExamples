import React from "react";
import CData from "./CData";

const Cards = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="my-4">
          <h6>Wants to Support</h6>
          <h2>Support Acme Outdoors</h2>
        </div>
        <div className="row">
          <CData num="01" text="SALE PRODUCTS" />
          <CData num="02" text="DONATE" />
          <CData num="03" text="AVAIL GIFT CARDS" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
