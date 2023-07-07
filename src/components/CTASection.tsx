import { Button } from "."
import { useScroll } from '../hooks/useScroll'


const CTASection = () => {
  const { subscribeSectionRef, pricingSectionRef } = useScroll()

  const goToSubscribe = () => subscribeSectionRef.current?.scrollIntoView()
  const goToPricing = () => pricingSectionRef.current?.scrollIntoView()

  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 max-lg:mt-0 mt-20 py-32 px-8">
      <h2 className="text-white mt-0 mb-0">Supercharge your productivity.</h2>
      <h2 className="text-white mt-0 mb-0">Get started with Backendify today.</h2>
      <h5 className="text-gray-200 mt-6">
        Maximize your efficiency and accelerate your development process with Backendify.
        Start using Backendify now to unlock a new level of productivity and unleash the
        full potential of your applications.
      </h5>
      <div className="flex flex-col xs:flex-row items-center justify-center gap-8 mt-12 w-full">
        <Button title="Get started" onClick={goToSubscribe} />
        <Button title="Learn more" outlined onClick={goToPricing} colorClass="white" icon="arrow-narrow-right" />
      </div>
      <div className="w-1/3 h-1/2 bottom-0 mx-auto" style={{ background: 'rgba(147, 51, 234, 0.40)', boxShadow: '90px 90px 90px ', filter: 'blur(90px)' }} />
    </section>
  )
}

export default CTASection
