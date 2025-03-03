import { useEffect, useRef, useState } from "react";
import cabin1 from "../../assets/Images/cabin1.svg";
import cabin2 from "../../assets/Images/cabin2.svg";
import cabin3 from "../../assets/Images/cabin3.png";
import cabin4 from "../../assets/Images/cabin4.svg";
import cabin5 from "../../assets/Images/cabin5.svg";
import passengerBody1 from "../../assets/Videos/passengerBody.mp4";
import passengerBody2 from "../../assets/Videos/front.mp4";
import passengerBody3 from "../../assets/Videos/cabin.mp4";
import passengerBody4 from "../../assets/Videos/trunk.mp4";
import passengerBody5 from "../../assets/Videos/exterior.mp4";

interface PassengerSectionProps {
  isActive: boolean;
}

const PassengerSection: React.FC<PassengerSectionProps> = ({ isActive }) => {
  const [activeCabin, setActiveCabin] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dashOffset, setDashOffset] = useState(144.51); // Initial value of stroke-dashoffset

  const videoMapping: Record<number, string> = {
    1: passengerBody1,
    2: passengerBody2,
    3: passengerBody3,
    4: passengerBody4,
    5: passengerBody5,
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoMapping[activeCabin];
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeCabin]);

  // Update stroke-dashoffset as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress =
        video.duration > 0 ? (video.currentTime / video.duration) * 144.51 : 0;
      setDashOffset(144.51 - progress); // Reducing offset as progress increases
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [activeCabin]);

  return (
    <div
      className={`h-full flex items-center p-16 justify-center ml-40 w-full text-white transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex justify-between flex-col w-full">
        {/* Video Section */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          className="w-auto h-[540px] pl-40"
        />

        {/* Cabin Buttons */}
        <div className="flex items-center justify-between mt-4  w-5/12 ml-[450px]">
          {[cabin1, cabin2, cabin3, cabin4, cabin5].map((cabin, index) => (
            <div
              key={index}
              onClick={() => setActiveCabin(index + 1)}
              className="cursor-pointer"
            >
              <img
                src={cabin}
                className={`h-18 ${
                  activeCabin === index + 1 ? "border-2 border-white" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* Video Progress Circle */}
        <div className="video-control-1 absolute right-20 bottom-28 my-auto z-50 flex items-center video-1">
          <div className="relative inline-block z-50">
            <button
              type="button"
              className="p-3 2xl:p-4 rounded-full z-10 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
                ></path>
              </svg>
            </button>
            <svg
              className="absolute top-0 left-0 z-0 video-rotate"
              width="100%"
              height="100%"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="23"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2.5"
              ></circle>
              <circle
                cx="24"
                cy="24"
                r="23"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeDasharray="144.51"
                strokeDashoffset={dashOffset}
              ></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerSection;
