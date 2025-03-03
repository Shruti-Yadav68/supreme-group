import { useState } from "react";
import CommercialSection from "../Slider/CommercialSection";
import PassengerSection from "../Slider/PassengerSection";
import { useInView } from "react-intersection-observer";

function ContentSection() {
  const [activeSlide, setActiveSlide] = useState(1);

  const { ref: firstSlideRef, inView: firstSlideInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: secondSlideRef, inView: secondSlideInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  // Update active slide when inView changes
  if (firstSlideInView && activeSlide !== 1) setActiveSlide(1);
  if (secondSlideInView && activeSlide !== 2) setActiveSlide(2);

  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen">
      {/* Static Text */}
      <div className="absolute top-10 w-full text-center">
        <span className="sg-translate text-5xl text-white font-light">
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span>{" "}
          <br className="hidden md:block" /> comprehensive solutions
        </span>
      </div>

      {/* Left Sidebar with Line and Section Titles */}
      <div className="absolute left-10 top-1/3 flex items-start">
        {/* Vertical Line */}
        <div className="w-[2px] h-[340px] bg-gray-500 relative">
          {/* Active Indicator */}
          <div
            className={`w-[2px] h-1/2 bg-white absolute transition-all duration-500 ${
              activeSlide === 1 ? "top-0" : "top-1/2"
            }`}
          ></div>
        </div>

        {/* Section Titles */}
        <div className="mt-4 flex flex-col space-y-4 text-left h-[340px] pl-20">
          <div
            className={`h-1/2 transition-all duration-500  ${
              activeSlide === 1 ? "text-white" : "text-gray-500"
            }`}
          >
             <div className="text-[28px] font-bold mt-4">Passenger vehicles</div>
             <p className="text-lg font-normal">Revving up Nonwoven innovation from<br/> interior to exterior.</p>
          </div>
          <div
            className={` h-1/2 transition-all duration-500 ${
              activeSlide === 2 ? "text-white" : "text-gray-500"
            }`}
          >
            <div className="text-[28px] font-bold mt-4">Commercial vehicles</div>
            <p className="text-lg font-normal">Advancing Nonwoven engineering for<br/> heavy-duty vehicles.</p>
          </div>
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
        <section ref={firstSlideRef} className="h-screen snap-start">
          <PassengerSection isActive={activeSlide === 1} />
        </section>

        <section ref={secondSlideRef} className="h-screen snap-start">
          <CommercialSection isActive={activeSlide === 2} />
        </section>
      </div>
    </div>
  );
}

export default ContentSection;
