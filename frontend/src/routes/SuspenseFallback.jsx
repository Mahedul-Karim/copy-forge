import React, { Suspense } from "react";
import Loader from "../components/common/loader/Loader";

const SuspenseFallback = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseFallback;
