import React from "react";
import talent from "../../assets/trainee.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="grid grid-col shadow-inner">
        <div className="flex flex-col sm:flex-row">
          <div className="w-80">
            <img
              className="rounded object-contain w-full h-52"
              src={talent}
              alt="talent"
            />
          </div>
          <div className="py-4 px-4 sm:w-full">
            <h4 className="text-bold">Lorem libero donec</h4>
            <p className="flex flex-wrap text-sm mt-2">
             A lot has happened in my life since I was selcted to join the program. I am grateful for all the help of our sponsors and I wish every other child out there can get the chance I did to make their life better as well.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
