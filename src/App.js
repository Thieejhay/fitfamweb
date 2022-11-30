import React from 'react'
import Footer from './componets/Footer'
import Hero from './componets/Hero'
import Join from './componets/Join'
import Plans from './componets/Plans'
import Programs from './componets/Programs'
import Reason from './componets/reasons/Reason'
import Testimonial from './componets/Testimonial'

const App = () => {
  return (
    <div className='flex flex-col mix-blend-overlay gap-24 overflow-hidden bg-appColor'>
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  )
}

export default App;