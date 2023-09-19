import { styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
`;

const Cats = styled.img`
  margin-top: 15rem;
  width: 100rem;
`;

const Text = styled.img`
  width: 60rem;
`;

const EffectText = styled.img`
  width: 30rem;
  margin-top: 15rem;
  margin-bottom: 2.4rem;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 4.8rem;
`;

const ElseEffect = styled.div`
  display: flex;
  gap: 10rem;
  margin-top: 2.4rem;

  & img {
    width: 60rem;
  }
`;

const Ending = styled.img`
  padding: 10rem 0;
`;

function Cat() {
  return (
    <MainContainer>
      <Cats src="../../public/image/cats.png" alt="cats" />
      <Text src="public/text.svg" alt="logo" />
      <EffectText src="public/effect.svg" alt="calendar effect display" />
      <Calendar>
        <img src="../../public/image/calendar/january.png" alt="cat" />
        <img src="../../public/image/calendar/february.png" alt="cat" />
        <img src="../../public/image/calendar/march.png" alt="cat" />
        <img src="../../public/image/calendar/april.png" alt="cat" />
        <img src="../../public/image/calendar/may.png" alt="cat" />
        <img src="../../public/image/calendar/june.png" alt="cat" />
        <img src="../../public/image/calendar/july.png" alt="cat" />
        <img src="../../public/image/calendar/august.png" alt="cat" />
        <img src="../../public/image/calendar/september.png" alt="cat" />
        <img src="../../public/image/calendar/october.png" alt="cat" />
        <img src="../../public/image/calendar/november.png" alt="cat" />
        <img src="../../public/image/calendar/december.png" alt="cat" />
      </Calendar>
      <ElseEffect>
        <img src="../../public/image/calendar.png" alt="calendar" />
        <img src="../../public/image/redpacket.png" alt="red packet" />
      </ElseEffect>
      <Ending src="public/ending.svg" alt="ending" />
    </MainContainer>
  );
}

export default Cat;
