import { styled } from "styled-components";

const MainCaontainer = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36rem;
  color: #fff;

  @media (max-width: 400px) {
    padding-top: 5rem;
  }
  @media (max-width: 500px) {
    padding-top: 20rem;
  }

  & p {
    font-size: 3rem;
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
  }
  & span {
    font-style: italic;

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  & img {
    padding: 4.8rem 0 15rem 0;
    width: 80%;

    @media (max-width: 500px) {
      padding: 4.8rem 0 4rem 0;
      width: 90%;
    }
  }
`;

const Cups = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding-top: 2.4rem;

  @media (max-width: 500px) {
    padding-top: 0;

    & img {
      padding: 2.4rem 0;
    }
  }
`;

function Logo1() {
  return (
    <MainCaontainer>
      <p>碣滩茶品牌标志设计</p>
      <span>Brand design</span>
      <img src="/image/logo.png" alt="logo design" />
      <p>碣滩茶品牌衍生品</p>
      <span>Derivative design</span>
      <Cups>
        <img src="/image/cup.png" alt="cup" />
        <img src="/image/papercup.png" alt="cup" />
      </Cups>
    </MainCaontainer>
  );
}

export default Logo1;
