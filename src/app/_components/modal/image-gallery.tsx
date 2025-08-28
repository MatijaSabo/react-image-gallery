// Docs: https://yet-another-react-lightbox.com/

"use client";

import React, { useState } from "react";

import Lightbox, { Slide } from "yet-another-react-lightbox";
import { Counter, Zoom } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import images from "../../../../public/data/images-3-2.json";

type Props = {
  images: Slide[];
  index?: number;
  preloadItems?: number
  isOpen: boolean;
  onClose(): void;
};

export const ImageGalleryModal: React.FC<Props> = ({
  images,
  index = 0,
  isOpen,
  preloadItems = 2,
  onClose,
}: Props) => {
  return (
    <Lightbox
      open={isOpen}
      carousel={{
        preload: preloadItems,
        padding: '5%'
      }}
      close={() => onClose()}
      index={index}
      slides={images}
      plugins={[Counter, Zoom]}
    />
  );
};

export const ImageGalleryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="border-solid border-1 border-black p-4 cursor-pointer">Open modal</button>
      <ImageGalleryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        index={0}
        images={images}
      />
    </>
  );
};
