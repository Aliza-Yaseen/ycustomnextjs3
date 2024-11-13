'use client'
// Import the specific icons you need
import { CgMail } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"; // LinkedIn, GitHub, Instagram icons

export default function Homepage() {
    return (
        <section className="homepage">
            <div className="inner">
                <div className="x-container">
                    <div className="x-row">
                        <div className="x-col-12">
                            <div className="home-content">
                                <h1>Hi, Im <span> Aliza Yaseen.</span> Frontend Developer & UI/UX Enthusiast.</h1>
                                <p>Specialized in creating fast, responsive websites with modern design</p>
                            </div>

                            <div className="home-icons">
                                {/* Email Icon */}
                                <div className="iconbox">
                                    <a href="mailto:alizayaseen110@gmail.com">
                                        <CgMail />
                                    </a>
                                </div>

                                {/* LinkedIn Icon */}
                                <div className="iconbox">
                                    <a
                                        href="https://www.linkedin.com/in/aliza-yaseen-5548aa2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        target="_blank" rel="noopener noreferrer">
                                        <AiFillLinkedin />
                                    </a>
                                </div>

                                {/* GitHub Icon */}
                                <div className="iconbox">
                                    <a href="https://github.com/Aliza-Yaseen" target="_blank" rel="noopener noreferrer">
                                        <AiFillGithub />
                                    </a>
                                </div>

                                {/* Instagram Icon */}
                                <div className="iconbox">
                                    <a href="https://www.instagram.com/i_alizayaseen?igsh=cjlpY3ExcWt5dHVm"
                                        target="_blank" rel="noopener noreferrer">
                                        <AiOutlineInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
