import ServicePage from "../components/servicepage";
import Image from "next/image";

export default function ServicePageComponent() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-screen mt-52">
        <Image 
          src="/images/Group.svg" 
          alt="group" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 z-10 -mt-48">
          <ServicePage />
        </div>
      </div>
    </div>
  );
}