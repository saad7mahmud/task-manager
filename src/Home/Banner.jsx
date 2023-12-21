import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  const hoverAnimation = {
    hover: {
      scale: 0.5, // Scale the image to 110% on hover
      transition: { duration: 0.2 },
    },
    rest: {
      scale: 1, // Return to the original size when not hovered
    },
  };

  return (
    <div className="p-2 overflow-hidden">
      <div data-aos="fade-left" className="mt-10 mb-10 ">
        <div className="hero-content flex flex-col p-10">
          <motion.img
            initial="rest"
            whileHover="hover"
            variants={hoverAnimation}
            src="https://i.ibb.co/F6NRkLb/vector.png"
            className="max-w-xl w-1/2 mb-10 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-light text-center">
              Manage Your Tasks
              <br />
              <span className="text-rose-500 font-bold text-center">
                {" "}
                USE TIME EFFICIENTLY
              </span>
            </h1>
            <Link to="dashboard">
              <button className="btn btn-error  text-white mx-auto flex mt-5">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
