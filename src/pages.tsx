import React, {lazy} from "react"

const Home = lazy(() => import("./pages/HomePage/home"));
const Error = lazy(() => import("./pages/ErrorPage/error"));
const NoPageFound = lazy(() => import("./pages/NoPageFound/nopagefound"));
const LandingPageLayout = lazy(() => import("./pages/LandingPage/landingPage"));

export {
    Home,
    Error,
    NoPageFound,
    LandingPageLayout
}