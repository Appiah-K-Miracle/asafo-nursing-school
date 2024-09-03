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
            <div></div>
        </section>
    );
};

export default ApplyReq;