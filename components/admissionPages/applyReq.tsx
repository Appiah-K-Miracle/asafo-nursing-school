'use client'
import React from 'react';
import Image from "next/image";
import {apply} from "@/public/images";

const ApplyReq = () => {
    return (
        <section>
            <div className="bg-primaryColor">
                <Image src={apply} alt="Apply Req" className="opacity-50 h-[150px]"/>
            </div>
            <div className="px-4">
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
                            <li className="pb-2">An aggregate score of twenty-four (24) or better in six subject, comprising
                                3 core and 3 elective.
                            </li>
                            <li className="pb-2">Credits (A - D) in three core subject i.e.., English, Mathematics and
                                Integrated Science.
                            </li>
                            <li className="pb-2">Credits (A - D) in three elective subject.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ApplyReq;