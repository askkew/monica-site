import { Parallax } from 'react-parallax';
import main from './temppic.jpg';
import { HomeParallax, HomeTitle, HomeTitleText, InfoTitle, InfoTitleButton, InfoTitleDescription, InfoTitleText, Subbar } from './homestyles';

const InfoBannerContent = [
  {
    title: 'Private Lessons',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    title: 'Group Lessons',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
]

const InfoBanner = () => {
  return (
    <HomeParallax style={{height: '25vh', marginBottom: '4rem'}} bgImage={main} strength={800}>
      <InfoTitle>
        <InfoTitleText>Services</InfoTitleText>
        <InfoTitleDescription>{InfoBannerContent[0].description}</InfoTitleDescription>
        <InfoTitleButton>Private Lessons | Group Lessons</InfoTitleButton>
      </InfoTitle>
    </HomeParallax>
)};

export default InfoBanner;