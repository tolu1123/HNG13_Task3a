
function ProductFeaturesAndSpecs() {
  return (
    <section className="w-full font-manrope my-22 sm:my-30 lg:my-40">
      <div className="container flex flex-col lg:flex-row gap-22 sm:gap-30 lg:gap-[7.81rem]">
        <div className="">
          <div className="lg:max-w-158.75 flex flex-col gap-6 sm:gap-8">
            <h4 className="text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase">FEATURES</h4>
            <div className="flex flex-col gap-6 lg:gap-8 text-black/50">
              <p className="">
                Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
              </p>
              <p className="">
                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            <h4 className="text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase">IN THE BOX</h4>
            <div className="">
              <FollowComes />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeaturesAndSpecs


function FollowComes() {
  return (
    <p className="flex gap-6 text-[0.9375rem]/[166.667%]">
      <span className="inline-block text-orange font-bold">1x</span>
      <span className="text-black/50">Headphone Unit</span>
    </p>
  )
}