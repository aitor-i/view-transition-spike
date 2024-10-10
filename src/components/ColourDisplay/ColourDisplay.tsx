"use client";

import React from "react";

interface Item {
  id: string;
  name: string;
  color: string;
}

interface Props {
  id: string; // The id string to filter and display the color
}

const items: Item[] = [
  { id: "1", name: "Red", color: "#FF0000" },
  { id: "2", name: "Blue", color: "#0000FF" },
  { id: "3", name: "Green", color: "#00FF00" },
];

export const ColourDisplay = ({ id }: Props) => {
  const selectedItem = items.find((item) => item.id === id);

  if (!selectedItem) {
    return (
      <div className="text-red-500 text-center p-4">
        Color not found for the provided ID!
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div
        className="w-56 h-56 mb-4 rounded-md"
        style={{
          backgroundColor: selectedItem.color,
          viewTransitionName: `item-${id}`,
        }}
      ></div>
      <h3 className="text-lg text-gray-800 font-semibold">
        {selectedItem.name}
      </h3>
    </div>
  );
};
