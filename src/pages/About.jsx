import styled from 'styled-components'
import LightCards from '../components/LightCards';
import bg from '/v2.jpg';

const StyledAbout = styled.div`
  position: relative;
  background: url(${bg});
  padding: 80px 0 40px;
`;


export default function About() {
  return (
    <StyledAbout>
      <LightCards heading="About Us"/>
      <LightCards heading="Our Mission"/>
      <LightCards heading="Our Story"/>
      <LightCards heading="Work"/>
      <LightCards heading="Achievements"/>
    </StyledAbout>
  )
}
