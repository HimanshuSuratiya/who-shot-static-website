import React from 'react'
import Images from "../../../Images/Images"

const Slider = () => {
    return (
        <>
            <section class="heroslider">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="first-slide" src={Images.slider} alt="First slide" />
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="carousel-caption text-left">
                                            <h1> Make it easy to simply & better </h1>
                                            <p>To increase sales by skyrocketing communication with All messages in<br /> one
                                                simple dashboard it now takes seconds.</p>
                                            <p><a class="btn btn-md bgColor colorwhite btndesgin" href="#"
                                                role="button">Download App</a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="carousel-caption mobile-image">
                                            <img src={Images.mobile1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="second-slide" src={Images.slider} alt="Second slide" />
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="carousel-caption text-left">
                                            <h1> Make it easy to simply & better </h1>
                                            <p>To increase sales by skyrocketing communication with All messages in<br /> one
                                                simple dashboard it now takes seconds.</p>
                                            <p><a class="btn btn-md bgColor colorwhite btndesgin" href="#"
                                                role="button">Download App</a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="carousel-caption mobile-image">
                                            <img src={Images.mobile1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="third-slide" src={Images.slider} alt="Third slide" />
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="carousel-caption text-left">
                                            <h1> Make it easy to simply & better </h1>
                                            <p>To increase sales by skyrocketing communication with All messages in<br /> one
                                                simple dashboard it now takes seconds.</p>
                                            <p><a class="btn btn-md bgColor colorwhite btndesgin" href="#"
                                                role="button">Download App</a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="carousel-caption mobile-image">
                                            <img src={Images.mobile1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Slider;