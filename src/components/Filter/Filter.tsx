"use client";

import React, { useState, useEffect } from "react";

interface Item {
  id: string;
  name: string;
  color: string; // Changed img to color for rendering the box
}

interface Props {
  items: Item[];
  selectedFilter: string | null;
}

const FilteredItems = ({ items, selectedFilter }: Props) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".item");

    document.startViewTransition(() => {
      elements.forEach((element) => {
        const itemId = element.getAttribute("data-item");
        if (selectedFilter === null || selectedFilter === itemId) {
          element.classList.remove("hidden"); // Show the item
        } else {
          element.classList.add("hidden"); // Hide the item
        }
      });
    });
  }, [selectedFilter]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {items.map((item) => (
        <div
          key={item.id}
          data-item={item.id}
          className="item transition-all duration-300 ease-in-out p-4 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center"
        >
          <div
            className="w-20 h-20 mb-2 rounded-md"
            style={{ backgroundColor: item.color }} // Render the color box
          ></div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const items = [
    { id: "1", name: "Red", color: "#FF0000" },
    { id: "2", name: "Blue", color: "#0000FF" },
    { id: "3", name: "Green", color: "#00FF00" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSelectedFilter(null)}
          className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
        >
          Show All
        </button>
        <button
          onClick={() => setSelectedFilter("1")}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-400"
        >
          Filter Red
        </button>
        <button
          onClick={() => setSelectedFilter("2")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400"
        >
          Filter Blue
        </button>
        <button
          onClick={() => setSelectedFilter("3")}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-400"
        >
          Filter Green
        </button>
      </div>

      <FilteredItems items={items} selectedFilter={selectedFilter} />
    </div>
  );
};
