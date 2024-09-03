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
             <div className="py-6">
                 <h1 className="text-2xl uppercase font-extrabold text-TeiColor pb-4">
                     Requirements for Admission Process
                 </h1>
                 <p className="text-left text-sm font-bold text-gray-800">Before moving to the online application platform, applicants must have the following</p>
             </div>
             <Accordion type="single" collapsible>
                 <AccordionItem value="item-1">
                     <AccordionTrigger className="text-TeiColor font-bold capitalize text-lg">Requirement to fill out the form</AccordionTrigger>
                     <AccordionContent>
                         <ul className="list-disc px-8 text-TeiColor font-medium text-xl text-left">
                             <li className="pb-2"> Serial Number
                             </li>
                             <li className="pb-2">Pin
                             </li>
                             <li className="pb-2">WASSCE Certificate/Nov-Dec</li>
                             <li className="pb-2">Active Phone Number</li>
                             <li className="pb-2">Passport Sized Photo
                             <div className="bg-gray-200 text-TeiColor py-4 my-4 font-bold text-sm px-5 rounded-sm border-l-primaryColor border-l-8">
                                 <p>Picture Dimension must be 450x450 pixels</p>
                             </div>
                             </li>
                         </ul>
                     </AccordionContent>
                 </AccordionItem>
             </Accordion>

         </section>
    );
};

export default RequirementProcess;