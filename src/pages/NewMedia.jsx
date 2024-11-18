import { styled } from "styled-components";
import Blossom from "../ui/Blossom";

const MainContainer = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

function NewMedia() {
  return (
    <MainContainer>
      <Blossom />
    </MainContainer>
  );
}

export default NewMedia;
