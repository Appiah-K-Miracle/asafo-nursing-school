import React from 'react';
import {Button} from "@/components/ui/button";

const QuickNote = () => {
    return (
        <section className="w-full bg-TeiColor">
            <div className="text-white p-20 text-center capitalize">
                <h2 className="text-4xl font-extrabold uppercase">How to Apply</h2>
                <p>INFORMATION ON HOW TO PURCHASE and FILL the FORMS </p>
                <div>
                    <Button className="text-white">Read More</Button>
                </div>
            </div>

        </section>
    );
};

export default QuickNote;