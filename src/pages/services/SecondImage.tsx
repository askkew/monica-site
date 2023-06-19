import { Parallax } from 'react-parallax';
import main from './separatorart.jpg';
import { Artseparator, Serviceparallaxlabel, Serviceparallaxtext } from './servicestyles';

const Secondimage = () => {
  return (
    <Artseparator bgImage={main} strength={300}>
    </Artseparator>
)};

export default Secondimage;