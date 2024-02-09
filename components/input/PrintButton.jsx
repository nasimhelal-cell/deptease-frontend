"use client";

import React from "react";

const PrintButton = () => {
  return (
    <button
      onClick={() => {
        window.print();
      }}
      className="absolute gradient-primary bg-gradient-to-tr text-white w-[100px] bottom-7 right-7 py-2 rounded-md print:text-white"
    >
      Print
    </button>
  );
};

export default PrintButton;
