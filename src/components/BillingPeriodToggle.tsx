enum BillingPeriods {
  Monthly = 'MONTHLY',
  Annually = 'ANNUALLY',
}

interface Props {
  billingPeriod: BillingPeriods;
  setBillingPeriod: (value: BillingPeriods) => void;
}

const BillingPeriodToggle: React.FC<Props> = ({ billingPeriod, setBillingPeriod }) => {
  const isMonthly = billingPeriod === BillingPeriods.Monthly

  return (
    <div className="flex flex-row justify-between gap-2 items-center p-1 border border-gray-300 rounded-full h-9">
      <button onClick={() => setBillingPeriod(BillingPeriods.Monthly)} className={`text-sm font-semibold py-1 px-2 ${isMonthly ? 'bg-violet-500 text-white' : 'text-gray-400'} rounded-full`}>Monthly</button>
      <button onClick={() => setBillingPeriod(BillingPeriods.Annually)} className={`text-sm font-semibold py-1 px-2 ${!isMonthly ? 'bg-violet-500 text-white' : 'text-gray-400'} rounded-full`}>Annually</button>
    </div>
  )
}

export {
  BillingPeriodToggle,
  BillingPeriods,
}
