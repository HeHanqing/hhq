import { styled } from "styled-components";

const MainContainer = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15rem;
  color: #fff;

  @media (max-width: 500px) {
    padding-top: 10rem;
  }
`;

function Product() {
  return (
    <MainContainer>
      <p className="text-[1.8rem] font-[500] iphone:text-[3rem]">噪音防御者</p>
      <p className="pb-[3.6rem] italic">Ocean noise defender</p>
      <p className="w-[80%] pb-[4.8rem] text-center text-[1.2rem] text-[#aaa] iphone:w-[70%] iphone:pb-[8rem] iphone:text-[1.6rem]">
        本设计是针对海上风力发电机安装过程中发出噪音的降噪的方案设计。
        根据NRDC调研，噪声会使海洋动物改变生活规律、导致暂时性听觉缺失或灵敏度减弱、导致鱼鳔破裂，除了鱼鳔外，肝、脾、肾等内部器官也容易受损，造成海洋生物大量死亡。本设计在打桩的过程中将其投入，通过太阳能发电为空气压缩机提供动力，将气体输入下方的气泡孔。气泡包围柱子形成气泡幕，可以有效的隔绝噪音的传播。安装完成后可以弹出底部气囊和中间滑轮辅助回收，进行下一个安装作业。降噪的同时可以水质检测，进行无害化作业。
      </p>
      <img
        src="/image/ocean.jpg"
        alt="ocean noise defender"
        className="pb-[12rem]"
      />

      <p className="text-[1.8rem] font-[500] iphone:text-[2.4rem]">中文排版</p>
      <p className=" italic">Chinese version</p>
      <div className="grid-cols-2 gap-x-[3.6rem] p-[2.4rem] iphone:grid iphone:p-[4.8rem]">
        <img src="/image/ocean1.jpg" alt="ocean noise defender" className="" />
        <img src="/image/ocean2.jpg" alt="ocean noise defender" className="" />
      </div>
    </MainContainer>
  );
}

export default Product;
