
import Heading from "@/components/Heading";

import MainNavBar from "@/components/MainNavBar";
import {CarouselHome} from "@/components/Carousel";
import AddressNote from "@/components/addressNote";
import NewsPage from "@/components/newsPage";
import EventsAnnounce from "@/components/eventsAnnounce";

export default function Home() {
  return (
      <main>
        <Heading />
          <MainNavBar/>
          <CarouselHome/>
          <AddressNote/>
          <NewsPage/>
          <EventsAnnounce/>
      </main>
  );
}
