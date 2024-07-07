'use client'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react'
import { projects } from '@/app/projects'
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-stone-800 h-screen">
        <h3 className="mb-5 text-white text-xl">Custom Shadcn-ui Carousel</h3>
      <div className="flex gap-10 flex-col justify-center items-center">
        <Carousel setApi={setApi} opts={{ loop: true }} >
          <CarouselContent >
            {projects.map(project => (
              <CarouselItem key={project} className="flex w-full justify-center items-center">
                <Image src={`/images/${project}.png`} alt="images" width={500} height={500} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex gap-3">
          <Button className='rounded-full' variant='outline' onClick={() => api?.scrollTo(current - 1)}><ArrowLeftIcon className="size-7" /></Button>
          <Button className='rounded-full' variant='outline' onClick={() => api?.scrollTo(current + 1)}><ArrowRightIcon className="size-7" /></Button>
        </div>
      </div>
    </main>
  );
}
