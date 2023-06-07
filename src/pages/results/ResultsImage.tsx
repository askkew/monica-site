import { Parallax } from 'react-parallax';
import main from './images/banner2.jpg';
import { ResultsParallax, ResultsSubtitle, ResultsTitle, ResultsTitleText } from './resultstyles';

const ResultsImage = () => {
  return (
    <ResultsParallax className='image' bgImage={main} strength={800}>
      <ResultsTitle>
        <ResultsTitleText>Congrats to Mia Huckman!</ResultsTitleText>
        <ResultsSubtitle>Houston Rodeo Art Auction 2023 Winner!</ResultsSubtitle>
      </ResultsTitle>
    </ResultsParallax>
)};

export default ResultsImage;