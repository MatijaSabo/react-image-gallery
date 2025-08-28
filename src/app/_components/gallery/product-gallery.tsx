/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";

// https://github.com/xiaolin/react-image-gallery
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { ImageGalleryModal } from "../modal/image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

type Image = {
  src: string;
  alt: string;
};

interface GalleryImage extends ReactImageGalleryItem {
  index: number;
}

type Props = {
  images: Image[];
};

export const ProductGallery = ({ images }: Props) => {
  const [transformed, setTransformed] = useState<GalleryImage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Transform runs once when component mounts
    const mapped: GalleryImage[] = images.map((img, index) => ({
      original: img.src,
      thumbnail: img.src,
      description: "",
      originalAlt: img.alt || "",
      originalTitle: img.alt || "",
      index: index,
    }));

    setTransformed(mapped);
  }, []);

  // ✅ Extended version of the default renderItem
  const renderItem = (item: ReactImageGalleryItem) => {
    const galleryItem = item as GalleryImage;
    return (
      <div className="image-gallery-image">
        <img
          src={galleryItem.original}
          alt={galleryItem.originalAlt}
          title={galleryItem.originalTitle}
          className="image-gallery-image cursor-pointer"
          onClick={() => {
            setIsOpen(true);
            setIndex(galleryItem.index);
          }}
        />
        {item.description && (
          <span className="image-gallery-description">{item.description}</span>
        )}
      </div>
    );
  };

  return (
    <>
      <ImageGallery
        renderItem={renderItem}
        items={transformed}
        thumbnailPosition={"left"}
        disableSwipe={true}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showBullets={false}
        showNav={false}
        showIndex={true}
      />
      <ImageGalleryModal
        images={images}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        index={index}
      />
    </>
  );
};
