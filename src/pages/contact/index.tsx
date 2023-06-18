import React from 'react'
import { Contactbutton, Contactcard, Contactcontainer, Contacttitle, Emailbox, Emailfield, LeftSide, Namefield, Names, RectangleContainer, RightSide, StyledFormControl } from './contactstyles'
import { Button, TextField } from '@mui/material'
import Leg from '../../components/leg'

export const ContactForm = () => {
  return (
    <StyledFormControl>
      <Namefield id="outlined-basic" label="Full Name" variant="outlined"/>
      <Emailfield id="outlined-basic" label="Email" variant="outlined" />
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={10}
          style={{width: '100%'}}
        />
      <Contactbutton variant="outlined">Send</Contactbutton>
    </StyledFormControl>
  )
}

const Contact = () => {
  return (
    <Contactcontainer>
      <RectangleContainer>
        <LeftSide>
          <Contacttitle>Email me</Contacttitle>
          <ContactForm />
        </LeftSide>
        <RightSide>
          <Contacttitle>Contact information</Contacttitle>
        </RightSide>
      </RectangleContainer>
      {/* <Contactcard>
        <Emailbox>
          <Contacttitle>Email me</Contacttitle>
          <ContactForm />
        </Emailbox>
        <Emailbox>
          <Contacttitle>Contact information</Contacttitle>
        </Emailbox>
      </Contactcard> */}
      <Leg />
    </Contactcontainer>
  )
}

export default Contact

// <!-- HTML !-->
// <button class="button-48" role="button"><span class="text">Button 48</span></button>

// /* CSS */
// .button-48 {
//   appearance: none;
//   background-color: #FFFFFF;
//   border-width: 0;
//   box-sizing: border-box;
//   color: #000000;
//   cursor: pointer;
//   display: inline-block;
//   font-family: Clarkson,Helvetica,sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: 1em;
//   margin: 0;
//   opacity: 1;
//   outline: 0;
//   padding: 1.5em 2.2em;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   text-rendering: geometricprecision;
//   text-transform: uppercase;
//   transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: baseline;
//   white-space: nowrap;
// }

// .button-48:before {
//   animation: opacityFallbackOut .5s step-end forwards;
//   backface-visibility: hidden;
//   background-color: #EBEBEB;
//   clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
//   content: "";
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   transform: translateZ(0);
//   transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
//   width: 100%;
// }

// .button-48:hover:before {
//   animation: opacityFallbackIn 0s step-start forwards;
//   clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
// }

// .button-48:after {
//   background-color: #FFFFFF;
// }

// .button-48 span {
//   z-index: 1;
//   position: relative;
// }