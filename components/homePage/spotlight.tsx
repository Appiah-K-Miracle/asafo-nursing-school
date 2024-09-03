import React from 'react';
import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BriefcaseBusiness, Library, Navigation, Users} from "lucide-react";
import Image from "next/image";
import {pic2, pic4} from "@/public/images";

const SpotLight = () => {
    return (
        <section className=" px-4 py-7 md:px-32">
            <div className="">
                <div className=" pt-5">
                    <h2 className="text-4xl font-extrabold uppercase text-TeiColor">SpotLight</h2>
                    <Separator className="w-[70px] border-2 mb-5 border-secondaryColor"/>
                </div>
                <div className="md:flex gap-2"> {/*responsiveness*/}
                    <div className="flex-1">
                        <div className="flex w-[100px] items-center justify-between py-4">
                            <Separator orientation={"vertical"} className=" border border-secondaryColor h-6"/>
                            <div className="flex items-center">

                            <BriefcaseBusiness className="mr-2  text-secondaryColor" />
                            <p className="uppercase font-extrabold text-TeiColor text-sm">Staff</p>
                            </div>
                        </div>
                        <Card className="">
                            <CardHeader className="p-0 ">
                                <CardTitle>
                                    <div className=" ">
                                       <Image src={pic2} alt="staff"/>
                                    </div>
                                </CardTitle>
                            </CardHeader >
                            <CardContent className="p-0" >
                                <p className="text-lg  text-white bg-primaryColor font-medium text-justify p-4">
                                    The COHSA Library offers an extensive collection of resources, including textbooks, reference materials, journals, and digital databases, all carefully curated to enhance learning in the fields of nursing.

                                </p>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="flex-1">
                        <div className="flex w-[120px] items-center justify-between py-4">
                            <Separator orientation={"vertical"} className="  border border-secondaryColor h-6"/>
                            <div className="flex items-center">
                                <Users className="mr-2 text-secondaryColor "/>

                                <p className="uppercase font-extrabold text-TeiColors text-sm">Students</p>
                            </div>
                        </div>
                        <Card className="">
                            <CardHeader className="p-0 ">
                                <CardTitle>
                                    <div className=" ">
                                        <Image src={pic4} alt="staff"/>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-lg  text-white bg-primaryColor font-medium text-justify p-4">
                                    The COHSA Library offers an extensive collection of resources, including textbooks,
                                    reference materials, journals, and digital databases, all carefully curated to
                                    enhance learning in the fields of nursing.

                                </p>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="flex-1">
                        <div className="flex w-[190px] items-center justify-between py-4">
                            <Separator orientation={"vertical"} className="border border-secondaryColor h-6"/>
                            <div className="flex items-center">
                                <Navigation className="mr-2 text-secondaryColor" />

                                <p className="uppercase font-extrabold text-TeiColor text-sm">College Location</p>
                            </div>
                        </div>
                        <Card>
                            <CardHeader className="p-0 ">
                                <CardTitle>
                                    <div  >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126877.42316700633!2d-2.8079509735107306!3d6.404375633724914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc4a77c27ac3389%3A0x82ab7ac63a6eae91!2sCOLLEGE%20OF%20HEALTH%2CSEFWI%20ASAFO!5e0!3m2!1sen!2sgh!4v1724862206004!5m2!1sen!2sgh"  allowFullScreen loading="lazy" className="w-full md:h-[350px]"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-lg  text-white bg-primaryColor font-medium text-justify p-4 capitalize">
                                    This nobel college of health is locate at Western North Region of Ghana.

                                </p>
                            </CardContent>

                        </Card>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default SpotLight;