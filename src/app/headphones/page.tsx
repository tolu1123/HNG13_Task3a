import Hero from '@/components/headphones/Hero'
import Products from '@/components/headphones/Products'
import ShopSection from '@/components/home/ShopSection'
import BestAudioGear from '@/components/BestAudioGear'

function page() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Products />
      <ShopSection />
      <BestAudioGear />
    </main>
  )
}

export default page