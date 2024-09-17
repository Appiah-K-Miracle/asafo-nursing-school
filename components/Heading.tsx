import { SocialMedia } from "@/constants";
import Image from "next/image";

function Heading() {
  return (
    <section className="w-full bg-primaryColor">
      <div className="h-[40px] flex sm:flex-row  sm:justify-between items-center justify-center container">
        <div className="text-white hidden sm:flex font-medium text-sm">
          <h2>QUALITY HEALTHCARE IS WHAT GHANAIAN NEEDS</h2>
        </div>

        <div className="flex items-center justify-center">
          {SocialMedia.map((index) => (
            <div key={index.id} className="items-center justify-center  ">
              <Image
                src={index.SocialMediaIcons}
                alt="Social media Links"
                className=" pl-1 w-5 h-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Heading;
