import styled from "styled-components";
import { useSelector } from "react-redux";
import Close from "../ui/Close";
import { useDispatch } from "react-redux";
import { miniCartStatus, removeProduct } from "../slices/basketSlice";

const StyledMiniCart = styled.div`
  box-shadow: 0 0 10px var(--white);
  position: fixed;
  width: 350px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  right: 0;
  top: 0;
  z-index: 10;
  padding: 10px;

  .cart-text {
    font-size: 35px;
    border-bottom: 1px solid var(--white);
    margin-bottom: 10px;
  }

  .item-container {
    height: 82vh;
    overflow-y: scroll;
  }

  .remove-item {
    position: absolute;
    right: 40px;
    font-size: 20px;
    cursor: pointer;
  }

  .min-item-img {
    width: 120px;
    margin-right: 15px;
  }
`;

export default function MiniCart() {
  const basket = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(miniCartStatus(false));
  };

  return (
    <StyledMiniCart>
      <Close onClick={handleClose}>X</Close>
      <div className="cart-text">Cart: {basket.cartTotal}</div>
      <div className="item-container">
        {basket.items.map((item) => {
          return (
            <div key={item.id} className="min-item d-flex mb-3">
               <div className="remove-item" onClick={()=> dispatch(removeProduct({id: item.id}))}>X</div>
              <div className="min-item-img">
                <img src={item.img.src} alt={item.img.alt} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </StyledMiniCart>
  );
}
