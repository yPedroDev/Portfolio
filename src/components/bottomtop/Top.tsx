import React, {lazy} from "react";
const MyNavbar = lazy(() => import("../navbar/Navbar"));

const Top = () => {
  return (
    <>
      <MyNavbar />
    </>
  );
};

export default Top;
