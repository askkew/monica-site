import React from 'react'
import { Boxservicecontainer, Boxserviceimage, Boxservicelabel, Lessonscontainer, Servicecontainer, Serviceintro, Serviceseparatorbar, Serviceseparatorbartext } from './servicestyles'
import FirstImage from './FirstImage'
import Secondimage from './SecondImage'
import Leg from '../../components/leg'
import { IoCreate } from 'react-icons/io5'
import { GiTeacher } from 'react-icons/gi'
import { Resultintro } from '../results/resultstyles'
import { ContactForm } from '../contact'
import privateImage from './servicebanner.jpg'
import groupImage from './bugpicture.png'

const privateLessons = { icon: IoCreate, imageSrc: privateImage, title: 'Private lessons', description: 'Private lessons are available for all ages and levels. The lessons are tailored to the student’s needs and goals. The lessons are held in my studio in Stockholm or online.' }
const groupLessons = { icon: GiTeacher, imageSrc: groupImage, title: 'Group lessons', description: 'Group lessons are available for all ages and levels. The lessons are tailored to the student’s needs and goals. The lessons are held in my studio in Stockholm or online.' }

const Boxservice = ({ data }: { data: any }) => {
  return (
    <Boxservicecontainer>
      <Boxserviceimage src={data.imageSrc}/>
      <data.icon style={{ position: 'relative', zIndex: 1, color: 'white' }} size={50} />
      <Boxservicelabel>{data.title}</Boxservicelabel>
    </Boxservicecontainer>
  )
}

const Services = () => {
  return (
    <Servicecontainer>
      <FirstImage />
      <Serviceseparatorbar>
        <Serviceseparatorbartext>My mission is to help students get their art into the Houston Rodeo Live Art Auction!</Serviceseparatorbartext>
      </Serviceseparatorbar>
      <Lessonscontainer>
        <Boxservice data={privateLessons}/>
        <Boxservice data={groupLessons}/>
      </Lessonscontainer>
      <Secondimage />
      <Lessonscontainer>
        <ContactForm />
      </Lessonscontainer>
      <Leg />
    </Servicecontainer>
  )
}

export default Services