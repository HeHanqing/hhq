import { styled } from "styled-components";

const MainContainer = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding-top: 10rem;
  @media (max-width: 500px) {
    padding-top: 6rem;
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
    margin-bottom: 6rem;

    @media (max-width: 500px) {
      margin-bottom: 3rem;
      font-size: 1.2rem;
    }
  }
`;

function Logo2() {
  return (
    <MainContainer>
      <p>方案二</p>
      <span>Option two</span>
      <img
        src="/image/logo2.png"
        alt="logo"
        className="pb-[6rem] iphone:pb-[15rem]"
      />
      <p>设计思路</p>
      <span>Design idea</span>
      <img
        src="/image/teaideal.png"
        alt="design ideal"
        className="w-4/5 pb-[6rem] iphone:pb-[8rem]"
      />
      <p>标准色应用</p>
      <span>Brand standard color</span>
      <div className="grid grid-cols-2 gap-x-[3rem] px-[2rem] pb-[4rem] iphone:gap-x-[6rem] iphone:px-[4rem] iphone:pb-[8rem]">
        <img src="/image/logobrown.png" alt="logo-grown color" />
        <img src="/image/logogreen.png" alt="logo-green color" />
      </div>
      <img
        src="/image/logo3.png"
        alt="logo"
        className="pb-[4rem] iphone:pb-[10rem]"
      />
    </MainContainer>
  );
}

export default Logo2;
