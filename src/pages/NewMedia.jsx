import { styled } from "styled-components";

const MainContainer = styled.div`
  background-color: #222;
  display: flex;
  justify-content: center;
  color: #0dff00;
  padding: 20rem 0;
  font-size: 7rem;
`;

function NewMedia() {
  return <MainContainer>敬请期待</MainContainer>;
}

export default NewMedia;
