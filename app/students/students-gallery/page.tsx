import React from "react";
import Image from "next/image";
import { pic5 } from "@/public/images";

import GraduationPicturesCards from "@/components/picturesCards";
import StudentPicturesCards from "@/components/studentPicturesCards";
import EventsPicturesCards from "@/components/eventPicturesCard";

const StudentGalleryPage = () => {
  return (
    <section>
      <div className=" bg-TeiColor text-center w-full h-[300px] py-16 opacity-90">
        <h2 className=" text-white text-4xl md:text-6xl font-extrabold uppercase">
          COHSA Gallery
        </h2>
        <p className="text-white font-bold px-16 mt-2">
          Pictures of Events,students,staffs and graduations
        </p>
      </div>

      <div className="mx-4 md:mx-32 bg-white relative -top-20">
        <div className="px-4 md:px-32 md:py-16 text-left tracking-wide font-medium text-xl text-TeiColor py-4 pb-3">
          <div>
            <h2 className="text-3xl font-extrabold py-7">Graduations</h2>
          </div>
          <GraduationPicturesCards />
          <div>
            <h2 className="text-3xl font-extrabold py-7">Students</h2>
          </div>
          <StudentPicturesCards />
          <div>
            <h2 className="text-3xl font-extrabold py-7">Events</h2>
          </div>
          <EventsPicturesCards />
        </div>
      </div>
    </section>
  );
};

export default StudentGalleryPage;
