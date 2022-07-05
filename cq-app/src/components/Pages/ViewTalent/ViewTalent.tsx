import React, { ReactNode } from 'react'
import Profile from "../../ProfileCard/Profile";
import profiledata from "../../../dummyprofiledata";

const ViewTalent = () => {

    let renderProfile: ReactNode = profiledata.map((talent) => {
        return (
          <Profile
            tname={talent.tname}
            age={talent.age}
            location={talent.location}
            mentor={talent.mentor}
          />
        );
      });
  return (
    <div>
    <section className="flex justify-center flex-wrap gap-10 shadow-md mb-2">
          {renderProfile}
        </section>


    </div>
  )
}

export default ViewTalent