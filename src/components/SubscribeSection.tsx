import { useState } from 'react'
import { Button, Input } from '.'
import SubscribeSectionBackground from '../assets/SubscribeSectionBackground.png'
import { useScroll } from '../hooks/useScroll'
import { sendEmailToWaitlist } from '../services/waitlistService'
import { Link } from 'react-router-dom'


const SubscribeSection = () => {
  const { subscribeSectionRef } = useScroll()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <section ref={subscribeSectionRef} id="contact-us" className="flex flex-col mt-10 xl:mt-32 w-full justify-center items-center image py-32 px-8" style={{ backgroundImage: `url(${SubscribeSectionBackground})` }}>
      <h2 className="text-white">Get notified when we&#8217;re launching.</h2>
      <h5 className="text-gray-50">
        Stay in the loop! Be the first to know when we launch our cutting-edge backend solution.
        Subscribe to our email updates for insider news, early access, and exclusive offers.
        Join now to revolutionize your backend development journey
      </h5>
      <form
        className="flex flex-col items-center justify-center sm:flex-row gap-3 mt-8 w-full"
        onSubmit={(e) => {
          setIsSubmitting(true)
          e.preventDefault()
          sendEmailToWaitlist(email).then(() => {
            setIsSubmitting(false)
            setEmail('')
          })
        }}
      >
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          autoCapitalize="off"
          required
          readOnly={isSubmitting}
          classes="max-sm:w-full"
        />
        <Button
          title="Notify me"
          colorClass="gray-900"
          type="submit"
          classes="max-sm:w-full"
          loading={isSubmitting}
        />
      </form>
      <p className=" text-[10px] text-purple-100 mt-4">
        By subscribing, you agree with <Link to='/privacy-policy' className="text-indigo-500 font-medium underline">Privacy Policy</Link>
      </p>
    </section>
  )
}

export default SubscribeSection
