import React from 'react'
import Images from '../../../Images/Images';

const OtherSlider = () => {
    return (
        <>
            <section class="section_testimonials  section_padd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="testimonial-slider" class="owl-carousel">
                                <div class="testimonial">
                                    <div class="pic">
                                        <img src={Images.girl1} alt="girl-1" />
                                    </div>
                                    <div class="testimonial-content">
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">web developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor nibh, semper at
                                            pretium vitae, tincidunt non risus. Aenean mattis sit amet ex nec venenatis.
                                            Pellentesque tempus pellentesque efficitur. Nulla commodo bibendum quam, at
                                            imperdiet orci congue non. Maecenas interdum.
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial">
                                    <div class="pic">
                                        <img src={Images.girl1} alt="girl-1" />
                                    </div>
                                    <div class="testimonial-content">
                                        <h3 class="title">kristina</h3>
                                        <span class="post">Web Designer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor nibh, semper at
                                            pretium vitae, tincidunt non risus. Aenean mattis sit amet ex nec venenatis.
                                            Pellentesque tempus pellentesque efficitur. Nulla commodo bibendum quam, at
                                            imperdiet orci congue non. Maecenas interdum.
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial">
                                    <div class="pic">
                                        <img src={Images.girl1} alt="girl-1" />
                                    </div>
                                    <div class="testimonial-content">
                                        <h3 class="title">kristina</h3>
                                        <span class="post">Web Designer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor nibh, semper at
                                            pretium vitae, tincidunt non risus. Aenean mattis sit amet ex nec venenatis.
                                            Pellentesque tempus pellentesque efficitur. Nulla commodo bibendum quam, at
                                            imperdiet orci congue non. Maecenas interdum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OtherSlider;