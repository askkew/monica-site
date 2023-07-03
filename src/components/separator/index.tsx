import { Parallax } from 'react-parallax';
import main from './separatorart.jpg';
import { Artseparator } from '../../pages/services/servicestyles';

interface SeparatorProps {
  data: {
    image: string;
    text: string;
  };
}

const Separator = ({data}: SeparatorProps) => {
  return (
    <Artseparator bgImage={data.image} strength={300}>
      <div>
        {data.text}
      </div>
    </Artseparator>
)};

export default Separator;