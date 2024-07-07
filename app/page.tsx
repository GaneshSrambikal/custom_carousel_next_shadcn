'use client';
import Image from 'next/image';
import { type CarouselApi } from "@/components/ui/carousel.jsx"
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.jsx'

import { useState, useEffect } from 'react';
export default function Home() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState<CarouselApi>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
  }, [api]);
  return (
    <main className='flex gap-10 flex-col items-center justify-between p-24'>
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className='flex gap-3'>
        <Button variant='outline' onClick={() => api?.ScrollTo(current - 1)}>
          Prev
        </Button>
        <Button variant='outline' onClick={() => api?.ScrollTo(current + 1)}>
          Next
        </Button>
      </div>
    </main>
  );
}
