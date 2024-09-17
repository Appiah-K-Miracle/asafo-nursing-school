import React from "react";
import { Button } from "@/components/ui/button";

const QuickNote = () => {
  return (
    <section className="w-full bg-primaryColor mt-7 bg-opacity-90">
      <div className="text-white p-10 md:p-20 text-center capitalize">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase">
          How to Apply
        </h2>
        <p className="text-xl md:uppercase font-bold text-center pb-4">
          Information on how to purchase and fill the forms.{" "}
        </p>
        <div className="flex gap-2 justify-center">
          <Button className="text-white border border-secondaryColor bg-secondaryColor">
            Read More
          </Button>
          <Button className="text-white border border-secondaryColor bg-secondaryColor">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickNote;
