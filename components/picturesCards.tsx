import React from 'react';
import {FocusCards} from "@/components/ui/focus-cads";
import {pic5} from "@/public/images";

const GraduationPicturesCards = () => {
    const cards = [
        {
            title: 'The graduation group picture with the principal. ',
            src: '/images/graduation2.jpg',
        },
        {
            title: 'Pics',
            src: '/images/graduation1.jpg',
        },
        {
            title: 'Pictures',
            src: '/images/graduation3.jpg',
        },

    ]
    return (
        <FocusCards cards={cards} />
    );  
};

export default GraduationPicturesCards;