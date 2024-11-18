import { styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30rem;
  background-color: #222;
  color: #fff;
  align-items: center;

  @media (max-width: 500px) {
    padding-top: 18rem;
  }
`;

function IP() {
  return (
    <MainContainer>
      <p className=" text-[1.8rem] font-[500] iphone:text-[3rem]">
        南平市正荣小学IP设计方案
      </p>
      <p className="italic">ZhenRong school IP design</p>
      <p className="w-[70%] pt-[4.8rem] text-center text-[1.2rem] text-[#aaa] iphone:text-[1.6rem]">
        本组ip形象设计的灵感来源于南平市的市花——百合，每朵百合都拥有六片花瓣，刚好每一片花瓣可以赋予我们六正精神的概念，百合色彩干净芬芳，积极向上又平易近人。通过对百合花的采样变形设计，融入六正精神的特点，设计出本组ip形象。
      </p>
      <div className="w-[90%] pb-[4.8rem] pt-[8rem] iphone:w-[70%]">
        <img src="/image/ip1.jpg" alt="ip1" />
        <img src="/image/ip2.jpg" alt="ip2" />
        <img src="/image/ip3.jpg" alt="ip3" />
        <img src="/image/ip4.jpg" alt="ip4" />
        <img src="/image/ip5.jpg" alt="ip5" />
      </div>
    </MainContainer>
  );
}

export default IP;
