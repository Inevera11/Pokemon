import React from "react";

type Props = {
  title: string;
  img: string;
  skill1: string;
  skill2: string;
};

export const Card = ({ title, img, skill1, skill2 }: Props) => {
  return (
    <div style={{ border: "2px" }}>
      <p>{title}</p>
      <img src={img} />

      <ul>
        <li>{skill1}</li>
        <li>{skill2}</li>
      </ul>
    </div>
  );
};
