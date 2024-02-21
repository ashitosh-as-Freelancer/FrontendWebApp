import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: var(--black);
    color: var(--white);
    padding: 13px 10px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    width: 100%;
    border: 1px solid var(--white);
    border-radius: 5px;
`;

export default function Button({children}) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}
