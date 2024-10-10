import { ColourDisplay } from "@/components/ColourDisplay/ColourDisplay";
import React from "react";
interface Props {
  params: {
    id: string;
  };
}

export default function page({ params }: Props) {
  const { id } = params;
  return <ColourDisplay id={id} />;
}
