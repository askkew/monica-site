import { Parallax } from 'react-parallax';
import main from './temppic.jpg';
import group from './bannerpicture2.jpg';
import { HomeParallax, HomeTitle, HomeTitleText, InfoTitle, InfoTitleButton, InfoTitleDescription, InfoTitleText, Infobuttoncontainer, Subbar } from './homestyles';
import { useState } from 'react';
import React from 'react';

const InfoBannerContent = [
  {
    title: 'Private Lessons',
    image: main,
    description: 'I am currently accepting new students for private lessons. I teach all ages and skill levels. Please contact me for more information.'
  },
  {
    title: 'Group Lessons',
    image: group,
    description: 'I am currently accepting new students for group lessons. I teach all ages and skill levels. Please contact me for more information.'
  },
]

const InfoBanner = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonChange = (index: React.SetStateAction<number>) => {
    setActiveButtonIndex(index);
  };

  const activeContent = InfoBannerContent[activeButtonIndex];
  
  return (
    <HomeParallax style={{height: '25vh', marginBottom: '4rem'}} bgImage={activeContent.image} strength={800}>
      <InfoTitle>
        {/* <InfoTitleText>Services</InfoTitleText>
        <InfoTitleDescription>{InfoBannerContent[0].description}</InfoTitleDescription>
        <Infobuttoncontainer>
          {InfoBannerContent.map((content, index) => (
            <React.Fragment key={index}>
              <InfoTitleButton
                onClick={() => handleButtonChange(index)}
                className={index === activeButtonIndex ? 'active' : ''}
              >
                {content.title}
              </InfoTitleButton>
              {index !== InfoBannerContent.length - 1 && (
                <InfoTitleText style={{ fontSize: '1.4rem' }}> | </InfoTitleText>
              )}
            </React.Fragment>
          ))}
        </Infobuttoncontainer> */}
      </InfoTitle>
    </HomeParallax>
)};

export default InfoBanner;