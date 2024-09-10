import React from 'react';
import Heading from "@/components/Heading";
import {Navbar} from "@/components/Navbar";
import Image from "next/image";
import {logo} from "@/public/images";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

function MainNavBar() {
    return (
         <section className="flex container justify-between items-center p-2 ">
             <Link href="/">
                 <div className="flex justify-start">
                     <div className=" items-center w-20  md:w-30  h-1/12">
                         <Image
                             src={logo}
                             alt="Logo"

                         />
                     </div>

                     <div className="flex flex-col justify-center md:mt-0">
                         <h3 className=" text-xl md:text-3xl font-extrabold text-secondaryColor">COLLEGE OF HEALTH</h3>
                         <h3 className="text-primaryColor font-bold text-lg">SEFWI-ASAFO (COHSA)</h3>
                     </div>

                 </div>
             </Link>
             <Navbar/>
         </section>
    );
}

export default MainNavBar;