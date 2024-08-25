
import Heading from "@/components/Heading";

import MainNavBar from "@/components/MainNavBar";
import {CarouselHome} from "@/components/Carousel";

export default function Home() {
  return (
      <main>
        <Heading />
          <MainNavBar/>
          <CarouselHome/>
      </main>
  );
}
