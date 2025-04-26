import React, { Fragment } from "react";
import { SheetClose } from "../ui/sheet";

const SheetCloseWrapper = ({ closeOnClick = false, children }) => {
  return (
    <>
      {closeOnClick ? (
        <SheetClose asChild>{children}</SheetClose>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </>
  );
};

export default SheetCloseWrapper;
