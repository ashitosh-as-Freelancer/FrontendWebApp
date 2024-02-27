import styled from 'styled-components';

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--white);
    padding: 13px 10px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    width: 100%;
    border: 1px solid var(--white);
    border-radius: 5px;

    &:hover {
      background-color: #fff;
      color: #000;
    }
`;

export default Button;
