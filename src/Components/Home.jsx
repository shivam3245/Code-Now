import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import CodeEditor from './CodeEditor';
import { Box } from "@chakra-ui/react";
import CodepenApp from './CodePen/CodepenApp';


const Home = () => {
    const [showEditor, setShowEditor] = useState(false);
    const [showCodepen, setShowCodepen] = useState(false);

    return (
        <>
            <div className={`bg-blend-color h-screen flex flex-col items-center ${showEditor ? 'hidden' : ''}`}
                style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid)' }}>
                <div className="mb-32">
                    <div className="flex flex-col sm:flex-row items-center mt-10">
                        <h1 className="text-white text-center md:text-5xl text-3xl">
                            Welcome To
                        </h1>
                        <ReactTyped
                            className="text-white text-3xl md:text-5xl font-bold py-5 sm:py-11 sm:ml-3"
                            strings={["CodeNow"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-1 md:mt-">
                    <div className="text-center text-2xl sm:text-3xl">
                        <h1 className="text-green-500 font-serif">Please select your required Code editor</h1>
                    </div>
                    <div className="mt-7 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-7">
                        <button
                            onClick={() => setShowEditor(true)}
                            className="bg-black animate-rgb-border hover:scale-105 duration-200 cursor-pointer text-xl md:text-2xl h-20 w-full md:w-60 text-white border border-[0.2rem] rounded-lg p-1" type="button">
                            Start Coding
                            <h1 className="text-sm text-gray-500">(choose language)</h1>
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowCodepen(true)}
                            className="bg-black animate-rgb-border hover:scale-105 duration-200 text-xl md:text-2xl h-20 w-full md:w-60 text-white border border-[0.2rem] rounded-lg p-1"
                        >
                            DevBoard
                            <h1 className="text-sm text-gray-500 ">(HTML/CSS/JS)</h1>
                        </button>
                    </div>
                </div>
            </div>
            {showCodepen && (
                <div className="bg-black text-white h-screen min-h-screen fixed inset-0 z-50 overflow-auto">
                    <button
                        className="absolute top-0 right-4 bg-red-600 hover:bg-red-800 text-white  md:my-10 rounded text-xs md:text-[1rem] h-6 w-20 md:h-8 md:w-28"
                        onClick={() => setShowCodepen(false)}
                    >
                        Close Editor
                    </button>
                    <CodepenApp />
                </div>
            )}
            {/* Conditionally render CodeEditor */}
            {showEditor && (
                <Box
                    minH="100vh"
                    bg='#0f0a19'
                    color='gray.500'
                    px={6}
                    py={4}
                    className="bg-black text-white h-screen fixed inset-0 z-50 overflow-auto"
                >
                    <button
                        className="absolute top-3 right-4 bg-red-600 hover:bg-red-800 text-white p-2 rounded text-xs md:text-[1rem] md:h-10 md:w-28"
                        onClick={() => setShowEditor(false)}
                    >
                        Close Editor
                    </button>
                    <CodeEditor />
                </Box>
            )}
        </>
    );
};

export default Home;
