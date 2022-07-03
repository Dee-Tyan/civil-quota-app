import React, { ReactNode } from "react";
import Profile from "../../ProfileCard/Profile";
import profiledata from "../../../dummyprofiledata"
import heroImg from "../../../assets/hero.jpg"

const Homepage = () => {
    let renderProfile: ReactNode = profiledata.map(talent => {
        return <Profile tname={talent.tname} age={talent.age} location={talent.location} mentor={talent.mentor}  />
      })
  return (
    <div className="">
      <main>
        <section className="w-full m-h-14">
          <img src={heroImg}/>
        </section>

        <section className="flex flex-wrap gap-10">

        {renderProfile}  
        </section>
      </main>
    </div>
  );
};

export default Homepage;
