import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkMovie = styled(NavLink)`
  padding: 4px 8px;
  margin-left: 50px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: black;
  text-shadow: 2px 3px 12px #00ffff;
  font-weight: 600;

  &.active {
    color: #00ff0a;
    text-shadow: 2px 3px 12px #00ffff;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #90ee90;
  }
  svg {
    margin-right: 4px;
    box-shadow: 2px 3px 12px #00ffff;
  }
`;
export const MainDiv = styled.div`
  padding: 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;

  box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
    0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 110px #00ff0a;
`;

export const ImgDiv = styled.div`
  height: 100%;
  max-width: 280px;
  padding: 0 20px 20px 20px;
  border-color: inherit;

  & button {
    margin-bottom: 15px;
    border-radius: 4px;
    background-color: #00ff0a;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover:not(.active) {
      background-color: black;
      color: #00ff0a;
      border-color: #00ff0a;
      box-shadow: rgba(0, 255, 0, 0.4) -5px 5px, rgba(0, 255, 0, 0.3) -10px 10px,
        rgba(0, 255, 0, 0.2) -15px 15px, rgba(0, 255, 0, 0.1) -20px 20px,
        rgba(0, 255, 0, 0.05) -25px 25px;
    }
  }
  & img {
    height: 100%;
    max-width: 280px;
  }
`;

export const MenuDiv = styled.div`
  padding: 30px;
  color: #90ee90;
  & p {
    max-width: 800px;
  }
`;

export const LinksDiv = styled.div`
  padding: 0 60px;
  & p {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 800;
    color: black;
    text-shadow: 2px 3px 12px #00ffff;
  }
  & a {
    margin: 0;
    font-size: 30px;
    font-weight: 800;
    margin-right: 30px;
    margin-left: 10px;
  }
`;
