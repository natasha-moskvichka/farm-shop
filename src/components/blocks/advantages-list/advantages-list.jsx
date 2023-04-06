import React from "react";
import Title from "/src/components/ui/title/title";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import Button from "/src/components/ui/button/button";
import "./style.css";

function AdvantagesList({ advantages }) {
  return (
    <section className="advantage-list">
      {advantages?.length ? (
        <>
          <Title>Почему фермерские продукты лучше?</Title>
          <ul className="advantage-list__list">
            {advantages.map((advantage) => (
              <li className="advantage-list__item" key={advantage.id}>
                <AdvantageCard {...advantage} />
              </li>
            ))}
          </ul>
          <Button minWidth={260}>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default AdvantagesList;

