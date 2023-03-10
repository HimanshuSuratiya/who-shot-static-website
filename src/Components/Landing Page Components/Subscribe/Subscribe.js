import React from 'react'

const Subscribe = () => {
    return (
        <>
            <section class="subscribe-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-4">
                            <div class="subscribe">
                                <h3>Subscribe to Newsletter</h3>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-8">
                            <div class="email-box">
                                <form class="auth-form needs-validation" id="mc-embedded-subscribe-form" action="" method="post"
                                    name="mc-embedded-subscribe-form" target="_blank">
                                    <input class="form-control" id="mce-EMAIL" name="EMAIL" placeholder="Your email address:"
                                        type="email" required="required" />
                                    <button class="btn btn-email" id="mc-submit" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe;