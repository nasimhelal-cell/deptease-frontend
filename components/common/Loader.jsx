import React from "react";

const Loader = ({ text = "loading ..." }) => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-2">
      <span className="w-[100px] h-[100px] rounded-full border-[10px] border-dashed  block slow-spin border-gray-200"></span>
      <span className="first-letter:capitalize text-pink-400">{text}</span>
    </div>
  );
};

export default Loader;
