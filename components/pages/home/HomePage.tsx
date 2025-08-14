import BrowseRangeSection from "./sections/BrowseRangeSections";
import FurnitureGallerySection from "./sections/FurnitureGallerySection";
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";
import RoomInspirationSection from "./sections/RoomInspirationSection";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <BrowseRangeSection />
      <ProductsSection />
      <RoomInspirationSection />
      <FurnitureGallerySection />
    </div>
  );
};

export default HomePage;
