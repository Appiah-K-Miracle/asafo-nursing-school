import React from 'react';
import Heading from "@/components/Heading";
import {Navbar} from "@/components/Navbar";
import Image from "next/image";
import {logo} from "@/public/images";
import {Separator} from "@/components/ui/separator";

function MainNavBar() {
    return (
         <section className="flex  border border-red-600 items-center  container justify-between p-2 md:container ">
                <div className="flex">
                    <div className="w-10 h-10">
                    <Image
                        src={logo}
                        alt="Logo"
                    />
                    </div>
                    <Separator  orientation="vertical" className=" mr-3 border border-TextColor m-1 h-11" />

                    <div className="flex flex-col justify-around">
                        <h3 className="text-lg font-bold text-otherColor">COLLEGE OF HEALTH</h3>
                        <h3 className="text-TextColor font-bold text-xs">SEFWI-ASAFO (COHSA)</h3>
                    </div>

                </div>
             <Navbar/>
         </section>
    );
}

export default MainNavBar;