import { CircularProgress } from "@mui/material";
import React from "react";
import { Button } from "../Button/Button";
import { Product } from "../Product";
import "../Profile/styles.css";
import "./styles.css";

export const Featured = ({ list = [], isLoading }) => {
  return (
    <div className="border rounded-[10px] p-4 mt-[24px] proBackground">
      <div className="py-6 flex items-center justify-between border-b">
        <p className="text-[18px] medium">Featured Items</p>
        <Button type={"outline"} text={"View Auction"} />
      </div>
      {isLoading && (
        <div className="w-full my-[40px] flex items-center justify-center">
          <CircularProgress />
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-[24px] gap-[20px] productGrid">
          {list.map(({ name, title, bid, image }, index) => (
            <Product
              name={name}
              title={title}
              bid={bid}
              image={image}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
