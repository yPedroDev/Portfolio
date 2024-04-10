import React, {lazy} from "react";

const Footer = lazy(() => import("../footer/Footer"));

const Bottom = () => {
    return (
        <>
            <Footer/>
        </>
    )
}

export default Bottom;