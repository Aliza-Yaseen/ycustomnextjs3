import Navbar from '@/app/components/navbar'
import Link from 'next/link'
export default function Projects() {
    return (
        <div className="">
            <Navbar></Navbar>
            <section className="project">
                <div className="inner">
                    <div className="x-container">
                        <div className="x-row">
                            <div className="x-col-12">
                                <div className="project-heading">
                                    <h1>My Projects</h1>
                                    <p>
                                        As a Frontend Developer and UI/UX enthusiast, I have worked on a variety of projects that range from building responsive websites to creating seamless user experiences. Here are some of the projects I’ve worked on, each demonstrating my skills and passion for web development.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="x-row">
                            <div className="x-col-33">
                               <Link href="https://nextjs-falmingo.vercel.app/?vercelToolbarCode=pvtMtlYNeKOy1uu">
                               <div className="project-main">
                                    <img src="/flamingo.jpg" alt="" />
                                    <h3>Flamingo NextJS Ecommerce</h3>
                                </div>
                               </Link>
                            </div>
                            <div className="x-col-33">
                                <Link href="">
                                    <div className="project-main">
                                        <img src="/fbc.png" alt="" />
                                        <h3>Responsive FB Clone Custom</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="x-col-33">
                                <Link href="https://aliza-yaseen.github.io/new-ortfolio001/">
                                    <div className="project-main">
                                        <img src="/portfolio.png" alt="" />
                                        <h3>Custom Responsive Portfolio</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="x-col-33">
                                <Link href="">
                                    <div className="project-main">
                                        <img src="/figma.png" alt="" />
                                        <h3>Figma Design NextJS Ecommerce</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="x-col-33">
                                <Link href="https://github.com/Aliza-Yaseen/botanical-pt">
                                    <div className="project-main">
                                        <img src="/bot.png" alt="" />
                                        <h3>Botanical Ecommerce </h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="x-col-33">
                                <Link href="https://github.com/Aliza-Yaseen/Sheild_pro_custom_project">
                                    <div className="project-main">
                                        <img src="/shield.png" alt="" />
                                        <h3>ShieldPro CyberSecurity Website </h3>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}