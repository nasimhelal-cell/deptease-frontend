import React from "react";

const RootLayout = ({ children }) => {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-tr gradient-primary">
      {children}
    </main>
  );
};

export default RootLayout;
