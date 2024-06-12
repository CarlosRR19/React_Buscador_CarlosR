/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const frutas = [
  "Manzana 🍎",
  "Kiwi 🥝",
  "Melocotón 🍑",
  "Mango 🥭",
  "Piña 🍍",
  "Uvas 🍇",
];

const ListaFilter = ({ palabra }) => {
  return (
    <div>
      {frutas
        .filter((item) => item.startsWith(palabra))
        .map((item, index) => (
          <p key={index}>{item}</p>
        ))}
    </div>
  );
};

export default ListaFilter;
