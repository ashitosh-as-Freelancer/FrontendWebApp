import styled from 'styled-components'
import LightCards from '../components/LightCards';
import bg from '../assets/v2.jpg';

const StyledAbout = styled.div`
  position: relative;
`;

const AboutContent = styled.div`
    background: url(${bg});
    padding: 80px 0 40px;
`;

export default function About() {
  return (
    <StyledAbout>
      <AboutContent>
      <LightCards heading="About Us"/>
      <LightCards heading="Our Mission"/>
      <LightCards heading="Our Story"/>
      <LightCards heading="Work"/>
      <LightCards heading="Achievements"/>
      </AboutContent>
    </StyledAbout>
  )
}
