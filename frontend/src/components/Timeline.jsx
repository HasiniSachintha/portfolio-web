import React from "react";

const Timeline = () => {
  return (
    <section>
      <div className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24 justify-center	">
          <div>
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="absolute h-full border-2"
                  style={{ right: "50%", borderRadius: "1%",borderColor: "#DCFF5B" }}
                ></div>
                <div
                  className="absolute h-full border-2"
                  style={{ left: "50%", borderRadius: "1%",borderColor: "#DCFF5B" }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300" style={{ color: "#DCFF5B"}}>
                      1-6 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. It's that
                      easy :)
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300" style={{ color: "#DCFF5B"}}>
                      6-9 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events
                      will be sent to you via email and WhatsApp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300" style={{ color: "#DCFF5B"}}>10 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021, and the results will be announced on the
                      WhatsApp groups and will be mailed to you.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300" style={{ color: "#DCFF5B"}}>12 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Prize Distribution
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their
                      addresses, and the winning goodies will be sent to their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Timeline illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
