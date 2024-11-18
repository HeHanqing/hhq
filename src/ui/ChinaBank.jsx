import { styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  color: #fff;
`;

function ChinaBank() {
  return (
    <MainContainer>
      <p className="pt-[20rem] text-[1.8rem] font-[500] iphone:pt-[30rem] iphone:text-[3rem]">
        在长沙，就用数字人民币
      </p>
      <p className="pb-[4.8rem] italic">
        In Changsha,they use digital Renminbi
      </p>
      <p className="w-[70%] pb-[4.8rem] text-center text-[1.2rem] text-[#aaa] iphone:pb-[8rem] iphone:text-[1.6rem]">
        本组海报结合了数字人民币logo和长沙的特色景点建筑以及美食文化，以插画的表现形式分别将这些景点建筑和美食文化组合成为数字人民币的logo形状，体现出“数字人民币中的长沙”，同时用一些小的数字人民币logo分散在景点建筑当中，表现出“数字人民币在长沙”，两组插画分别以盾牌和箭头为底，表现出数字人民币安全稳重、方便快捷以及速度提升的产品特点。
      </p>
      <div className="flex flex-col content-center px-[4.8rem] iphone:flex-row iphone:justify-between">
        <img
          src="/image/digitalRenminbi.jpg"
          alt="digital Renminbi posta"
          className=" pb-[3.6rem] iphone:w-[50%] iphone:pb-[0]"
        />
        <img
          src="/image/digitalRenminbi2.jpg"
          alt="digital Renminbi posta"
          className=" iphone:w-[50%]"
        />
      </div>
      <img
        src="/image/digitalRenminbi3.jpg"
        alt="digital Renminbi"
        className="w-[90%] pt-[6rem]"
      />
    </MainContainer>
  );
}

export default ChinaBank;
