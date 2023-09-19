import { styled } from "styled-components";

const Container = styled.button`
  border: none;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  padding: 1rem 2.4rem;
  border-radius: 24px;
  background-color: #fff;
  opacity: 100%;
  color: #000;

  &:hover,
  &:active {
    background-color: #0dff00;
    color: #000;
  }
`;

function Button({ onClick }) {
  return <Container onClick={onClick}>contact me</Container>;
}

export default Button;
