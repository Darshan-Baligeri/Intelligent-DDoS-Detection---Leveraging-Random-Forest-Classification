import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const EmailInput = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:3000/update-alert-email', { email });
            setMessage('Email updated successfully!');
            navigate('/detect');
        } catch (error) {
            setMessage('Failed to update email.');
          //  navigate('/detect');
            console.error(error);
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-gray-900 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <lottie-player
                    src="https://lottie.host/713ce9d9-4925-4d96-a0da-d313232704f9/WSoBTkC7Eo.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '100%', height: '100%' }}
                    loop
                    autoplay
                ></lottie-player>
            </div>

            {/* Sticky Header */}
            <Header className="w-full" />

            {/* Form Content */}
            <div className="relative w-full min-h-screen flex items-center justify-center pt-16 z-10">
                <div className="w-full max-w-2xl p-4 bg-[rgba(0,0,0,0.7)] rounded-xl shadow-lg text-white border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                    <h1 className="text-4xl font-bold text-center mb-12 text-blue-500">
                        Detect DDOS
                    </h1>

                    <form onSubmit={handleEmailSubmit} className="space-y-6">
                        <label htmlFor="email" className="text-lg font-semibold">
                            Enter Your Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control block w-full p-4 mt-2 text-lg rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300 ease-in-out"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="btn-submit w-full mt-6 py-3 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition duration-300 ease-in-out"
                        >
                            Update Alert Email
                        </button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EmailInput;
