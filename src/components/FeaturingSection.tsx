import CreateServerPageImage from '../assets/CreateServerPage.png'
import { featuresList } from '../constants'
import { useScroll } from '../hooks/useScroll'
import './styles.css'


const FeaturingSection = () =>  {
  const { featuringSectionRef } = useScroll()

  return (
    <section ref={featuringSectionRef} className="flex flex-col justify-center items-center pt-24 pb-20 px-8 max-sm:px-4 w-full">
      <h6>All the Essentials</h6>
      <h2>Everything You Need for Your Backend</h2>
      <h5>
        Backendify offers an extensive set of features and tools to simplify your development process.
        From authentication and data management to real-time notifications and cloud integration, our platform
        has you covered. Explore the possibilities and bring your ideas to life with ease.
      </h5>
      <div style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 57.42%, #FFF 100%), url(${CreateServerPageImage})` }} className="image bg-contain w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[870px] image lg:mx-10 mt-16" />
      <div className="flex flex-col lg:flex-row max-lg:items-center justify-center gap-8 w-full lg:mt-24">
        {featuresList.map(feature => (
          <article key={feature.title} className="feature-card">
            <div className="w-10 h-10 bg-violet-500 rounded-lg flex justify-center items-center">
              <img src={feature.icon} />
            </div>
            <p className="text-gray-900 text-base mt-6 font-bold">{feature.title}</p>
            <p className=" w-full text-gray-400 text-base font-medium mt-3 max-lg:max-w-sm max-lg:text-center">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturingSection
