import { Parallax } from 'react-parallax';
import main from './bugpicture.png';

const Secondimage = () => {
  return (
    <Parallax className='image' bgImage={main} strength={300}>
      <div className='content'>
        <span className="img-txt">Commissions</span>
      </div>
    </Parallax>
)};

export default Secondimage;