import React from 'react'
import Slider from "./Slider/Slider";
import Features from './Features/Features';
import PositiveReviews from './Positive Reviews/PositiveReviews';
import AppWork from "./App work/AppWork";
import AppDescription from "./AppDescription/AppDescription";
import IncrediblePower from "./Incredible Power/IncrediblePower";
import OtherSlider from './Other Slider/OtherSlider';

const Landing = () => {
    return (
        <>
            <Slider />
            <PositiveReviews />
            <AppWork />
            <Features />
            <AppDescription />
            <IncrediblePower />
            <OtherSlider />
        </>
    )
}

export default Landing;