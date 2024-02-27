import productData from "../data";
import styled from "styled-components";
import ProductCard from "../components/global/ProductCard";
import Row from "../ui/Row";
import Container from "../ui/Container";
import bg from '../assets/v1.jpg';

const Pizza = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  background: url(${bg}) no-repeat;
  background-size: 100%;
`;

export default function Pizzas() {
  return (
    <Pizza>
    <Container>
      <Row>
        {productData.map((item) => {
          return (
            <ProductCard product={item} />
          );
        })}
      </Row>
    </Container>
    </Pizza>
  );
}
