import React from 'react'
import HeroImage from '../components/home/HeroImage'
import ClassRoomCourses from '../components/home/ClassRoomCourses'
import ContactUs from '../components/home/ContactUs'
import { Testimonials } from '../components/home/Testimonials'
import SalientFeatures from '../components/home/SalientFeatures'
import DirectorsDeskPreview from '../components/home/DirectorDeskPreview'


export default function Home() {
  return (
    <div>
      <HeroImage/>
      <ClassRoomCourses/>
      <DirectorsDeskPreview/>
      <SalientFeatures/>
      <Testimonials/>
     
      <ContactUs/>
      
    </div>
  )
}
