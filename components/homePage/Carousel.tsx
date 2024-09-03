"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {useRef} from "react";
import {CarouseImages} from "@/constants";
import Image from "next/image";

export function CarouselHome() {
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}

            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {CarouseImages.map((index) => (
                    <CarouselItem key={index.id}>
                        <div>
                            <Image
                                alt="Carousel Images"
                                src={index.images}
                                sizes="cover"
                                className="h-48 md:h-[500px] w-full"

                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
