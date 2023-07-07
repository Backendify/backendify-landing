import { BillingPeriods, Button } from '.'
import { IPricingPlan, promotedPlanName } from '../constants'
import CheckIcon from '../assets/icons/check.svg'

interface Props {
  plan: IPricingPlan;
  billingPeriod: BillingPeriods;
}

const PricingPlanCard: React.FC<Props> = ({ plan, billingPeriod }) => {
  const isPromoted = plan.name === promotedPlanName

  const price = billingPeriod === BillingPeriods.Monthly ? plan.price : Math.round(plan.price * 12 * 0.75)
  const billingPeriodWord = billingPeriod === BillingPeriods.Monthly ? '/month' : '/year'

  return (
    <article className={`flex flex-col justify-start items-start p-10 ${isPromoted ? 'border-2 border-violet-500' : 'border border-gray-300'} bg-white rounded-3xl max-w-[380px] h-[560px]`}>
      <p className={`text-lg leading-6 font-bold ${isPromoted ? 'text-violet-500' : 'text-gray-900'}`}>{plan.name}</p>
      <p className="text-sm font-semibold text-gray-600 mt-4 text-left">{plan.description}</p>
      <p className="text-4xl font-bold text-gray-900 my-6">
        ${price}
        <span className="text-sm font-medium text-gray-600">{billingPeriodWord}</span>
      </p>
      <Button title="Coming soon" fullWidth outlined={!isPromoted} colorClass={isPromoted ? 'violet-500' : 'gray-900'} disabled/>
      <p className="text-sm font-bold text-gray-900 mt-10">{plan.featuresTitle}</p>
      <ul className="flex flex-col gap-3 justify-start items-start mt-6">
        {plan.featuresList.map(title => (
          <li key={title} className="flex flex-row gap-3 w-full">
            <div className="flex justify-center items-center bg-violet-100 rounded-full">
              <img src={CheckIcon} alt="check icon" />
            </div>
            <p className="text-sm font-semibold text-gray-600">{title}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PricingPlanCard
