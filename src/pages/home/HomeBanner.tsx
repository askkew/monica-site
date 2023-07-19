import { Parallax } from 'react-parallax';
import main from './banner2.jpg';
import secondary from './banner3.jpg';
import { HomeParallax, HomeTitle, HomeTitleText, Subbar } from './homestyles';

const HomeBanner = () => {
  return (
    <HomeParallax className='image' bgImage={secondary} strength={800}>
      <HomeTitle>
        <HomeTitleText>Crit Art Consultng</HomeTitleText>
      </HomeTitle>
    </HomeParallax>
)};

export default HomeBanner;