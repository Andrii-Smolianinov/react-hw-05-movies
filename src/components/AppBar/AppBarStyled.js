import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;

  box-shadow: 0px 3px 5px #778899;
  height: 35px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`  
  display: inline-flex;
  padding: 4px 8px;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  color: black;
  font-weight: 500;
  :nth-child(1) {
    margin-right: 55px;
  }

  &.active {
    color: #800080;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #90ee90;
  }

  svg {
    margin-right: 4px;
  }
`;
