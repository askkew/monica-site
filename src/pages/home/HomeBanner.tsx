import { Parallax } from 'react-parallax';
import main from './banner2.jpg';
import { HomeParallax, HomeTitle, HomeTitleText, Subbar } from './homestyles';

const HomeBanner = () => {
  return (
    <HomeParallax className='image' bgImage={main} strength={800}>
      <HomeTitle>
        <HomeTitleText>Monica Medellin Art</HomeTitleText>
      </HomeTitle>
    </HomeParallax>
)};

export default HomeBanner;