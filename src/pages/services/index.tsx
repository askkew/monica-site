import React from 'react'
import { Boxservicecontainer, Lessonscontainer, Servicecontainer, Serviceintro, Serviceseparatorbar } from './servicestyles'
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
      <img src={data.imageSrc} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
      <data.icon style={{ position: 'relative', zIndex: 1, color: 'white' }} size={50} />
      <h1 style={{ position: 'relative', zIndex: 1, color: 'white' }}>{data.title}</h1>
    </Boxservicecontainer>
  )
}

const Services = () => {
  return (
    <Servicecontainer>
      <FirstImage />
      <Serviceseparatorbar>
        <h1></h1>
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