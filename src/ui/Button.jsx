import styled from 'styled-components';
import bg from '/pizza-2.jpg';

const Button = styled.button`
    background: url(${bg}) 10%;
    color: var(--white);
    padding: 13px 10px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    border-radius: 5px;

    &:hover {
      box-shadow: 0 0 3px var(--black);
    }
`;

export default Button;
