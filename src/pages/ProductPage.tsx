import { CTASection, FeaturingSection, Footer, Header, HeroSection, PricingSection, SubscribeSection } from '../components'
import { ScrollProvider } from '../contexts/ScrollContext'

const ProductPage = () => (
  <ScrollProvider>
    <Header mode='anchor' />
    <main className="flex flex-col flex-1 justify-center mx-0 px-0 w-screen">
      <HeroSection />
      <FeaturingSection />
      <CTASection />
      <PricingSection />
      <SubscribeSection />
    </main>
    <Footer mode='anchor' />
  </ScrollProvider>
)

export default ProductPage
