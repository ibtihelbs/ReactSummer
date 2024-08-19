import React from "react";

export const H1 = (dhia) => {
  console.log(dhia);
  return (
    <h1 style={{ backgroundColor: "red", textAlign: dhia.align }}>
      {dhia.text}
    </h1>
  );
};
