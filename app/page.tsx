
import Heading from "@/components/Heading";


import {CarouselHome} from "@/components/homePage/Carousel";
import AddressNote from "@/components/homePage/addressNote";
import NewsPage from "@/components/homePage/NewsPage";
import EventsAnnounce from "@/components/homePage/eventsAnnounce";
import Media from "@/components/homePage/media";
import Spotlight from "@/components/homePage/spotlight";

import QuickNote from "@/components/homePage/quickNote";

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
