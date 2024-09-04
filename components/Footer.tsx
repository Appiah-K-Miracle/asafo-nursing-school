import React from 'react';
import {Separator} from "@/components/ui/separator";
import {AboutCollege, Courses, Events, Location} from "@/constants";

const Footer = () => {
    return (
        <section className="bg-primaryColor pt-10 pb-5 mt-2">
            <div className="md:flex justify-between container ">
                <div className="flex-1 md:pt-5">
                    <div className=" ">
                        <h2 className=" text-white text-3xl font-extrabold">The College</h2>
                        <Separator className="w-[70px] border-2 mb-5 border-white"/>
                    </div>
                    {AboutCollege.map((college) => (
                        <div key={college.title} className="py-1">
                            <p className=" text-white text-[1rem]">{college.title}</p>
                        </div>
                    ))}
                </div>
                <div className="border border-white border-dotted my-5"></div>
                <div className="flex-1 md:pt-5 md:pl-10">
                    <div className=" ">
                        <h2 className=" text-white text-3xl font-extrabold">Our Courses</h2>
                        <Separator className="w-[70px] border-2 mb-5 border-white"/>
                    </div>
                    {Courses.map((course) => (
                        <div key={course.title} className="py-1">
                            <p className=" text-white text-[1rem]">{course.title}</p>
                        </div>
                    ))}
                </div>
                <div className="border border-white border-dotted my-5"></div>
                <div className="flex-1 md:pt-5 md:pl-10">
                    <div className=" ">
                        <h2 className=" text-white text-3xl font-extrabold">Contact Us</h2>
                        <Separator className="w-[70px] border-2 mb-5 border-white"/>
                    </div>
                    {Location.map((college) => (
                        <div key={college.title} className="py-1">
                            <p className=" text-white text-[1rem]">{college.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        <div className=" text-center mt-10 py-5">
            <p className="text-sm text-white">&copy; 2024 College Of Health, Sefwi-Asafo, Ghana | Ghana Post GPS Address: WN-394-393  </p>
        </div>

        </section>
    );
};

export default Footer;