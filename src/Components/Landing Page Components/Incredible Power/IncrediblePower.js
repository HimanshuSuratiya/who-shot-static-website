import React from 'react'
import Images from "../../../Images/Images";

const IncrediblePower = () => {
    return (
        <>
            <section class="section_incredible_power section_padd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="whyUserscont">
                                <h5>MORE REASON TO CHOOSE THIS</h5>
                                <h2>Incredible power of your business productivity</h2>

                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="right_more_reason">
                                        <div class="reason_icon">
                                            <img src={Images.chat} alt="chat" width="30" />
                                        </div>
                                        <div class="reason_contant">
                                            <h5>Easy Chat</h5>
                                            <p>Messenger communication for consectetur adipiscing .</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="right_more_reason">
                                        <div class="reason_icon">
                                            <img src={Images.notification} alt="notification" width="30" />
                                        </div>
                                        <div class="reason_contant">
                                            <h5>Notification</h5>
                                            <p>Messenger communication for consectetur adipiscing .</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="right_more_reason mt-4">
                                        <div class="reason_icon">
                                            <img src={Images.power} alt="power" width="30" />
                                        </div>
                                        <div class="reason_contant">
                                            <h5>Powerful Admin</h5>
                                            <p>Messenger communication for consectetur adipiscing .</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="right_more_reason mt-4">
                                        <div class="reason_icon">
                                            <img src={Images.email} alt="email" width="30" />
                                        </div>
                                        <div class="reason_contant">
                                            <h5>Mail Alert</h5>
                                            <p>Messenger communication for consectetur adipiscing .</p>
                                        </div>
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

export default IncrediblePower;