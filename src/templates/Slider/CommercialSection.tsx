import commercial from "../../assets/Videos/commercial.mp4";


interface CommercialSectionProps {
    isActive: boolean;
  }
  
  const CommercialSection: React.FC<CommercialSectionProps> = ({ isActive }) => {
    return (
      <div
        className={`h-full flex items-center justify-end  text-white transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-50"
        }`}
      >
        <video
          src={commercial}
          autoPlay
          playsInline
          muted
          loop
          className="w-auto h-[540px] "
        />
      </div>
    );
  };
  
  export default CommercialSection;
  
 
  



  