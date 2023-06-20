import { Parallax } from 'react-parallax';
import main from './images/banner2.jpg';
import { ResultsParallax, ResultsSubtitle, ResultsTitle, ResultsTitleText } from './resultstyles';

const ResultsImage = () => {
  return (
    <ResultsParallax className='image' bgImage={main} strength={800}>
      <ResultsTitle>
        <ResultsTitleText>Houston Rodeo Art Auction 2023 Winner!</ResultsTitleText>
        <ResultsSubtitle>Art sold for $250,000</ResultsSubtitle>
      </ResultsTitle>
    </ResultsParallax>
)};

export default ResultsImage;