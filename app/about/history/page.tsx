import React from 'react';
import Image from "next/image";
import {animateSVG} from "@/public/svgFile";

function HistoryPage() {
    return (
        <section className=" py-16">
            <div className="flex text-center justify-center ">
                <Image src={animateSVG} alt="animate" className="h-80 md:h-96 relative -top-20"/>
            </div>
            <div>
                <h1 className="uppercase text-3xl md:text-5xl text-TeiColor -top-20 text-center font-extrabold relative">coming
                    Soon.</h1>
            </div>

        </section>
    );
}

export default HistoryPage;