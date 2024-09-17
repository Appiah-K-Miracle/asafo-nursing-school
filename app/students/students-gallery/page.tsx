import React from 'react';
import Image from "next/image";
import {pic5} from "@/public/images";
import PicturesCards from "@/components/picturesCards";
import GraduationPicturesCards from "@/components/picturesCards";
import StudentPicturesCards from "@/components/studentPicturesCards";

const StudentGalleryPage = () => {
    return (
        <section>
            <div className=" bg-TeiColor">
                <Image src={pic5} alt="header image" className="w-full opacity-0 md:opacity-5 md:h-[400px]"/>

            </div>
            <h2 className="absolute top-1/4 left-8 md:left-[35rem] md:top-1/3 text-white text-5xl md:text-6xl font-extrabold uppercase">COHSA Gallery</h2>
            <div className="mx-4 md:mx-32 bg-white relative -top-20">
                <div
                    className="px-4 md:px-32 md:py-16 text-left tracking-wide font-medium text-xl text-TeiColor py-4 pb-3">
                    <div>
                        <h2 className="text-2xl font-extrabold py-7">Graduations</h2>
                    </div>
                    <GraduationPicturesCards/>
                    <div>
                        <h2 className="text-2xl font-extrabold py-7">Students</h2>
                    </div>
                    <StudentPicturesCards/>
                </div>
            </div>

        </section>
    );
};

export default StudentGalleryPage;