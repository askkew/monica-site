import { Resultdetails, Resultlabel, Resultlabelcontainer, Separatorcontainer, Resultcardimage, ResultsParallax } from './resultstyles';

interface ResultData {
  id: number;
  name: string;
  info: string;
  price: number;
  year: number;
  result: string;
  backgroundimage: string;
}

interface SeparatorImageProps {
  data: ResultData;
}

const SeparatorImage = ({ data }: SeparatorImageProps) => {
  const { price, year, name, result, info, backgroundimage } = data;
  return (
    <ResultsParallax bgImage={backgroundimage} strength={800} blur={3}>
      <Separatorcontainer>
        <Resultcardimage src={backgroundimage} height="50"/>
        <Resultlabelcontainer>
          <Resultlabel>{name}</Resultlabel>
          <Resultdetails>{year}</Resultdetails>
          { price === 1 ? <Resultdetails>Sold</Resultdetails> : <Resultdetails>{`Sold for $${price}`}</Resultdetails> }
        </Resultlabelcontainer>
      </Separatorcontainer>
    </ResultsParallax>
)};

export default SeparatorImage;