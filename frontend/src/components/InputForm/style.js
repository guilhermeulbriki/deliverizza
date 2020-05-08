import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: 60px;
  border: 2px solid #E0E0E0;
  padding-left: 10px;
  border-radius: 10px;
  margin-bottom: 26px;
  background: #E0E0E0;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #ff354e;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff354e;
    `}

  display: flex;
  align-items: center;

  svg {
    color: #585858;
    margin-right: 7px;

    ${(props) =>
      props.isFilled &&
      css`
        color: #ff354e;
      `}

    ${(props) =>
      props.isFocused &&
      css`
        color: #ff354e;
      `}
  }

  input {
    background: transparent;
    border: 0;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
      color: #585858;
      font-weight: 400;
    }
  }
`;
