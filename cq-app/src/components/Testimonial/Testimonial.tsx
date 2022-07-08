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
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
              non mi porta gravida at eget metus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
