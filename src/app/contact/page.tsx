'use client'

import Navbar from "@/app/components/navbar"
export default function Contact() {
    return (
        <div className="">
            <Navbar></Navbar>
            <section className="contact">
                <div className="inner">
                    <div className="x-container">
                        <div className="x-row">
                            <div className="x-col-12">
                                <div className="contact-wrapper">
                                    {/* Contact Form */}

                                    <div className="contact-form">
                                        <h2 className="section-title">Contact Me</h2>

                                        <form action="#" method="POST">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your Email" required />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={5} placeholder="Your Message" required></textarea>

                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn-submit">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}