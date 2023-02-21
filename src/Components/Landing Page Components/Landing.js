import React from 'react'
import Slider from "./Slider/Slider";
import Features from './Features/Features';
import PositiveReviews from './Positive Reviews/PositiveReviews';
import AppWork from "./App work/AppWork";
import AppDescription from "./AppDescription/AppDescription";
import IncrediblePower from "./Incredible Power/IncrediblePower";
import OtherSlider from './Other Slider/OtherSlider';
import DownloadNow from "./Download Now/DownloadNow";
import AppAvailable from "./App Available/AppAvailable";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

const Landing = () => {
    return (
        <>
            <Slider />
            <PositiveReviews />
            <AppWork />
            {/* <Features /> */}
            <AppDescription />
            <IncrediblePower />
            <OtherSlider />
            <DownloadNow />
            <AppAvailable />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Landing;