import styled from 'styled-components';

export const MovieUl = styled.ul`
  margin: 0;
  padding: 0px 30px 15px;
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr;
  list-style: none;

  @media screen and (min-width: 470px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const MovieItem = styled.li`
  padding: 0;
  margin: 0;
  border: 1px solid #4b0082;
  padding-bottom: 13px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #4b0082;
  text-align: center;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: rgba(0, 255, 0, 0.4) -5px 5px, rgba(0, 255, 0, 0.3) -10px 10px,
      rgba(0, 255, 0, 0.2) -15px 15px, rgba(0, 255, 0, 0.1) -20px 20px,
      rgba(0, 255, 0, 0.05) -25px 25px;

    transform: scale(1.05);
    border: 1px solid rgba(0, 255, 0, 1);
    cursor: pointer;
  }

  & a {
    text-decoration: none;
    color: #b0c4de;
    &:hover {
      color: #00ff00;
    }
  }

  & img {
    width: 100%;
    max-height: 380px;
    object-fit: cover;
  }
`;
export const TittleDiv = styled.div`
  padding: 10px 0;
  align-items: center;
  text-align: center;

  & p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
