import Image from "next/image";

const FurnitureGallerySection = () => {
  "use client";

  return (
    <section className="py-16">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="text-neutral-600 mb-2">Share your setup with</p>
          <h2 className="text-3xl   font-bold text-black">#FuniroFurniture</h2>
        </div>
        <div className="relative w-full h-[600px]">
          <Image src="/Images.png" alt="gallery" fill></Image>
        </div>
      </div>
    </section>
  );
};

export default FurnitureGallerySection;
