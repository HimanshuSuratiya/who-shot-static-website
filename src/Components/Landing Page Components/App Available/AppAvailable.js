import React from 'react'
import Images from "../../../Images/Images";

const AppAvailable = () => {
    return (
        <>
            <section class="section_playstore section_padd text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 playStorebgImg">
                            <div class="playStore">
                                <h2>App is available for free on Google Play & App Store</h2>
                                <div class="playStoreImg_icon">
                                    <a href="#!" style={{ marginRight: '6px' }} ><img src={Images.appstore} alt="app-store" /></a>
                                    <a href="#!"><img src={Images.playstore} alt="play-store" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppAvailable;