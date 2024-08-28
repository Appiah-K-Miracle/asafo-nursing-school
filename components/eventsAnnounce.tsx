import React from 'react';
import {Announcements, Events, News} from "@/constants";
import {Separator} from "@/components/ui/separator";
import {CalendarCheck2, Megaphone} from "lucide-react";

function EventsAnnounce() {
    return (
        <section>
            <div className="w-full bg-secondaryColor container ">
                <h2 className="uppercase text-3xl py-5 font-bold text-white text-center">Events & Announcements</h2>
            </div>
            <div>
                <div className=" py-7">
                    <div>
                        <Megaphone/>
                        <h2>Announcements</h2>
                    </div>
                    {Announcements.map((announce) => (
                        <div key={announce.id} className="items-start py-5 flex flex-col">
                            <h2 className="font-bold text-lg text-justify pb-2">{announce.description}</h2>
                            <p className="pb-3 text-gray-900">{announce.date}</p>

                            <Separator/>
                        </div>
                    ))}
                </div>
                {/*Begin*/}
                <div className=" py-7">
                    <div>
                        <CalendarCheck2/>
                    </div>
                    {Events.map((event) => (
                        <div key={event.id} className="items-start py-5 flex flex-col">
                            <h2 className="font-bold text-lg text-justify pb-2">{event.description}</h2>
                            <p className="pb-3 text-gray-900">{event.date}</p>

                            <Separator/>
                        </div>
                    ))}
                </div>
                {/*    end*/}
            </div>
        </section>
    );
}

export default EventsAnnounce;