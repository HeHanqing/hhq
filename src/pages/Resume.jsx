import { Container } from "postcss";
import { styled } from "styled-components";
import { BsFillEmojiSmileFill, BsPaletteFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { BiLogoBlender, BiLogoFigma } from "react-icons/bi";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  padding: 10rem 0;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ddd;
  font-size: 1.8rem;
  font-weight: 500;
  gap: 1rem;
  letter-spacing: 1px;
  border: #0dff00 2px solid;
  padding: 3.6rem 36rem;

  & strong {
    font-size: 3.6rem;
    color: #0dff00;
  }

  & span {
    color: #0dff00;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;

  & a {
    margin: 3.6rem 0;
    color: #0dff00;
    border-bottom: #0dff00 1px solid;
  }
  & p {
    color: #0dff00;
    /* margin-top: 3.6rem; */
    font-size: 2rem;
  }
`;

const Span = styled.span`
  font-style: italic;
  color: #0dff00;
`;

const H3 = styled.h3`
  font-size: 3.6rem;
  font-weight: 900;
  color: #0dff00;
`;

const Courses = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20rem);
  grid-template-rows: repeat(2, 5rem);
  grid-row-gap: 2.4rem;
  grid-column-gap: 5rem;
  border: #0dff00 2px solid;
  justify-items: center;
  align-items: center;
  margin-top: 3.6rem;
  padding: 2.4rem;

  & p {
    font-size: 1.8rem;
    color: #ddd;
    margin: 0;
  }
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
  color: #ddd;
`;

const ExperienceContainer = styled.div`
  display: flex;
  margin-top: 8rem;
  gap: 20rem;

  & svg {
    width: 4.8rem;
    height: 4.8rem;
    margin-bottom: 2.4rem;
  }
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Award = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
  color: #ddd;

  & p {
    margin-top: 1.8rem;
    font-size: 2rem;
  }

  & strong {
    color: #0dff00;
  }

  :nth-child(3) {
    margin-top: 6.2rem;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
  color: #ddd;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20rem);
  grid-template-rows: repeat(2, 4rem);
  row-gap: 4rem;
  margin-top: 8rem;
  justify-items: center;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & svg {
    width: 4rem;
    height: 4rem;
  }
`;
function Resume() {
  return (
    <MainContainer>
      <Introduce>
        <p>
          <strong>Hi</strong>,欢迎来的我的个人网页
        </p>
        <p>
          <span>我叫贺汉清，是湖南师范大学美术学院大四的学生</span>
        </p>
        <p>
          做这个网页只要是为了更好的展示<span>我的作品</span>以及
          <span>我的能力！</span>
        </p>
      </Introduce>
      <Education>
        <H3>教育背景</H3>
        <Span>Educational background</Span>
        <a href="https://msxy.hunnu.edu.cn/">
          就读于湖南师范大学美术学院艺术设计学专业
        </a>
        <p>主修课程</p>
        <Courses>
          <p>立体构成</p>
          <p>平面构成</p>
          <p>品牌/IP设计</p>
          <p>UI设计</p>
          <p>新媒体艺术</p>
          <p>书籍设计</p>
          <p>字体设计</p>
          <p>包装设计</p>
        </Courses>
      </Education>
      <Experience>
        <H3>校园经历</H3>
        <Span>Educational experience</Span>
        <ExperienceContainer>
          <ExperienceItem>
            <BsPaletteFill />
            <p>参与了学校推出的省级</p>
            <p>课题项目“为你读诗”的</p>
            <p>插画设计</p>
          </ExperienceItem>
          <ExperienceItem>
            <MdDesignServices />
            <p>参与了学校每年举行一</p>
            <p>次的大型活动“师大之星</p>
            <p>的主视觉设计</p>
          </ExperienceItem>
          <ExperienceItem>
            <BsFillEmojiSmileFill />
            <p>担任班级班长职务，并</p>
            <p>且积极协助老师完成班</p>
            <p>级各项事物</p>
          </ExperienceItem>
        </ExperienceContainer>
      </Experience>
      <Award>
        <H3>在校期间获奖经历</H3>
        <Span>Award-winning experience</Span>
        <p>
          荣获2022年米兰设计周-中国高校设计学科师生优秀作品展
          <strong>全国三等奖</strong>
        </p>
        <p>
          荣获2023年米兰设计周-中国高校设计学科师生优秀作品展
          <strong>全国二等奖</strong>
        </p>
        <p>
          荣获2023年中国好创意暨全国数字艺术大赛<strong>全国赛道二等奖</strong>
        </p>
        <p>
          荣获2023年未来设计师-全国高校数字艺术设计大赛
          <strong>湖南省赛道三等奖</strong>
        </p>
      </Award>
      <Skill>
        <H3>我的技能</H3>
        <Span>My skills</Span>
        <SkillsContainer>
          <SkillItem>
            <SiAdobephotoshop />
            <p>Photoshop</p>
          </SkillItem>
          <SkillItem>
            <SiAdobeillustrator />
            <p>Illustrator</p>
          </SkillItem>

          <SkillItem>
            <BiLogoFigma />
            <p>Figma</p>
          </SkillItem>
          <SkillItem>
            <SiAdobepremierepro />
            <p>Premierepro</p>
          </SkillItem>

          <SkillItem>
            <SiHtml5 />
            <p>Html5</p>
          </SkillItem>
          <SkillItem>
            <SiCss3 />
            <p>Css3</p>
          </SkillItem>
          <SkillItem>
            <SiJavascript />
            <p>Javascript</p>
          </SkillItem>
          <SkillItem>
            <SiReact />
            <p>React</p>
          </SkillItem>

          <SkillItem>
            <SiAdobexd />
            <p>XD</p>
          </SkillItem>
          <SkillItem>
            <BiLogoBlender />
            <p>Blender</p>
          </SkillItem>
        </SkillsContainer>
      </Skill>
    </MainContainer>
  );
}

export default Resume;
