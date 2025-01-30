import React from 'react'
import HeroImage from '../../components/user/home/HeroImage'
import ClassRoomCourses from '../../components/user/home/ClassRoomCourses'
import ContactUs from '../../components/user/home/ContactUs'
import { Testimonials } from '../../components/user/home/Testimonials'
import SalientFeatures from '../../components/user/home/SalientFeatures'
import DirectorsDeskPreview from '../../components/user/home/DirectorDeskPreview'


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
