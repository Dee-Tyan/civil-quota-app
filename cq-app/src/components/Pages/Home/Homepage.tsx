import React from "react";
import heroImg from "../../../assets/hero.jpg";
import talent from "../../../assets/trainee.jpg"

const Homepage = () => {
  
  return (
    <div className="">
      <main>
        <section className="w-full p-4 flex flex-col border-b-2 shadow-lg">
          <img className="h-60 rounded" src={heroImg} />
          <h1 className="mb-1 text-4xl font-black">Next Generation Techies</h1>
          <p className="mt-0 text-sm ">
            Join our Tech Talent community to sponsor the next generation of
            innovators.
          </p>
        </section>

        <section className="flex justify-center items-center py-4 xl:py-5">
        
          <div className="container py-4 xl:py-5">
            <div className="flex flex-row mb-5 ">
              <div className="md:col-span-8 xl:col-span-6 text-center mx-auto">
                <h2 className="mb-1 text-3xl">Talent Testimonies</h2>
                <p className="w-50">
                "I woke up lucky and I am thankful for the chances I got. I understand that not many people are. - Abel"
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div className="grid grid-cols">
                <div className="flex flex-cols lg:flex-row">
                  <div className="w-96">
                    <img
                      className="rounded object-contain w-full h-52"
                      src={talent}
                      alt ="talent"
                    />
                  </div>
                  <div className="py-4 px-4">
                    <h4>Lorem libero donec</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-cols">
                <div className="flex flex-cols lg:flex-row">
                  <div className="w-96">
                    <img
                      className="rounded object-contain w-full h-52"
                      src={talent}
                      alt ="talent"
                    />
                  </div>
                  <div className="py-4 px-4">
                    <h4>Lorem libero donec</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-cols">
                <div className="flex flex-cols lg:flex-row">
                  <div className="w-96">
                    <img
                      className="rounded object-contain w-full h-52"
                      src={talent}
                      alt ="talent"
                    />
                  </div>
                  <div className="py-4 px-4">
                    <h4>Lorem libero donec</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-cols">
                <div className="flex flex-cols lg:flex-row">
                  <div className="w-96">
                    <img
                      className="rounded object-contain w-full h-52"
                      src={talent}
                      alt ="talent"
                    />
                  </div>
                  <div className="py-4 px-4">
                    <h4>Lorem libero donec</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default Homepage;
