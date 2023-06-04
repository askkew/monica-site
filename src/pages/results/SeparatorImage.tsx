import { Parallax } from 'react-parallax';
import main from './crocimage2.png';
import { ResultsParallax, ResultsSubtitle, ResultsTitle, ResultsTitleText } from './resultstyles';

const SeparatorImage = () => {
  return (
    <ResultsParallax bgImage={main} strength={800} style={{fiilter: 'saturate(0)', height: '15vh', position: 'relative', width: '100%'}}>
    </ResultsParallax>
)};

export default SeparatorImage;