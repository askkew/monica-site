import { Parallax } from 'react-parallax';
import main from './crocimage2.png';
import image from './winnerpicture.jpg';
import { Resultcardimage, ResultsParallax } from '../../pages/results/resultstyles';
import { Resultdetails, Resultlabel, Resultlabelcontainer, Separatorcontainer } from '../../pages/results/separatortextstyles';

const Secondwinner = () => {
  return (
    <ResultsParallax bgImage={main} strength={800} style={{fiilter: 'saturate(0)', height: '45vh', position: 'relative', width: '100%'}}>
    <Separatorcontainer>
      <Resultlabelcontainer style={{alignItems: 'flex-end'}}>
        <Resultlabel>2022 Result: Grand prize winner!</Resultlabel>
        <Resultdetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est explicabo accusamus quas totam corrupti cumque maxime harum nemo, quisquam, eos odio suscipit enim, non adipisci recusandae quaerat! Non, ducimus.</Resultdetails>
      </Resultlabelcontainer>
      <Resultcardimage src={image} height="50"/>
    </Separatorcontainer>
    </ResultsParallax>
)};

export default Secondwinner;