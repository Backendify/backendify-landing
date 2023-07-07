import { useState } from 'react'
import { BillingPeriodToggle, BillingPeriods } from './'
import { pricingPlans } from '../constants'
import PricingPlanCard from './PricingPlanCard'
import { useScroll } from '../hooks/useScroll'


const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState(BillingPeriods.Monthly)
  const { pricingSectionRef } = useScroll()

  return (
    <section ref={pricingSectionRef} className="flex flex-col items-center justify-center pt-36 w-full pb-10 xl:pb-32" id="pricing">
      <h6>Pricing</h6>
      <h2 className="text-5xl min-w-full">Pricing plans for teams of all sizes</h2>
      <h5 className="mb-16">
        Choose the subscription plan that suits your project requirements.
        Enjoy the benefits of Backendify's powerful features and support.
      </h5>
      <BillingPeriodToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
      <div className="flex flex-col xl:flex-row gap-10 xl:justify-center mt-10">
        {pricingPlans.map(plan => (
          <PricingPlanCard plan={plan} key={plan.name} billingPeriod={billingPeriod} />
        ))}
      </div>
    </section>
  )
}

export default PricingSection
