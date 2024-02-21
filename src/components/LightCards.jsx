import styled from "styled-components";
import bg from "../assets/pizza1.jpg";

const StyledCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
  box-shadow: 0 0 1px var(--white);
  width: 95%;
  margin: auto;
  margin-bottom: 30px;

  .image {
    border-radius: 10px;
  }

  .img-container {
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .card-content {
    font-size: 19px;
    width: 100%;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 992px) {
    .card-content {
      width: 70%;
      padding: 0 20px;
    }

    .img-container {
      width: 30%;
    }
  }
`;

const CardHeading = styled.div`
  font-size: 40px;
  text-align: center;
`;

export default function LightCards({ heading }) {
  return (
    <StyledCard>
      <CardHeading>{heading}</CardHeading>
      <div className="card-container">
        <div className="img-container">
          <img className="image" src={bg} alt="" />
        </div>
        <p className="card-content text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quo vel
          repellendus laudantium totam. Nobis esse quas laborum ullam molestias
          debitis nemo culpa odit fuga. Voluptatibus autem quasi modi quidem at
          excepturi ab minima rem qui ullam eos, iure officia architecto alias
          enim quam possimus deleniti temporibus earum vel quibusdam quaerat. A
          nemo fuga delectus labore quia placeat quidem incidunt voluptates quos
          accusantium culpa ex ipsum doloremque assumenda itaque nesciunt, dolor
          quae obcaecati excepturi praesentium ad! Fugiat voluptas quibusdam
          quos quam, optio velit a facilis cumque totam eius sapiente error
          illum repudiandae ipsam. Esse, fugiat et! Molestias, eum quia
          similique quas quam ratione harum asperiores, sint nulla quae, ea
          itaque possimus hic! Fuga voluptates deserunt nisi, doloremque
          delectus similique consequuntur. Similique repudiandae molestias, enim
          ab dolor optio a dignissimos quia, quidem, eaque iusto ullam vitae
          illo omnis tempora atque
        </p>
      </div>
    </StyledCard>
  );
}
