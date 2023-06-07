import { Resultcardimage, Resultcontainer, Resultintro, Wordsection } from './resultstyles'
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
import miah1main from './images/miah1main.png'
import chloemillspeople from './images/chloemillspeople.jpg'
import chloemillsmain from './images/chloemillsmain.png'
import savannahjohnstonpeople from './images/savannahjohnstonpeople.jpg'
import savannahjohnstonmain from './images/savannahjohnstonmain.png'
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
    name: 'Mia Huckman',
    info: 'lorem ipsum',
    image: miah1people,
    year: 2023,
    result: 'NULL',
    backgroundimage: miah1main,
  },
  {
    id: 1,
    name: 'Mia Caycedo',
    info: 'lorem ipsum',
    image: miacpeople,
    year: 2023,
    result: 'NULL',
    backgroundimage: miacmain,
  },
  {
    id: 1,
    name: 'Hannah Horton',
    info: 'lorem ipsum',
    image: hannahhpeople,
    year: 2023,
    result: 'NULL',
    backgroundimage: hannahmain,
  },
  {
    id: 1,
    name: 'Mia Huckman',
    info: 'lorem ipsum',
    image: miah2people,
    year: 2022,
    result: 'NULL',
    backgroundimage: miah2main,
  },
  {
    id: 1,
    name: 'Lilian Gerald Emesih',
    info: 'lorem ipsum',
    image: liliangpeople,
    year: 2022,
    result: 'NULL',
    backgroundimage: liliangmain,
  },
  {
    id: 1,
    name: 'Chloe Mills',
    info: 'lorem ipsum',
    image: chloemillspeople,
    year: 2021,
    result: 'NULL',
    backgroundimage: chloemillsmain,
  },
  {
    id: 1,
    name: 'Savannah Johnston',
    info: 'lorem ipsum',
    image: savannahjohnstonpeople,
    year: 2020,
    result: 'NULL',
    backgroundimage: savannahjohnstonmain,
  },
  {
    id: 1,
    name: 'Sonali Puri',
    info: 'lorem ipsum',
    image: sonalipuripeople,
    year: 2019,
    result: 'NULL',
    backgroundimage: sonalipurimain,
  },
  {
    id: 1,
    name: 'Mathaly Carranza',
    info: 'lorem ipsum',
    image: mathalycarranzapeople,
    year: 2019,
    result: 'NULL',
    backgroundimage: mathalycarranzamain,
  },
  {
    id: 1,
    name: 'Katherine Le',
    info: 'lorem ipsum',
    image: katlepeople,
    year: 2018,
    result: 'NULL',
    backgroundimage: katlemain,
  },
  {
    id: 1,
    name: 'Alex Velasquez',
    info: 'lorem ipsum',
    image: alexvelasquezpeople,
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
        <h1>Results</h1>
      </Resultintro>
      { resultData.map((result) => (
        <div key={result.id}>
          <Wordsection>
            <h2>{result.year} Results</h2>
          </Wordsection>
          <SeparatorImage data={result}/>
        </div>
      ))}
      <Resultintro>
        <h1>Want your student to have similar results?</h1>
        <h2>Get in contact with me today!</h2>
      </Resultintro>
      <Leg />
    </Resultcontainer>
  )
}

export default Results