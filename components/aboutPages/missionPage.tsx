import React from 'react';
import Image from "next/image";
import {pic5} from "@/public/images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const MissionPage = () => {
    return (
        <section>
            <div className=" bg-primaryColor h-[400px]">
                <Image src={pic5} alt="header image" className="w-full opacity-20 md:opacity-40 h-[400px]"/>

            </div>
            <h2 className="absolute top-72 text-center md:left-[22rem] md:top-1/3 text-white text-4xl md:text-6xl font-extrabold capitalize">mission, vision & Core Values</h2>
            <div className="mx-4 md:mx-32 bg-white relative -top-20">
                <div className="px-10 md:px-32 md:py-16 text-left tracking-wide font-medium text-xl text-TeiColor py-4 pb-3">
                    <Tabs defaultValue="mission" className="w-full md:flex md:gap-16">

                            <TabsList className="flex flex-col  w-full h-full md:w-[200px]   bg-white"  >
                                <TabsTrigger value="mission" className="text-lg w-full p-5 my-2 bg-gray-100">Mission</TabsTrigger>
                                <TabsTrigger value="vision" className="text-lg w-full p-5 my-2 bg-gray-100">Vision</TabsTrigger>
                                <TabsTrigger value="core" className="text-lg w-full p-5 my-2 bg-gray-100">Core Values</TabsTrigger>
                            </TabsList>

                        <TabsContent value="mission">We believe that, Graduates from this institution will be able to use the knowledge acquired in the principles of homeostasis to meet patients’ needs by monitoring vital signs of patient and their reaction to disease conditions, trauma, stress, anxiety, and administer prescribed medication to patients.
                        </TabsContent>
                        <TabsContent value="vision" className="md:mt-24">Our goal is to cultivate and maintain the highest possible standard in our academic activities.
                        </TabsContent>
                        <TabsContent value="core">
                            <ul className="py-3 list-disc">
                                <li className="pb-4"><span className="font-bold">Compassion</span>: Showing empathy and understanding towards patients and their families.</li>
                                <li className="pb-4"><span className="font-bold">Integrity</span>: Upholding the highest ethical standard in all professional and personal action.</li>
                                <li className="pb-4"><span className="font-bold">Respect</span>: Valuing the dignity, diversity, and rights of each individual, whether a patient, peer, or community member.</li>
                                <li className="pb-4"><span className="font-bold">Accountability</span>: Taking responsibility for one's actions and decisions in both clinical and educational settings.</li>
                                <li className="pb-4"><span className="font-bold">Collaboration</span>: Promoting teamwork and partnerships within healthcare settings to provide comprehensive care.</li>
                            </ul>
                        </TabsContent>
                    </Tabs>
                </div>

            </div>

        </section>
    );
};

export default MissionPage;