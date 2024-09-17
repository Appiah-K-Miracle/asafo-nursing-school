import React from "react";
import { Announcements, Events } from "@/constants";
import { Separator } from "@/components/ui/separator";
import { CalendarCheck2, Megaphone } from "lucide-react";

function EventsAnnounce() {
  return (
    <section>
      <div className="w-full bg-primaryColor">
        <h2 className="uppercase text-lg md:text-3xl py-10 font-extrabold text-white  md:text-justify px-16 md:px-32">
          Events & Announcements
        </h2>
      </div>
      <div className="md:flex md:mx-16">
        <div className=" py-7 px-16 flex-1">
          <div className="flex border w-[180px] p-2 justify-between items-center border-primaryColor">
            <Megaphone className="h-5 text-secondaryColor" />
            <h2 className="text-lg font-bold text-primaryColor">
              Announcements
            </h2>
          </div>
          {Announcements.map((announce) => (
            <div key={announce.id} className="items-start py-5 flex flex-col">
              <h2 className="font-bold text-lg text-justify pb-2">
                {announce.description}
              </h2>
              <p className="pb-3 text-gray-900">{announce.date}</p>

              <Separator />
            </div>
          ))}
        </div>
        {/*Begin*/}
        <div className=" py-7 px-16 flex-1">
          <div className="flex border w-[100px] p-2 justify-between items-center border-primaryColor">
            <CalendarCheck2 className="h-5 text-secondaryColor" />
            <h2 className="text-lg font-bold text-primaryColor">Events</h2>
          </div>
          {Events.map((event) => (
            <div key={event.id} className="items-start py-5 flex flex-col">
              <h2 className="font-bold text-lg text-justify pb-2">
                {event.description}
              </h2>
              <p className="pb-3 text-gray-900">{event.date}</p>

              <Separator />
            </div>
          ))}
        </div>
        {/*    end*/}
      </div>
    </section>
  );
}

export default EventsAnnounce;
