
import Heading from "@/components/Heading";

import MainNavBar from "@/components/MainNavBar";
import {CarouselHome} from "@/components/Carousel";
import AddressNote from "@/components/addressNote";
import NewsPage from "@/components/NewsPage";
import EventsAnnounce from "@/components/eventsAnnounce";
import Media from "@/components/media";
import Spotlight from "@/components/spotlight";
import Footer from "@/components/Footer";
import QuickNote from "@/components/quickNote";

export default function Home() {
  return (
      <main>
        <Heading />
          <MainNavBar/>
          <CarouselHome/>
          <AddressNote/>
          <NewsPage/>
          <EventsAnnounce/>
          <Media/>
          <Spotlight/>
          <QuickNote/>
        <Footer/>
      </main>
  );
}
