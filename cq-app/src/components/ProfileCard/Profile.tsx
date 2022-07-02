import React from "react";
import profilecard from "../../assets/trainee.jpg";

interface ProfileElements {
  tname: string;
  age: number;
  location: string;
  mentor: string;
}

const Profile = (props: ProfileElements) => {
  let { tname, age, location, mentor } = props;
  return (

      <div className="w-48 text-xs shadow-lg p-4 pb-3">
        <img src={profilecard} className="w-full rounded-lg" />
        <h3 className="text-lg text-gray-900"> {tname}</h3>
        <div className="block justify-center items-center ">
          <span className="text-bgray">Age: {age}</span>
          <p className="text-bgray">Location:{location}</p>
        </div>

        <p>
          <span className="text-blue-500">
            {" "}
            When I grow up I want to be like: {mentor}⭐{" "}
          </span>
        </p>
      </div>
  );
};

export default Profile;
