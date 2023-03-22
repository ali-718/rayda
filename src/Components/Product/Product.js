import React from "react";
import { Button } from "../Button/Button";
import "./styles.css";

export const Product = () => {
  return (
    <div className="p-[10px] rounded-[10px] border w-[290px]">
      <img
        src={
          "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_1280.jpg"
        }
        className="w-full h-[130px] object-cover rounded-[10px]"
        alt='product'
      />
      <div className="flex items-center mt-[10px]">
        <div className="w-[32px] h-[32px] bg-[#F2F4F7] flex items-center justify-center rounded-full">
          <p className="text-[12px] text-[#475467]">KO</p>
        </div>

        <p className="medium text-[12px] ml-[10px]">
          Koray Okumus{" "}
          <span className="text-[#98A2B3] light">(Highest Bidder)</span>
        </p>
      </div>
      <p className="productName ml-2 text-[14px] semibold mt-[18px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </p>
      <p className="mt-[18px] text-[14px] light pb-2 border-b mb-[12px]">Current Bid: <span className="semibold">₦795,000</span></p>
    
        <Button text="Add to wishlist" />
    </div>
  );
};
