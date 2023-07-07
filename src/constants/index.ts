import CashIcon from '../assets/icons/cash.svg'
import ClockIcon from '../assets/icons/clock.svg'
import ClickIcon from '../assets/icons/cursor-click.svg'


export const headerList = [
  {
    title: 'Product',
    anchor: '#product',
    link: '/#product'
  },
  {
    title: 'Pricing',
    anchor: '#pricing',
    link: '/#pricing'
  },
  {
    title: 'Contact Us',
    anchor: '#contact-us',
    link: '/#contact-us'
  },
]

export const featuresList = [
  {
    title: 'Save Time & Effort',
    text: 'Backendify eliminates the need for building backend infrastructure from scratch. Focus on your core application logic and let us handle the backend complexities',
    icon: CashIcon
  },
  {
    title: 'Cost-Effective Solutions',
    text: 'With Backendify, you can reduce infrastructure costs by leveraging our scalable backend solutions. Pay only for what you use and avoid unnecessary expenses.',
    icon: ClockIcon
  },
  {
    title: 'Easy to Use',
    text: 'Effortlessly integrate powerful backend features into your applications with our user-friendly interface and pre-built modules.',
    icon: ClickIcon
  },
]

export const promotedPlanName = 'Basic'
export interface IPricingPlan {
  name: string;
  description: string;
  price: number;
  featuresTitle: string;
  featuresList: string[];
}
export const pricingPlans: IPricingPlan[] = [
  {
    name: 'Freelancer',
    description: 'A plan tailored for freelancers and small businesses.',
    price: 30,
    featuresTitle: 'Everything in Basic, plus additional advanced features.',
    featuresList: ['Pro authentication module', 'Notifications module', 'Media storage module', 'API integrations module', 'Access to 2 templates']
  },
  {
    name: 'Basic',
    description: 'The perfect starting point for individuals and hobbyists.',
    price: 0,
    featuresTitle: 'Everything necessary to get started.',
    featuresList: ['Standard authentication module', 'Database module']
  },
  {
    name: 'Startup',
    description: 'An ideal plan for startups and growing businesses.',
    price: 80,
    featuresTitle: 'Everything in Freelancer, plus essential tools for growing your business.',
    featuresList: ['Access to 10 templates', 'Payment module', 'Analytics module', '1-hour, dedicated support response time']
  }
]
