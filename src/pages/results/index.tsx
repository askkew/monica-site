import React from 'react'
import { Resultcardimage, Resultcontainer, Resultintro, Wordsection } from './resultstyles'
import Leg from '../../components/leg'
import ResultsImage from './ResultsImage'
import winnerimage from './winnerpicture.jpg'
import SeparatorImage from './SeparatorImage'
import Secondwinner from '../../components/secondwinner'

const Results = () => {
  return (
    <Resultcontainer>
      <ResultsImage />
      <Resultintro>
        <h1>Results</h1>
        <h2>2023 Results</h2>
      </Resultintro>
      <SeparatorImage />
      <Wordsection>
        <h2>2022 Results</h2>
      </Wordsection>
      <Secondwinner />
      <Wordsection>
        <h2>2021 Results</h2>
      </Wordsection>
      <SeparatorImage />
      <Wordsection>
        <h2>2022 Results</h2>
      </Wordsection>
      <Secondwinner />
      <Resultintro>
        <h1>Want your student to have similar results?</h1>
        <h2>Get in contact with me today!</h2>
      </Resultintro>
      <Leg />
    </Resultcontainer>
  )
}

export default Results