import React from "react";
import Card from "./Card";
import { testData } from "./TestData";

export const CardList = () => {
  return (
    <div>
      {testData.map((profile, i) => (
        <Card key={i} {...profile} />
      ))}
    </div>
  );
};
