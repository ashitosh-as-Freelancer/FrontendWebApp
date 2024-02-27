import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--black);

  img {
    width: 100%;
  }

  .blur {
    position: absolute;
    background-color: var(--black);
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }

  .content {
    position: absolute;
    top: 25%;
    z-index: 1;
    padding: 20px;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 21px;
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    @media screen and (min-width: 992px) {
      max-width: 50%;

      h2 {
        font-size: 50px;
      }
    }
  }
`;

export default function Banner({ img, heading, desc, contentType }) {
  return (
    <StyledBanner>
      <div className="blur"></div>
      <picture className="d-flex">
        <source media="(min-width:992px)" srcset={img.desk} />
        <img src={img.mobile} alt="banner" />
      </picture>
      <div className={`content ${contentType}`}>
        <h2>{heading}</h2>
        <p>{desc}</p>
      </div>
    </StyledBanner>
  );
}
