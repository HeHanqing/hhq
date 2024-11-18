import { styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  color: #fff;
  align-items: center;
`;

function PrimaryVision() {
  return (
    <MainContainer>
      <p className=" pt-[20rem] text-[1.8rem] font-[500] iphone:text-[3rem]">
        湖南师范大学师大之星评选总决赛主视觉设计
      </p>
      <p className="italic">
        Star of Hunan Normal University primary vision design
      </p>
      <p className="w-[70%] pt-[6rem] text-center text-[1.2rem] text-[#aaa] iphone:text-[1.6rem]">
        主视觉的设计灵感来源于湖南师范大学师大之星评选总决赛的核心概念，即青春、活力和星光。蓝色代表着青春和活力，而玫红色则象征着热情和梦想。背景的星空代表着参与评选的学生们的成就和光荣。每一颗星星代表着一个杰出的个体，他们在学术、文化或其他方面取得了杰出的成绩和表现。这些星星在背景中闪烁，象征着他们的光芒和独特性。
      </p>
      <img
        src="/image/primaryvision.png"
        alt="primaey vision"
        className="py-[8rem] iphone:px-[4.8rem]"
      />
      <p className="pt-[2.8rem] text-[1.8rem] font-[500] iphone:pt-[10rem] iphone:text-[3rem]">
        活动现场照片
      </p>
      <p className="italic">Activity site</p>
      <p className="w-[70%] pt-[3.6rem] text-center text-[1.2rem] text-[#aaa] iphone:w-[50%] iphone:text-[1.6rem]">
        活动现场的主视觉以鲜艳的蓝色和玫红色为主色调，让整个现场充满活力和热情。这些明亮的色彩吸引了人们的目光，让观众立刻感受到活动的独特氛围。
      </p>

      <img
        src="/image/primaryvision1.jpg"
        alt="activity"
        className="w-[90%] py-[3.6rem] iphone:w-[80%] iphone:py-[6rem]"
      />
      <img
        src="/image/primaryvision2.jpg"
        alt="activity"
        className="w-[90%] iphone:w-[80%]"
      />
    </MainContainer>
  );
}

export default PrimaryVision;
