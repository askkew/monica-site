import { Parallax } from 'react-parallax';
import main from './servicebanner.jpg';
import { ServiceParallax, Serviceparallaxlabel, Serviceparallaxtext } from './servicestyles';

const FirstImage = () => {
  return (
    <ServiceParallax bgImage={main} strength={800}>
      <Serviceparallaxlabel>
        <Serviceparallaxtext>Tutoring services</Serviceparallaxtext>
      </Serviceparallaxlabel>
    </ServiceParallax>
)};

export default FirstImage;