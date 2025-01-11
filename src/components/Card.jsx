import React from "react";

const Card = ({ image, title, text, link }) => {
  return (
    <a href={link}>
      <div className="flex flex-col gap-5">
        <div className="w-full">
          <img src={image} alt={title} className="object-cover w-full" />
        </div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </a>
  );
};

export default Card;
