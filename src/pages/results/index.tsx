import { Resultcardimage, Resultcontainer, Resultintro, Resultintrodescription, Resultintrotitle, Wordsection } from './resultstyles'
import Leg from '../../components/leg'
import ResultsImage from './ResultsImage'
import SeparatorImage from './SeparatorImage'
import hannahhpeople from './images/hannahhpeople.jpg'
import hannahmain from './images/hannahhmain.jpg'
import miacpeople from './images/miacpeople.jpg'
import miacmain from './images/miacmain.jpg'
import miah2people from './images/miah2people.jpg'
import miah2main from './images/miah2main.jpeg'
import liliangpeople from './images/liliangpeople.jpg'
import liliangmain from './images/liliangmain.jpg'
import miah1people from './images/miah1people.jpg'
import miah1main from './images/miah1main.jpg'
import chloemillspeople from './images/chloemillspeople.jpg'
import chloemillsmain from './images/chloemillsmain.png'
import savannahjohnstonpeople from './images/savannahjohnstonpeople.jpg'
import savannahjohnstonmain from './images/miah1main.jpg'
import sonalipuripeople from './images/sonalipuripeople.jpg'
import sonalipurimain from './images/sonalipurimain.jpg'
import mathalycarranzapeople from './images/mathalycarranzapeople.jpg'
import mathalycarranzamain from './images/mathalycarranzamain.jpg'
import katlepeople from './images/katlepeople.jpg'
import katlemain from './images/katlemain.jpg'
import alexvelasquezpeople from './images/alexvelasquezpeople.jpg'
import alexvelasquezmain from './images/alexvelasquezmain.jpg'
import { ContactForm } from '../contact'
import { Divider } from '@mui/material'
import { AboutTypographyDesc, AboutTypographyTitle, Aboutdetails, Aboutdetailstext } from '../about/aboutstyles'

const resultData = [
  {
    id: 1,
    name: 'Our Last Roundup',
    info: 'lorem ipsum',
    price: 275000,
    year: 2023,
    result: 'NULL',
    backgroundimage: miah1main,
  },
  {
    id: 2,
    name: 'Topic of Conversation',
    info: 'lorem ipsum',
    price: 20000,
    year: 2023,
    result: 'NULL',
    backgroundimage: miacmain,
  },
  {
    id: 3,
    name: 'The Glamorous Homestead',
    info: 'lorem ipsum',
    price: 25000,
    year: 2023,
    result: 'NULL',
    backgroundimage: hannahmain,
  },
  {
    id: 4,
    name: 'Partners in Time',
    info: 'lorem ipsum',
    price: 265000,
    year: 2022,
    result: 'NULL',
    backgroundimage: miah2main,
  },
  {
    id: 5,
    name: 'The Story of the Black Cowboy',
    info: 'lorem ipsum',
    price: 25000,
    year: 2022,
    result: 'NULL',
    backgroundimage: liliangmain,
  },
  {
    id: 6,
    name: 'Now or Never',
    info: 'lorem ipsum',
    price: 1,
    year: 2021,
    result: 'NULL',
    backgroundimage: chloemillsmain,
  },
  {
    id: 7,
    name: 'Chromatic Escape',
    info: 'lorem ipsum',
    price: 1,
    year: 2020,
    result: 'NULL',
    backgroundimage: savannahjohnstonmain,
  },
  {
    id: 8,
    name: 'Kickin’ up a Storm!',
    info: 'lorem ipsum',
    price: 27000,
    year: 2019,
    result: 'NULL',
    backgroundimage: sonalipurimain,
  },
  {
    id: 9,
    name: 'Found Ya!',
    info: 'lorem ipsum',
    price: 15000,
    year: 2019,
    result: 'NULL',
    backgroundimage: mathalycarranzamain,
  },
  {
    id: 10,
    name: 'Greener Pastures',
    info: 'lorem ipsum',
    price: 25000,
    year: 2018,
    result: 'NULL',
    backgroundimage: katlemain,
  },
  {
    id: 11,
    name: 'Monroe Flower',
    info: 'lorem ipsum',
    price: 59000,
    year: 2017,
    result: 'NULL',
    backgroundimage: alexvelasquezmain,
  },
]

const resultInfo = [
  {
    title: 'Results',
    description: 'Monica has been a middle school and high school art teacher for the past 11 years where she specialized in having students qualify for the Houston Livestock Show & Rodeo\'s Art Auction on an annual basis.',
  }
]

const Results = () => {
  return (
    <Resultcontainer>
      <ResultsImage />
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgb(234,234,234)'}}/>
      <Aboutdetails style={{minHeight: '30vh', width: '100vw', justifyContent: 'center'}}>
        <Aboutdetailstext style={{textAlign: 'center'}}>
          <AboutTypographyTitle>{resultInfo[0].title}</AboutTypographyTitle>
          <Divider />
          <AboutTypographyDesc>{resultInfo[0].description}</AboutTypographyDesc>
          <Divider />
        </Aboutdetailstext>
      </Aboutdetails>
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgb(234,234,234)'}}/>
      { resultData.map((result, index) => (
        <div key={result.id}>
          {index !== 0 && <Wordsection />}
          <SeparatorImage data={result}/>
        </div>
      ))}
      <Resultintro>
        <Resultintrotitle>Want your student to have similar results?</Resultintrotitle>
        <Resultintrotitle>Get in contact with me today!</Resultintrotitle>
      </Resultintro>
      <ContactForm />
      <Leg />
    </Resultcontainer>
  )
}

export default Results