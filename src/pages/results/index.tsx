import React from 'react'
import { Resultcardimage, Resultcontainer, Wordsection } from './resultstyles'
import Leg from '../../components/leg'
import ResultsImage from './ResultsImage'
import winnerimage from './winnerpicture.jpg'
import SeparatorImage from './SeparatorImage'

const Results = () => {
  return (
    <Resultcontainer>
      <ResultsImage />
      <Wordsection>
        <h1>Results</h1>
        <Resultcardimage src={winnerimage}/>
      </Wordsection>
      <SeparatorImage />
      <Wordsection>
        <h1>Results</h1>
        <Resultcardimage src={winnerimage}/>
      </Wordsection>
      <Leg />
    </Resultcontainer>
  )
}

export default Results