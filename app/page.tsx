
import Heading from "@/components/Heading";


import {CarouselHome} from "@/components/Carousel";
import AddressNote from "@/components/addressNote";
import NewsPage from "@/components/NewsPage";
import EventsAnnounce from "@/components/eventsAnnounce";
import Media from "@/components/media";
import Spotlight from "@/components/spotlight";

import QuickNote from "@/components/quickNote";

export default function Home() {
  return (
      <main className="bg-white">

          <CarouselHome/>
          <AddressNote/>
          <NewsPage/>
          <EventsAnnounce/>
          <Media/>
          <QuickNote/>
          <Spotlight/>


      </main>
  );
}
