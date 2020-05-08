import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 540px;
    height: 390px;
    margin-top: 10vh;
    border: 3px solid #1A1B25;
    border-radius: 15px;
    background-color: rgba(26, 27, 37, 0.7);
    overflow: hidden;
    }

    button {
      width: 340px;
      height: 60px;
      border: 0;
      border-radius: 10px;
      margin-bottom: 26px;
      background: #ff354e;
      color: #F5F5F5;
      font-size: 22px;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff354e')};
      }
    }

    a {
      color: #F5F5F5;
      text-decoration: none;
      transition: color 0.2s;
      font-size: 18px;
      
      &:hover {
        color: ${shade(0.2, '#F5F5F5')};
      }

      & + a {
        margin-top: 15px;
        font-size: 22px;
      }
    }
  }
`;