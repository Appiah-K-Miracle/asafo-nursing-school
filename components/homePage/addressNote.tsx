import React from 'react';
import {headMasterAddress} from "@/constants";
import {Card, CardContent , CardHeader, CardTitle} from "@/components/ui/card";
import {Laptop, Library} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";


function AddressNote() {
    return (
        <section className="  gap-10 md:flex md:px-32 py-4 px-4">
            <div className="md:mt-10 py-4 ">
                <h2 className="text-2xl md:text-4xl capitalize md:py-4 font-extrabold text-TeiColor pb-4">Welcome to College of Health at Sefwi-Asafo (COHSA)</h2>
                <div>
                    <p className="text-lg text-gray-900 md:mt-5 line-clamp-5 md:line-clamp-none text-justify ">{headMasterAddress}</p>
                    <span>
                    <Link href=" " className="text-secondaryColor">Read More</Link>
                </span>
                </div>
            </div>
            {/*TODO: Add card*/}
            <div className=" mt-8 md:gap-4 md:flex md:flex-col">
                <div className="md:flex md:gap-2">
                    <Card className="md:flex-1">
                        <CardHeader className="bg-TeiColor items-center">
                            <CardTitle>
                                <div className="w-16 h-16 p-4 items-center rounded-full bg-white">
                                    <Library color="#0b0a08" size={30} />
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h2 className="text-xl font-bold text-TeiColor uppercase">COHSA Library</h2>
                            <Separator className="my-2 bg-gray-300" />
                            <p className="text-lg font-medium text-justify">
                                The COHSA Library offers an extensive collection of resources, including textbooks, reference materials, journals, and digital databases, all carefully curated to enhance learning in the fields of nursing.

                            </p>
                        </CardContent>

                    </Card>

                    <Card className="md:flex-1">
                        <CardHeader className="bg-primaryColor items-center">
                            <CardTitle>
                                <div className="w-16 h-16 p-4 rounded-full bg-white">
                                    <Laptop color="#02a352" size={30} />
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h2 className="uppercase text-xl font-bold text-primaryColor">COHSA Student Portal</h2>
                            <Separator className="my-2 bg-gray-300" />
                            <p className="text-lg font-medium text-justify">
                                The COHSA Student Portal is user-friendly platform where students can access a wide range of academic and administrative services, all in one convenient location.
                            </p>
                        </CardContent>

                    </Card>

                </div>
                {/*TODO: Next Col*/}
                {/*<div className="flex-col">*/}
                {/*    <div className=" ">*/}
                {/*        <h1 className="text-2xl font-bold text-otherColor uppercase py-2"> COHSA  School Grading System </h1>*/}
                {/*        <p className="text-lg font-medium text-justify">COHSA employs a standard letter grading system to assess student performance. This system provides a clear and consistent framework for evaluating academic achievement.*/}
                {/*        </p>*/}
                {/*    </div>*/}


                {/*</div>*/}

            </div>
        </section>
    );
}

export default AddressNote;