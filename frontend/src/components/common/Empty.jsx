import React from "react";

const Empty = ({ title, className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img src="/empty.png" alt="" className="h-[400px] object-cover" />
      <p className="text-text-secondary text-lg">{title}</p>
    </div>
  );
};

export default Empty;
