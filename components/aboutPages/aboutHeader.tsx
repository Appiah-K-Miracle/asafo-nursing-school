import React from "react";
import Image from "next/image";
import { pic5 } from "@/public/images";

const AboutHeader = () => {
  return (
    <section>
      <div className=" bg-primaryColor">
        <Image
          src={pic5}
          alt="header image"
          className="w-full opacity-0 md:opacity-40 md:h-[400px]"
        />
      </div>
      <h2 className="absolute top-1/4 text-center md:top-1/3 text-white text-5xl md:text-6xl font-extrabold uppercase">
        About COHSA
      </h2>
      <div className="mx-4 md:mx-32 bg-white relative -top-20">
        <div className="px-4 md:px-32 md:py-16 text-left tracking-wide font-medium text-xl text-TeiColor py-4 pb-3">
          <p className="pb-4">
            Sefwi Asafo Nursing Training College was established on 24th October
            2014 by the Asafo community through the initiative of a five member
            committee namely,{" "}
            <span className="font-bold">Mr. Simon Asante,</span>{" "}
            <span className="font-bold">Mr. Alex Agyapong,</span>{" "}
            <span className="font-bold">Mr. Thomas Adjei (Deceased),</span>{" "}
            <span className="font-bold">Mr. Emmanuel Oppong,</span>{" "}
            <span className="font-bold">Mr. Peter Ntori</span>
          </p>
          <p className="pb-4">
            The registered general nursing (Diploma) Curriculum is based on
            Semester and Courses Unit System. This curriculum is
            Competency-based, takes into consideration the current needs of
            society and those of the student nurse.
          </p>
          <p className="pb-4">
            In this regard, greater emphasis is being laid on the community,
            physical and social science as spiritual and ethical elements in
            nursing practice. The following courses have been modified to meet
            current trends in nursing: Communication and Study Skills, Computing
            and Perspectives of Nursing have been modified into Therapeutic
            Communication, Nursing Informatics and Professional Adjustment in
            Nursing, Supply Chain Management and Relationship Marketing Strategy
            and Entrepreneurship have been introduced. <br /> <br /> Similarly,
            introductory French and Sign Language have also been added as
            non-scoring courses.
          </p>

          <p className="pb-4">
            Evaluation of students includes the Continuous assessment of theory
            and practice throughout the training period.
          </p>

          <p className="pb-4">
            Sefwi Asafo Nursing Training College ( NTC) is affiliated to
            University of Cape Coast. This affiliate body Supervise, Monitors
            and Evaluates all academic activities including, the pre-moderation
            and moderation of all examination questions to ensure accuracy,
            consistency and efficiency to ensure standard examinations are
            conducted and students are given deserving marks to facilitate the
            award of academic diplomas to graduates from this institution.
          </p>

          <p>
            Currently the school offers only Registered General Program
            (Diploma) but hopefully other programs will be added when
            accreditation is given for those programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
