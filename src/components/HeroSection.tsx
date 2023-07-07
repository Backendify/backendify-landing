import { Button } from '.'
import { useScroll } from '../hooks/useScroll'


const HeroSection = () => {
  const { subscribeSectionRef, featuringSectionRef } = useScroll()

  const goToSubscribe = () => subscribeSectionRef.current?.scrollIntoView()
  const goToFeaturing = () => featuringSectionRef.current?.scrollIntoView()

  return (
    <section className="h-screen bg-white flex flex-col justify-center items-center w-full px-8 hero-section-bg" id="product">
      <h1 className="max-w-xl">Powerful Backend Solutions</h1>
      <p className="font-semibold text-lg leading-8 text-gray-600 mt-8 max-w-xl text-center">
        Build, Deploy, and Scale Your Applications with Ease Using Backendify's All-in-One Backend Platform
      </p>
      <div className="mt-16 flex flex-row gap-8">
        <Button title="Get Started" onClick={goToSubscribe} />
        <Button title="Learn more" outlined colorClass="gray-900" onClick={goToFeaturing} icon="arrow-narrow-right" classes="border-gray-900" />
      </div>
    </section>
  )
}

export default HeroSection
