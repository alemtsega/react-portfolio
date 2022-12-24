import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         I am an information system sudent 
         so that i must understand and work with react
         and tailwind CSS is a utility-first CSS framework .
         
        
        </p>

        <br />

        <p className="text-xl">
        tailwind CSS is a utility-first CSS framework which makes 
         it very easy to apply great styling to your React web application 
         by choosing from the framework's ready-made ailwind CSS is a utility-first 
         CSS framework which makes it very easy to apply great styling 
        to your React web application by choosing from the framework's ready-made 


        </p>
      </div>
    </div>
  );
};

export default About;
