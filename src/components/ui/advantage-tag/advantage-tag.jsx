import React from "react";
import "./style.css";

export const ProductFuture = {
  STORE: "store",
  FARM: "farm",
};

function AdvantageTag({ className = "",  feature }) {
  let option;

  switch (feature) {
    case ProductFuture.STORE:
      option = {
        tag: "Магазинные продукты",
        bgColor: "#F8DDD7"
      };
      break;
    case ProductFuture.FARM:
      option = {
        text: "Фермерские продукты",
        bgColor: "#E1EDCE"
      };
      break;
  }

  return option.text ? (
    <span
      className={`advantage-tag ${className}`}
      style={{ backgroundColor: option.bgColor }}
      >
      {option.text}
    </span>
  ) : null;
}

export default AdvantageTag;

