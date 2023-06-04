import { Parallax } from 'react-parallax';
import main from './championpicture.png';
import image from './winnerpicture.jpg';
import { Resultcardimage, ResultsParallax, ResultsSubtitle, ResultsTitle, ResultsTitleText } from './resultstyles';
import { Resultdetails, Resultlabel, Resultlabelcontainer, Separatorcontainer } from './separatortextstyles';

const SeparatorImage = () => {
  return (
    <ResultsParallax bgImage={main} strength={800} style={{fiilter: 'saturate(0)', height: '45vh', position: 'relative', width: '100%'}}>
      <Separatorcontainer>
        <Resultcardimage src={image} height="50"/>
        <Resultlabelcontainer>
          <Resultlabel>2023 Result: Grand prize winner!</Resultlabel>
          <Resultdetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est explicabo accusamus quas totam corrupti cumque maxime harum nemo, quisquam, eos odio suscipit enim, non adipisci recusandae quaerat! Non, ducimus.</Resultdetails>
        </Resultlabelcontainer>
      </Separatorcontainer>
    </ResultsParallax>
)};

export default SeparatorImage;