import { styled } from "styled-components";
import Features from "./Features";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding-top: 20rem;

  @media (max-width: 500px) {
    padding-top: 12rem;
  }
`;
const ArtifyImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    /* padding-bottom: 2.4rem; */
    margin-bottom: 2.4rem;
    &:nth-child(3) {
      grid-row: 4;
    }
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%; /* 伪元素宽度与容器相同 */
    height: 60%; /* 伪元素高度与容器相同 */
    padding-bottom: 60%;
    border-radius: 50%;
    background-color: #444; /* 设置白色背景 */
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45%; /* 伪元素宽度与容器相同 */
    height: 45%; /* 伪元素高度与容器相同 */
    padding-bottom: 45%;
    border-radius: 50%;
    background-color: #666; /* 设置白色背景 */
    z-index: 3;
  }
`;

function Artify() {
  return (
    <MainContainer className="text-[1.2rem] iphone:text-[1.6rem]">
      <h3 className="text-[1.8rem] font-[500] iphone:text-[3rem]">
        Artify艺术馆APP设计
      </h3>
      <p className="pb-[3rem] italic iphone:pb-[4.8rem]">Artify APP design</p>
      <p className="iphine:w-[80%] w-[70%] pb-[3rem] text-center  text-[#aaa] iphone:pb-[8rem]">
        大众的看展需求日益增加，国内相关的APP却很少，于是我做了一款简洁好用又富有艺术性的看展APP——Artify艺术生活。以艺术行业人员、艺术专业学生、艺术爱好者为目标人群，进行了大量的调研与分析，包括竞品分析、痛点分析、需求分析以及线上和线下的问卷调研分析等。根据用户的需求与痛点，以“一站式收录展览信息与攻略，便捷的线上购票、简洁明快的艺术风格、充满仪式感的票夹与收藏、可以互动的艺术家、附近的人看展组队”为亮点，精准设计了这款APP。相信这款APP可以在方便人们观看展览和获取艺术知识的同时提高人们的使用体验，最终创造一个用户分享社区与社交平台，吸引艺术家和艺术爱好者入驻，让人们有归属感。Artify！艺术化我们的生活！
      </p>
      <video controls width="90%" className="block iphone:pb-[8rem]">
        <source src="/image/Atrify.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-1 grid-rows-6 items-center iphone:grid-cols-2 iphone:grid-rows-3 iphone:gap-x-[10rem] iphone:gap-y-[10rem] iphone:p-[10rem]">
        <Features
          number={"01"}
          title={"丰富的展览信息和购票信息"}
          detail={
            "你可以在我们的APP中轻松浏览最新和即将到来的展览，探索不同主题和风格的艺术品，以及各种文化活动和表演。同时，我们的购票服务也能让你迅速、便捷地购买展览门票"
          }
        />
        <ArtifyImg>
          <img src="/image/Artify2.png" alt="Artify" className="z-10 w-[35%]" />
        </ArtifyImg>
        <ArtifyImg>
          <img src="/image/Artify1.png" alt="Artify" className="z-10 w-[35%]" />
        </ArtifyImg>
        <Features
          number={"02"}
          title={"美术家与美术馆的介绍"}
          detail={
            "我们为每一位艺术家都准备了详细的介绍，让你更好地了解和欣赏他们的艺术作品。我们也提供了美术馆的详细信息和介绍，让你了解美术馆的历史、建筑和展览策划方案"
          }
        />
        <Features
          number={"03"}
          title={"记录你的观展历史和回忆"}
          detail={
            "通过票夹功能，你可以轻松管理你看过的展览票据，记录你的观展历史和经历，让你随时回顾你的观展经历。在已收藏的展览页面，你可以方便地查看和管理你喜欢的展览信息，包括艺术家信息、展览时间、地点和门票等信息。"
          }
        />
        <ArtifyImg>
          <img src="/image/Artify3.png" alt="Artify" className="z-10 w-[35%]" />
        </ArtifyImg>
      </div>
    </MainContainer>
  );
}

export default Artify;
