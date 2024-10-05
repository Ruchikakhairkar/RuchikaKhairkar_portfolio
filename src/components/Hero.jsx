import React from "react";
import ruchikaImage from "../assets/ruchkaa.png";
import ruchikaresume from "../assets/ruchikaresume.pdf";

const Hero = ({ theme }) => {
  const heroStyle = {
    backgroundColor: theme === "light" ? "#ebfaf7" : "#000000",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div id="hero" style={heroStyle}>
      <div className="md:grid grid-cols-2 ">
        <div className="flex md:mt-0 justify-center md:items-start items-center flex-col mx-5 md:mx-48 pt-10 animate-slideIn">
          <h1 className="text-4xl">Hey,</h1>
          <h2 className="text-3xl font-semibold">I'm Ruchika Khairkar</h2>
          <h2 className="text-2xl font-semibold">
            a <span className="text-blue">web developer</span>
          </h2>
          <p className="mt-4">
            Are you looking for a developer to build your brand and grow your
            business? Let's shake hands with me.
          </p>

          <div className="mt-4 md:flex text-center md:space-x-3">
            <div>
              <a
                href="whatsapp://send?phone=917038899286&text=Hi%20Ruchika%20Khairkar%2C%20We%27re%20looking%20for%20a%20web%20developer%20to%20join%20our%20team.%20If%20you%27re%20passionate%20about%20building%20awesome%20websites%2C%20we%27d%20love%20to%20hear%20from%20you!"
                className="p-3 bg-darkblue rounded text-white"
              >
                Hire me
              </a>
            </div>
            <div className="md:mt-0 mt-7">
              <a
                href={ruchikaresume}
                download="download"
                className="p-3 bg-darkblue rounded text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="md:ml-40 ml-10 animate-fadeIn">
          <img src={ruchikaImage} alt="Ruchika Khairkar" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
