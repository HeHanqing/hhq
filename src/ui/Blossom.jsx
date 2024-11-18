function Blossom() {
  return (
    <div className="flex flex-col items-center pt-[10rem] iphone:pt-[15rem]">
      <p className="text-[1.8rem] font-[500] iphone:text-[3rem]">繁花</p>
      <p className="pb-[3.6rem] italic">Blossom</p>
      <p className="iphone:w-[70%] w-[80%] pb-[4.8rem] text-center text-[1.2rem] text-[#aaa] iphone:pb-[8rem] iphone:text-[1.6rem]">
        “繁花”是一件可交互墙绘装置，这件作品主要是通过touchdesigner的粒子效果来实现的。我们概念的主要来源是粒子之间的共振现象，同时作品也想表现一种能量的聚集。这件交互装置是通过投影技术将粒子的多种视觉化效果呈现在墙面上，并通过雷达设备捕捉玩家的手部信息，这种方式比使用显示器触屏更加的灵活，可以在任意的墙面上面互动。当玩家将手触摸到墙面上时，触摸的位置会形成一个粒子的聚集点，当手离开时，聚集的能量会瞬间的散开。作品主要想表达在当下繁华的世界中，要寻找到自我，不断的汇聚自己的能量，等到需要使用时便可以释放出巨大的能量。
      </p>
      <video controls width="90%" className="block pb-[8rem]">
        <source src="/image/blossomVideo.mp4" type="video/mp4" />
      </video>
      <img
        src="/image/blossom.jpg"
        alt="blossom display"
        className="pb-[2.4rem]"
      />
    </div>
  );
}

export default Blossom;
