import React from 'react'
import Images from "../../../Images/Images";

const DownloadNow = () => {
    return (
        <>
            <section class="section_incredible_power section_padd replybgcolor">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="whyUserscont padtop">
                                <h5>COMMUNICATE FASTER THAN EVER</h5>
                                <h2>Reply to your customers in time</h2>
                                <p>Messenger communication consectetur adipiscing elit, sed do eiusmod tempor labore. it now
                                    takes seconds to communicate with your customers.</p>

                                <a href="#!" class="btn download_nowBtn bgColor colorwhite btndesgin">Download Now</a>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="full_widthimg">
                                <img src={Images.phone} alt="Phone Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadNow;