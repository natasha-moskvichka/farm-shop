import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function AdvantageCard() {
  return (
    <article className="advantage-card">
      <p className="advantage-card__tag">Фермерские продукты</p>
      <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title>
      <p className="advantage-card__text">Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники</p>
    </article>
  )
}

export default AdvantageCard;
