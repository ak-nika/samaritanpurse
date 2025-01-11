import React from "react";
import { cardData } from "../constants";
import Card from "./Card";

const Main = () => {
  return (
    <section className="max-w-[1140px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </section>
  );
};

export default Main;
