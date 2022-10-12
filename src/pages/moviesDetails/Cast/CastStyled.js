import styled from 'styled-components';

export const CastList = styled.ul`
  margin: 0;
  padding: 12px 30px 55px;
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;

  @media screen and (min-width: 470px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;    
  }
`;

export const ItemLi = styled.li`
  padding: 0;
  margin: 0;
  border: 1px solid #483d8b;
  padding-bottom: 13px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #483d8b;
  text-align: center;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & p {
    text-decoration: none;
    color: #b0c4de;
  }
  &:hover {
    box-shadow: rgba(0, 255, 0, 0.4) -5px 5px, rgba(0, 255, 0, 0.3) -10px 10px,
      rgba(0, 255, 0, 0.2) -15px 15px;

    transform: scale(1.05);
    border: 1px solid rgba(0, 255, 0, 1);
    cursor: pointer;
    p {
      text-decoration: none;
      color: #00ff00;
    }
  }
`;
