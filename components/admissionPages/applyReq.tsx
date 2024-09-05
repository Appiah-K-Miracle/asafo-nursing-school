'use client'
import React from 'react';
import Image from "next/image";
import {apply} from "@/public/images";
import RequirementProcess from "@/components/requirementProcess";

const ApplyReq = () => {
    return (
        <section>
            <div className="bg-primaryColor">
                <Image src={apply} alt="Apply Req" className="opacity-50 h-[150px] md:w-full md:h-[400px]"/>
            </div>
            <div className="px-0 pb-7 md:px-32">
                <div className="bg-gray-100 px-5 py-5">
                    <h1 className="text-TeiColor font-extrabold text-2xl">General Requirement</h1>
                    <div className="py-5">
                        <p className="font-bold text-TeiColor text-xl">WASSCE</p>
                        <ul className="list-disc px-8 text-TeiColor font-medium text-xl text-left">
                            <li className="pb-2">Applicants must be between 18 - 35 years by the time of applying.</li>
                            <li className="pb-2">An aggregate score of thirty (30) or better in six subject, comprising
                                3 core and 3 elective.
                            </li>
                            <li className="pb-2">Credits (A1 - C6) in three core subject i.e.., English, Mathematics and
                                Integrated Science.
                            </li>
                            <li className="pb-2">Credits (A1 - C6) in three elective subject.</li>
                        </ul>
                    </div>
                    <div className="py-5">
                        <p className="font-bold text-TeiColor text-xl">SSCE</p>
                        <ul className="list-disc px-8 text-TeiColor font-medium text-xl text-left">
                            <li className="pb-2">An aggregate score of twenty-four (24) or better in six subject,
                                comprising
                                3 core and 3 elective.
                            </li>
                            <li className="pb-2">Credits (A - D) in three core subject i.e.., English, Mathematics and
                                Integrated Science.
                            </li>
                            <li className="pb-2">Credits (A - D) in three elective subject.</li>
                        </ul>
                    </div>

                </div>
                <RequirementProcess/>
            </div>
            <div className="bg-TeiColor my-4">
                <h1 className="text-white px-6 text-4xl py-10 font-bold md:text-5xl md:mx-32">Basic Questions</h1>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:mx-32 md:my-10">

                <div className="bg-gray-100 p-4 ">
                    <h1 className="uppercase font-extrabold pb-2 text-TeiColor">Where can I buy the Nursing Training
                        Form</h1>
                    <p className="text-TeiColor text-lg font-medium">The forms are available for purchase at any bank or
                        online through the Ghana Post app. </p>
                </div>
                <div className="bg-gray-100 p-4">
                    <h1 className="uppercase font-extrabold pb-2 text-TeiColor">How Much are the Nursing training
                        Form?</h1>
                    <p className="text-TeiColor text-lg font-medium">The nurse's training forms cost GHC 200 but it will
                        change in the future.</p>
                </div>
                <div className="bg-gray-100 p-4">
                    <h1 className="uppercase font-extrabold pb-2 text-TeiColor">What Next After Filling out the
                        form?</h1>
                    <p className="text-TeiColor text-lg font-medium pb-2">A successful application will be indicated bt
                        a message on your mobile device(SMS). You will be contacted and given a time for an interview
                        along the road.</p>
                    <p className="text-TeiColor text-lg font-medium">You wait for the admission offer letter and report
                        to the school after a successful interview.</p>
                </div>
            </div>
        </section>
    );
};

export default ApplyReq;