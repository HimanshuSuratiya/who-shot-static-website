import React from 'react'
import CountUp from 'react-countup';

const StaticsCounter = () => {
    return (
        <section className="counterSection">
            <div className="transformNone">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="section-head">
                                <span className="aon-sub-title">Statics</span>
                                <h2 className="sf-title">Trusted by thousands of people all over the world</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="counter">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={259}
                                                duration={5}
                                            >
                                            </CountUp>
                                        </span>
                                        <h6>Clients</h6>
                                    </div>
                                    <div className="counter purple mt-3">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={599}
                                                duration={5}
                                            >
                                            </CountUp>
                                        </span>
                                        <h6>Live Hunts</h6>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="counter">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={1156}
                                                duration={5}
                                            >
                                            </CountUp>
                                        </span>
                                        <h6>Hunters</h6>
                                    </div>
                                    <div className="counter purple mt-3">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={2350}
                                                duration={5}
                                            >
                                            </CountUp>
                                        </span>
                                        <h6>Total Hunts</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaticsCounter;