import React from "react";
import Header from './Header';  // Assuming you have a Header component
import Footer from './Footer';  // Assuming you have a Footer component

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
        {/* Sticky Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center text-center text-white">
            <div className="w-full h-full relative">
                {/* Lottie animation covering full width and adjusted height */}
                <lottie-player 
                   src="https://lottie.host/a2f1ee92-017c-4a1f-900c-c041de33114a/i6OR1Zrtma.json"
 
                    background="transparent" 
                    speed="1" 
                    style={{ width: '100vw', height: '85vh',zIndex: -1 }} 
                    loop 
                    autoplay 
                    direction="1" 
                    mode="normal"
                    >
                </lottie-player>
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 text-left">
                        <div className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text">
                            <div>We are</div>
                            <div>Cyber Protectors.</div>
                            <div>Protecting you from</div>
                            <div>DDos Attacks.</div>
                           
                        </div>
                        <p className="text-xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text">
    As a passionate software developer and cybersecurity enthusiast, my mission is to use cutting-edge technologies to protect businesses and individuals from malicious cyber attacks. With a strong background in AI, machine learning, and DDoS detection, I strive to create secure, resilient systems that can effectively mitigate the risks of modern threats.
</p>
<div className="text-xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text">
    <p>My expertise lies in:</p>
    <ul className="text-xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text">
        <li className="text-shadow-xl">- Developing AI-powered DDoS detection systems</li>
        <li className="text-shadow-xl">- Designing and deploying machine learning models for real-time threat detection</li>
        <li className="text-shadow-xl">- Building full-stack applications with modern technologies (React, Node.js, Python)</li>
        <li className="text-shadow-xl">- Ensuring robust security protocols for web applications</li>
    </ul>
    <p className="mt-4 text-shadow-xl">
        With a passion for creating secure and scalable applications, I am always looking for new challenges to innovate and improve the cybersecurity landscape. Whether it's building AI-driven systems or providing consultation on security best practices, I am dedicated to making the digital world a safer place.
    </p>
</div>
                    </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </div>
    );
};

export default About;
