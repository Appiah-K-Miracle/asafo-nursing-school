import React from 'react';
import {FocusCards} from "@/components/ui/focus-cads";
import {pic5} from "@/public/images";

const PicturesCards = () => {
    const cards = [
        {
            title: 'Pictures',
            src: '/images/img1.jpeg',
        },
        {
            title: 'Pictures',
            src: '/images/img5.jpeg',
        },
        {
            title: 'Pictures',
            src: '/images/img7.jpeg',
        },
        {
            title: 'Pictures',
            src: '/images/img11.jpg',
        },
    ]
    return (
        <FocusCards cards={cards} />
    );  
};

export default PicturesCards;