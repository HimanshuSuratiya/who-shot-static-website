import React from 'react';
import Images from "../../../Images/Images";

const AppDescription = () => {
    return (
        <>
            <section class="whyUserslovethisappSection graibgcolor section_padd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="about_app_img">
                                <img src={Images.aboutApp} alt="aboutApp" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="whyUserscont">
                                <h5>WHY USERS LOVE THIS APP?</h5>
                                <h2>{`Features that aren’t so commonplace`}</h2>
                                <p>Messenger communication consectetur adipiscing elit, sed do eiusmod tempor labore. it now
                                    takes seconds toCon sectetur adipiscing elit, sed do eiusmod.adipiscing elit, sed do eiusmod
                                    tempor labore. it now takes seconds toCon sectetur adipiscing elit, sed do eiusmod.</p>
                                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor labore. it now takes seconds toCon
                                    sectetur adipiscing elit, sed do eiusmod.adipiscing elit, sed do eiusmod tempor labore. it
                                    now takes seconds toCon sectetur adipiscing elit.</p>
                                <div class="easilycontIcon">
                                    <ul class="icon_box_list">
                                        <li>
                                            <div class="icon">
                                                <i aria-hidden="true" class="mdi mdi-wordpress"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Easily manage</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i aria-hidden="true" class="mdi mdi-wordpress"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Secure Document</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i aria-hidden="true" class="mdi mdi-wordpress"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Easy Customize</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppDescription;