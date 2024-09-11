import React from 'react';
import Image from "next/image";
import {CarouseImg1, pic1} from "@/public/images";
import {News} from "@/constants";
import {Separator} from "@/components/ui/separator";

function NewsPage() {
    return (
       <section className="w-full py-4 md:px-16 ">
           <div className="container py-5 md:px-20 justify-between  md:flex md:gap-32">
               <div className="flex-1">
                   <h2 className="text-2xl md:text-3xl uppercase font-extrabold text-primaryColor py-4 ">News from COHSA</h2>
                   <div className="py-7">
                       <Image src={CarouseImg1} alt="News1"  className=" md:h-[350px]" />
                   </div>
                   <div>
                       <p className="text-TextColor font-bold py-2">September 10, 2024</p>
                       <h1 className="capitalize text-justify text-xl font-extrabold text-TeiColor md:text-3xl">Citation of Honour given to a Tutor in COHSA. </h1>
                   </div>
               </div>

               <div className="py-5 flex-1">
                   <div className="flex flex-wrap items-center justify-between">
                       <h2 className="text-xl md:text-[25px] capitalize font-extrabold text-TeiColor">Explore more news</h2>
                       <div className="border border-secondaryColor p-1 bg-secondaryColor">
                           <h2 className="text-white capitalize px-1.5">Read more {'>>'} </h2>
                       </div>
                   </div>
                   <div className=" pt-7">
                       {News.map((news) => (
                           <div key={news.name} className="items-start py-5 flex flex-col">
                               <h2 className="font-bold text-lg text-justify pb-2">{news.description}</h2>
                               <p className="pb-3 text-gray-900">{news.date}</p>
                               <p className="pb-2 text-TextColor">{news.mainDAte}</p>
                               <Separator />
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       </section>
    );
}

export default NewsPage;