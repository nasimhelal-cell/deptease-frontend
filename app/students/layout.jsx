import Navbar from "@/components/common/Navbar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <main className="h-screen w-screen flex bg-gradient-to-tr gradient-primary relative">
      <Navbar />
      <div className="flex-1 h-full p-5">{children}</div>
    </main>
  );
};

export default RootLayout;
