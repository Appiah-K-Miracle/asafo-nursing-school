import React from 'react';
import {Separator} from "@/components/ui/separator";

const Media = () => {
    return (
        <section className="  py-7 md:mx-32">
            <div className="">
                <h2 className="text-4xl font-extrabold uppercase">Media</h2>
                <Separator className="w-[70px] border-2 mb-5 border-gray-200"/>
            </div>
            <div className="md:flex ">


                    <div className="flex-1">
                        <iframe className="w-full md:h-[400px]"
                                src="https://www.youtube.com/embed/U6OW0o_Z4L4?si=SWZNcc46wSusWp-R"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                aria-expanded={true} referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                    </div>

                <div className="flex-2">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fcohsaofficial&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                        className="py-4 w-full" height={400}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>

        </section>
    );
}

export default Media;