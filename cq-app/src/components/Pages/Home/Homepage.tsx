import React, { ReactNode } from "react";
import Profile from "../../ProfileCard/Profile";
import profiledata from "../../../dummyprofiledata";
import heroImg from "../../../assets/hero.jpg";

const Homepage = () => {
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
    <div className="">
      <main>
        <section className="w-full p-2 flex flex-col border-b-2 shadow-lg">
          <img className="h-60 rounded" src={heroImg} />
          <h1 className="mb-1 text-4xl">Empower the Next Generation</h1>
          <p className="mt-0 text-sm ">
            Join our Tech Talent community to sponsor the next generation of
            innovators.
          </p>
        </section>

        <section className="flex justify-center flex-wrap gap-10">
          {renderProfile}
        </section>
      </main>
    </div>
  );
};

export default Homepage;
