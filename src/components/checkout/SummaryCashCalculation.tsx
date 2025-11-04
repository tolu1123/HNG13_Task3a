
function SummaryCashCalculation() {
  return (
    <div className="font-manrope mt-8">
      <div className="">
        {/* The Cash details */}
        <div className="flex flex-col gap-2">
          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">TOTAL</span>
            <span className="inline-block text-[1.125rem]/[100%] uppercase font-bold">$5,396</span>
          </p>

          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">SHIPPING</span>
            <span className="inline-block text-[1.125rem]/[100%] uppercase font-bold">$50</span>
          </p>

          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">VAT (INCLUDED)</span>
            <span className="inline-block text-[1.125rem]/[100%] uppercase font-bold">$5,396</span>
          </p>
        </div>
        {/* The Grand Total Calculation */}
        <div className="mt-6 mb-8">
          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">GRAND TOTAL</span>
            <span className="inline-block text-[1.125rem]/[100%] text-orange font-bold uppercase">$5,396</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SummaryCashCalculation