import styled from 'styled-components';

export const NoFoundDiv = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 250px;
  
  padding-bottom: 13px;
  border-radius: 8px;
  overflow: hidden;
  
  text-align: center;

  background-image: 
    url(images/background.jpg);

  & p {
    text-decoration: none;
    font-size: 30px;
    font-weight: 800;
    color: black;
    text-shadow: 2px 3px 12px #00ffff;
  }
 

`;
