import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const RequirementProcess = () => {
    return (
        <section>
            <div className="py-6 px-6">
                <h1 className="text-2xl uppercase font-extrabold text-TeiColor pb-4">
                    Requirements for Admission Process
                </h1>
                <p className="text-left text-sm font-bold text-gray-800">Before moving to the online application
                    platform, applicants must have the following</p>
            </div>
            <div className="px-6">
                <Accordion type="single" collapsible className="">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-TeiColor font-bold capitalize text-lg">Requirement to fill out
                            the form</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc px-8 text-TeiColor font-medium text-xl text-left">
                                <li className="pb-2"> Serial Number
                                </li>
                                <li className="pb-2">Pin
                                </li>
                                <li className="pb-2">WASSCE Certificate/Nov-Dec</li>
                                <li className="pb-2">Active Phone Number</li>
                                <li className="pb-2">Passport Sized Photo
                                    <div
                                        className="bg-gray-200 text-TeiColor py-4 my-4 font-bold text-sm px-5 rounded-sm border-l-primaryColor border-l-8">
                                        <p>Picture Dimension must be 450x450 pixels</p>
                                    </div>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-TeiColor font-bold capitalize text-lg">Information Required to
                            fill out the form</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc px-8 text-TeiColor font-medium text-xl text-left">
                                <li className="pb-2"> First Name</li>
                                <li className="pb-2">Last Name</li>
                                <li className="pb-2">Other Name</li>
                                <li className="pb-2">Date of Birth</li>
                                <li className="pb-2">Passport Photo</li>
                                <li className="pb-2">WASSCE/NOV-DEC</li>
                                <li className="pb-2">Certificate</li>
                                <li className="pb-2">Result Slip</li>
                                <li className="pb-2">Birth Certificate</li>
                                <li className="pb-2">Place of Birth</li>
                                <li className="pb-2">District of the place of Birth</li>
                                <li className="pb-2">Region</li>
                                <li className="pb-2">Address</li>
                                <li className="pb-2">Digital Address</li>
                                <li className="pb-2">Program Type(Diploma, Certificate...etc)</li>
                                <li className="pb-2">Name of Parent/Guardian/Next of Kin</li>
                                <li className="pb-2">Contact of Parent</li>

                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </section>
    );
};

export default RequirementProcess;