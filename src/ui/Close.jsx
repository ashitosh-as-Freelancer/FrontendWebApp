import styled from 'styled-components'; 

const StyledClose = styled.div`
  position: absolute;
  color: var(--white);
  right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default function Close({onClick, children}) {
  return (
    <StyledClose onClick={onClick}>
        {children}
    </StyledClose>
  )
}
