import styled from 'styled-components';

export const Tittle = styled.p`
  padding: 0 30px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 2px 3px 12px #00ffff;
`;

export const ReviewsDiv = styled.div`
  color: #90ee90;
  padding: 0 70px;
  & h3 {
    padding-left: 20px;
  }
  & p {
    border: 1px solid #90ee90;
    border-radius: 8px;
    margin-bottom: 30px;
    padding: 10px;
  }
  & span {
    font-size: 20px;
    font-weight: 800;
  }
`;
