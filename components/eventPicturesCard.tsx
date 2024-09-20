import React from "react";
import { FocusCards } from "@/components/ui/focus-cads";

const EventsPicturesCards = () => {
  const cards = [
    {
      title: "The graduation group picture with the principal. ",
      src: "/images/show1.jpg",
    },
    {
      title: "Pics",
      src: "/images/show2.jpg",
    },
    {
      title: "Pictures",
      src: "/images/show3.jpg",
    },
    {
      title: "The graduation group picture with the principal. ",
      src: "/images/show4.jpg",
    },
    {
      title: "Pics",
      src: "/images/show5.jpg",
    },
    {
      title: "Pictures",
      src: "/images/show6.jpg",
    },
  ];
  return <FocusCards cards={cards} />;
};

export default EventsPicturesCards;
