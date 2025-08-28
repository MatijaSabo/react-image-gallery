import images from "../../../public/data/images-2-3.json";
import { ProductGallery } from "../_components/gallery/product-gallery";
import { ImageGalleryButton } from "../_components/modal/image-gallery";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-24">
      <div className="h-[80vh] grid">
        <ProductGallery images={images} />
      </div>
      <div>
        <h1 className="mb-2 text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
          Product name
        </h1>
        <p className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">30$</p>
        <p className="mb-5 md:mb-6">Product description</p>
        <ImageGalleryButton />
      </div>
    </div>
  );
}
