import { styled } from "styled-components";

function Features({ number, title, detail, src }) {
  return (
    <div className="p-[3.6rem]">
      <p className="text-[6rem] font-[900] text-[#0dff00] iphone:text-[10rem] ">
        {number}
      </p>
      <p className="pb-[1.2rem] text-[2rem] font-[500] iphone:pb-[3.6rem] iphone:text-[4rem]">
        {title}
      </p>
      <p className="text-[#aaa]">{detail}</p>
    </div>
  );
}

export default Features;
