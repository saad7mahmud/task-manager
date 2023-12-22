import React from "react";
import { FaCode, FaBriefcase, FaUniversity } from "react-icons/fa";

const PeopleUsingSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">People Using</h2>

        <div className="flex flex-wrap items-center  justify-center space-x-12">
          {/* Developer */}
          <div className="flex justify-center flex-col items-center">
            <FaCode className="text-xl text-blue-500 mb-2" />
            <p className="text-xl text-center">Developers</p>
          </div>

          {/* Corporate Professionals */}
          <div className="flex justify-center flex-col items-center">
            <FaBriefcase className="text-xl text-green-500 mb-2" />
            <p className="text-xl text-center">Corporates</p>
          </div>

          {/* Bankers */}
          <div className="flex justify-center flex-col items-center">
            <FaUniversity className="text-xl text-indigo-500 mb-2" />
            <p className="text-xl">Bankers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleUsingSection;
