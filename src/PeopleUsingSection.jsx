import React from "react";
import { FaCode, FaBriefcase, FaUniversity } from "react-icons/fa";

const PeopleUsingSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">People Using</h2>

        <div className="flex flex-wrap justify-center space-x-12">
          {/* Developer */}
          <div className="flex flex-col items-center">
            <FaCode className="text-7xl text-blue-500 mb-2" />
            <p className="text-xl">Developers</p>
          </div>

          {/* Corporate Professionals */}
          <div className="flex flex-col items-center">
            <FaBriefcase className="text-7xl text-green-500 mb-2" />
            <p className="text-xl">Corporate Professionals</p>
          </div>

          {/* Bankers */}
          <div className="flex flex-col items-center">
            <FaUniversity className="text-7xl text-indigo-500 mb-2" />
            <p className="text-xl">Bankers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleUsingSection;
