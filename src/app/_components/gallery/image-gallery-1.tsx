"use client";

import { useState } from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export const ImageGallery1 = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[1280px] h-[80vh] flex item-center justify-center gap-2">
        {images?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-full bg-black rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${
                current === index ? "w-[100%]" : "w-[10%]"
              } overflow-hidden block`}
            >
                <Image src={item.src} alt={item.alt || ''} width={1000} height={1500} className="w-full h-full object-cover"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
