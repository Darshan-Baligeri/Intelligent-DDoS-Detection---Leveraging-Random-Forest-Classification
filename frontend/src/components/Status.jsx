import React from "react";
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component

const Status = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            {/* Sticky Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center text-center text-white">
                <div className="w-full h-full relative">
                    {/* Main Lottie animation covering full width and adjusted height */}
                    <lottie-player 
                        src="https://lottie.host/feefc35a-4d4c-486b-ae6f-05dc44e93295/88YapGKkv0.json" 
                        background="transparent" 
                        speed="1" 
                        style={{ width: '100vw', height: '100vh' }} 
                        loop 
                        autoplay 
                        direction="1" 
                        mode="normal">
                    </lottie-player>

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8">
                        <h1 className="bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent select-auto">
                            DDoS Detector is ON
                        </h1>

                        {/* Smaller Animation and Notification Text */}
                        <div className="absolute bottom-8 w-full flex flex-col items-center">
                    <lottie-player
                        src="https://lottie.host/c5441de2-5702-49e9-888f-b8215c964432/vfYeaKyKda.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '100px', height: '100px' }}
                        loop
                        autoplay
                        direction="1"
                        mode="normal"
                    ></lottie-player>
                    <p className="text-lg mt-4 text-center">
                        You will be notified in case of any suspicious activity
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

export default Status;
