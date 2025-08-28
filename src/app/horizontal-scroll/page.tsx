import images from "../../../public/data/images-3-2.json";
import { HorizontalScroll } from "../_components/gallery/horizontal-scroll";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black h-[100vh] text-white content-center text-center text-7xl">
        Scroll to gallery
      </div>
      <HorizontalScroll>
        {images.map((item, index) => {
          return (+
            // Size of element controlled by <div>
            <div key={index} className="w-[60svw] h-[80svh]">
              <Image
                src={item.src}
                alt={item.alt || ""}
                width={1200}
                height={800}
              />
              <p className="text-white">{item.alt}</p>
            </div>
          );
        })}
      </HorizontalScroll>
      <div className="bg-black h-[100vh] text-white content-center text-center text-7xl">
        Thanks for watching
      </div>
    </>
  );
}
