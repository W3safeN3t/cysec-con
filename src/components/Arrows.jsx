import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition-all z-10"
  >
    <ChevronLeft size={24} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition-all z-10"
  >
    <ChevronRight size={24} />
  </button>
);

export { CustomLeftArrow, CustomRightArrow };