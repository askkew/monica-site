import { Resultdetails, Resultlabel, Resultlabelcontainer, Separatorcontainer, Resultcardimage, ResultsParallax } from './resultstyles';

interface ResultData {
  id: number;
  name: string;
  info: string;
  image: string;
  year: number;
  result: string;
  backgroundimage: string;
}

interface SeparatorImageProps {
  data: ResultData;
}

const SeparatorImage = ({ data }: SeparatorImageProps) => {
  const { image, year, name, result, info, backgroundimage } = data;
  return (
    <ResultsParallax bgImage={backgroundimage} strength={800} style={{fiilter: 'saturate(0)', height: '45vh', position: 'relative', width: '100%'}}>
      <Separatorcontainer>
        <Resultcardimage src={image} height="50"/>
        <Resultlabelcontainer>
          <Resultlabel>{name}</Resultlabel>
          <Resultdetails>{year}</Resultdetails>
          <Resultdetails>{info}</Resultdetails>
        </Resultlabelcontainer>
      </Separatorcontainer>
    </ResultsParallax>
)};

export default SeparatorImage;