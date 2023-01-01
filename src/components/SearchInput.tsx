import React from "react";
import search from "../images/search.png";
type Props = {
  value: (e: any) => void;
};

export const SearchInput = ({ value }: Props) => {
  return (
    <>
      <button onClick={() => console.log("search")}>
        <img src={search} />
      </button>
      <input type="search" onChange={value} />
    </>
  );
};
