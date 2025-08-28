import { ImageGallery1 } from "./_components/gallery/image-gallery-1";
import images from "../../public/data/images-2-3.json"

export default function Home() {
  return (
    <ImageGallery1 images={images}/>
  );
}
