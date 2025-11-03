import AppHeader from "@/components/AppHeader";
import ProductFeaturesAndSpecs from "@/components/sharedUI/ProductFeaturesAndSpecs";
import ProductGallery from "@/components/sharedUI/ProductGallery";
import ProductHero from "@/components/sharedUI/ProductHero";
import ProductRecommendation from "@/components/sharedUI/ProductRecommendation";

function page() {
  return (
    <main className='w-full'>
      <AppHeader />
      <ProductHero />
      <ProductFeaturesAndSpecs />
      <ProductGallery />
      <ProductRecommendation />
    </main>
  );
}

export default page;
