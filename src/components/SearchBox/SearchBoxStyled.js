import styled from 'styled-components';

export const Form = styled.form`
  margin: 0;
  padding-top: 20px;
  align-items: center;
  height: 40px;

  & input {
    width: 200px;
    font-size: 14px;
    margin-right: 8px;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);
    &:focus {
      outline: transparent;
      box-shadow: 1px 1px 16px 3px rgb(22, 243, 14);
    }
  }
  & button {
    border-radius: 4px;
    border: 1px solid transparent;
    &:hover {
      outline: transparent;
      box-shadow: 1px 1px 16px 3px rgb(22, 243, 14);
      color: rgb(22, 243, 14);
    }
  }
`;
