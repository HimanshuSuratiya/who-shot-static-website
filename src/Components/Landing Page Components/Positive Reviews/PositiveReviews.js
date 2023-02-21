import React from 'react';
import Images from "../../../Images/Images";

const PositiveReviews = () => {
    return (
        <>
            <section class="section_simplest_way section_padd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 heading_title text-center">
                            <h2>Simplest way to bringing world to little close to you</h2>
                            <p>Consectetur adipiscing elitsed do eiusmod tempor incididunt labore</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="quiz_counter">
                                <div class="count-wrap"><span class="count-num">14</span>K+</div>
                                <h5>Positive Reviews</h5>
                                <p class="reviews_star">Messenger communication consectetur adipiscing elit, sed do eiusmod
                                    tempor labore.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="quiz_counter counterup-image">
                                <img src={Images.counterupImage} alt="Counterrup Image" />
                                <p><span>No credit card needed ? </span>Try it free 7 days free</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="quiz_counter">
                                <div class="count-wrap"><span class="count-num">10</span>K+</div>
                                <h5>5 Star Ratings</h5>
                                <p class="reviews_star">Messenger communication consectetur adipiscing elit, sed do eiusmod
                                    tempor labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PositiveReviews;