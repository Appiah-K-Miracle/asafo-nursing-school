import React from "react";
import { FocusCards } from "@/components/ui/focus-cads";

const StudentPicturesCards = () => {
  const cards = [
    {
      title: "The graduation group picture with the principal. ",
      src: "/images/Student1.jpg",
    },
    {
      title: "Pics",
      src: "/images/student2.jpeg",
    },
    {
      title: "Pictures",
      src: "/images/student3.jpeg",
    },
    {
      title: "The graduation group picture with the principal. ",
      src: "/images/student4.jpg",
    },
    {
      title: "Pics",
      src: "/images/student5.jpg",
    },
    {
      title: "Pictures",
      src: "/images/student6.jpg",
    },
  ];
  return <FocusCards cards={cards} />;
};

export default StudentPicturesCards;
