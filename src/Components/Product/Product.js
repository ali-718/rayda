import React from "react";
import { Button } from "../Button/Button";
import placeholder from '../../Assets/images/placeholder.png'
import "./styles.css";
import { getInitials } from "../../Utils/Product";

export const Product = ({ name, title, bid, image }) => {
  return (
    <div className="p-[10px] rounded-[10px] border w-[290px]">
      <img
        src={image || placeholder}
        className="w-full h-[130px] object-cover rounded-[10px]"
        alt='product'
      />
      <div className="flex items-center mt-[10px]">
        <div className="w-[32px] h-[32px] bg-[#F2F4F7] flex items-center justify-center rounded-full">
          <p className="text-[12px] text-[#475467]">{getInitials(name)}</p>
        </div>

        <p className="medium text-[12px] ml-[10px]">
          {name}{" "}
          <span className="text-[#98A2B3] light">(Highest Bidder)</span>
        </p>
      </div>
      <p className="productName mr-2 text-[14px] semibold mt-[18px]">
        {title}
      </p>
      <p className="mt-[18px] text-[14px] light pb-2 border-b mb-[12px]">Current Bid: <span className="semibold">{bid}</span></p>
    
        <Button text="Add to wishlist" />
    </div>
  );
};
