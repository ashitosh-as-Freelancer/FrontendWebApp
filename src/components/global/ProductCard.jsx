import styled from "styled-components";
import Button from "../../ui/Button";
import { addCart } from "../../slices/basketSlice";
import { useDispatch } from 'react-redux';

const StyledCard = styled.div`
  width: 50%;
  position: relative;
  padding: 0 8px 10px;

  .pr {
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 8px #fff;
  }

  .pr-content {
    padding: 10px;
  }
  
  .heading {
    font-size: 23px;
  }

  .link {
    font-size: 18px;
    cursor: pointer;
  }

  @media screen and (min-width: 992px) {
    width: 20%;
  }
`;

export default function ProductCard({ product }) {
  const {id, img, name, price } = product;
  const dispatch = useDispatch()

  const handleAddToBag =(id)=> {
    dispatch(addCart({id: id}));
  }

  return (
    <StyledCard>
      <div className="pr">
        <div>
          <img src={img.src} alt={img.alt} />
        </div>
        <div className="pr-content">
          <div className="heading mb-2">{`$` + price}</div>
          <div className="link mb-3">{name}</div>
          <Button className="w-100" onClick={()=> {handleAddToBag(id)}}>Add To Bag</Button>
        </div>
      </div>
    </StyledCard>
  );
}

