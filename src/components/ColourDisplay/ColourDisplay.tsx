"use client";

import React, { useEffect } from "react";

interface Item {
  id: string;
  name: string;
  color: string;
}

interface Props {
  id: string;
}

export const ColourDisplay = ({ id }: Props) => {
  const items: Item[] = [
    { id: "1", name: "Red", color: "#FF0000" },
    { id: "2", name: "Blue", color: "#0000FF" },
    { id: "3", name: "Green", color: "#00FF00" },
  ];

  const selectedItem = items.find((item) => item.id === id);

  useEffect(() => {
    const handlePageReveal = async (e: any) => {
      if (e.viewTransition) {
        const element = document.querySelector(".color-box") as HTMLElement;

        if (element) {
          element.style.viewTransitionName = `item-${id}`;
        }

        await e.viewTransition.ready;
        if (element) {
          element.style.viewTransitionName = "";
        }
      }
    };

    window.addEventListener("pagereveal", handlePageReveal);

    return () => {
      window.removeEventListener("pagereveal", handlePageReveal);
    };
  }, [id]);

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
        className="color-box w-56 h-56 mb-4 rounded-md"
        style={{
          backgroundColor: selectedItem.color,
        }}
      ></div>
      <h3 className="text-lg text-gray-800 font-semibold">
        {selectedItem.name}
      </h3>
    </div>
  );
};
