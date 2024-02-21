import styled from 'styled-components';
import BlogCard from '../components/BlogCard';
import bg from '../assets/v3.jpg';

const StyledBlog = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  background: url(${bg}) no-repeat;
  background-size: 100%;
`;

export default function Blog() {
  return (
    <StyledBlog>
      <BlogCard heading={'How to Create Pizza'}/>
      <BlogCard heading={'Blog 2'}/>
      <BlogCard heading={'Blog 3'}/>
      <BlogCard heading={'Blog 4'}/>
      <BlogCard heading={'Blog 5'}/>
    </StyledBlog>
  )
}
