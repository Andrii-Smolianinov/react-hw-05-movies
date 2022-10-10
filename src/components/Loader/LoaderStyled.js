import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoaderDiv = styled.div`
  width: 75px;
  height: 75px;
  border: 10px solid #4b0082;
  border-radius: 50%;
  border-left: 50%;
  border-left-color: #00ff00;
  animation: loader 0.5s linear infinite;
  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
`;