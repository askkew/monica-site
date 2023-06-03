import { Parallax } from 'react-parallax';
import main from './bannerpicture.png';

const FirstImage = () => {
  return (
    <Parallax className='image' bgImage={main} strength={800}>
      <div className='content'>
        <span className="img-txt">Private Lessons</span>
      </div>
    </Parallax>
)};

export default FirstImage;