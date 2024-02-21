import styled from "styled-components";
import bg from "../assets/pizza1.jpg";

const StyledCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
  max-width: 95%;
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 0 1px var(--white);

  .card-heading {
    font-size: 20px;
    margin-bottom: 10px;

    @media screen and (min-width: 992px) {
      font-size: 40px;
    }
  }

  &:hover {
    .card-heading {
      text-decoration: underline;
    }
  }

  .image {
    border-radius: 10px;
  }

  .img-container {
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 992px) {
    .card-content {
      width: calc(100% - 200px);
    }

    .img-container {
      width: 200px;
    }
  }
`;

const CardHeading = styled.div``;

const Content = styled.p`
  padding: 0 20px;
  font-size: 19px;
  width: 100%;
`;

export default function BlogCard({ heading }) {
  return (
    <StyledCard>
      <div className="card-heading">{heading}</div>
      <div className="card-container">
        <div className="img-container">
          <img className="image" src={bg} alt="" />
        </div>
        <Content className="card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius rerum
          animi eveniet soluta dolore asperiores officiis quia? Odio quis illo
          eligendi distinctio amet voluptates, odit ullam, explicabo error
          cupiditate incidunt tenetur sequi molestiae ipsum at velit neque
          doloremque earum fugit. Culpa mollitia odit necessitatibus porro,
          consequuntur eos magnam id?
        </Content>
      </div>
    </StyledCard>
  );
}
