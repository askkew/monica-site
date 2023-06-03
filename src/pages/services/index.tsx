import React from 'react'
import { Lessonscontainer, Servicecontainer } from './servicestyles'
import FirstImage from './FirstImage'
import Secondimage from './SecondImage'
import Leg from '../../components/leg'
import { IoCreate } from 'react-icons/io5'
import { GiTeacher } from 'react-icons/gi'

const Services = () => {
  return (
    <Servicecontainer>
      <FirstImage />
      <Lessonscontainer>
        <GiTeacher size={100} />
        <h1>Private lessons</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti et placeat soluta architecto libero similique, repudiandae cum nostrum minus officia totam perspiciatis id facilis quae, aut iusto repellat facere?
        Veniam repellat quibusdam fugiat voluptatem, voluptate asperiores ex similique illum quod voluptas ullam error aperiam distinctio tempora dolorum id itaque libero voluptatibus totam ipsam quo. Adipisci alias aliquam provident minima.
        Tenetur doloremque culpa, sunt perferendis deleniti eligendi tempora quae rem similique facilis libero atque nostrum officiis est, dolor cupiditate praesentium iusto sed odit consequatur dolorum quis porro animi totam. Amet.</p>
      </Lessonscontainer>
      <Secondimage />
      <Lessonscontainer>
        <IoCreate size={100} />
        <h1>Commissions</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti et placeat soluta architecto libero similique, repudiandae cum nostrum minus officia totam perspiciatis id facilis quae, aut iusto repellat facere?
        Veniam repellat quibusdam fugiat voluptatem, voluptate asperiores ex similique illum quod voluptas ullam error aperiam distinctio tempora dolorum id itaque libero voluptatibus totam ipsam quo. Adipisci alias aliquam provident minima.
        Tenetur doloremque culpa, sunt perferendis deleniti eligendi tempora quae rem similique facilis libero atque nostrum officiis est, dolor cupiditate praesentium iusto sed odit consequatur dolorum quis porro animi totam. Amet.</p>
      </Lessonscontainer>
      <Leg />
    </Servicecontainer>
  )
}

export default Services