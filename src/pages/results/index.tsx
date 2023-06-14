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

const Results = () => {
  return (
    <Resultcontainer>
      <ResultsImage />
      <Resultintro>
        <Resultintrotitle>Results</Resultintrotitle>
        <Resultintrodescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident corrupti eum nihil mollitia eveniet illum est aliquam facilis explicabo voluptatibus delectus ut accusantium quis perspiciatis adipisci labore, autem suscipit.</Resultintrodescription>
      </Resultintro>
      { resultData.map((result) => (
        <div key={result.id}>
          <Wordsection />
          <SeparatorImage data={result}/>
        </div>
      ))}
      <Resultintro>
        <Resultintrotitle>Want your student to have similar results?</Resultintrotitle>
        <Resultintrotitle>Get in contact with me today!</Resultintrotitle>
      </Resultintro>
      <Leg />
    </Resultcontainer>
  )
}

export default Results