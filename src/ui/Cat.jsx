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

  @media (max-width: 500px) {
    margin-top: 6rem;
  }
`;

const Text = styled.img`
  width: 60rem;
`;

const EffectText = styled.img`
  width: 30rem;
  margin-top: 15rem;
  margin-bottom: 2.4rem;

  @media (max-width: 500px) {
    margin-top: 6rem;
    width: 50%;
  }
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 4.8rem;

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

const ElseEffect = styled.div`
  display: flex;
  gap: 10rem;
  margin-top: 2.4rem;
  @media (max-width: 500px) {
    gap: 4rem;
  }
  @media (max-width: 450px) {
    gap: 2rem;
  }

  & img {
    width: 60rem;
    @media (max-width: 1350px) {
      width: 50rem;
    }
    @media (max-width: 1150px) {
      width: 40rem;
    }
    @media (max-width: 950px) {
      width: 35rem;
    }
    @media (max-width: 850px) {
      width: 30rem;
    }
    @media (max-width: 500px) {
      width: 20rem;
    }
    @media (max-width: 450px) {
      width: 17rem;
    }
    @media (max-width: 380px) {
      width: 15rem;
    }
    @media (max-width: 350px) {
      width: 12rem;
    }
  }
`;

const Ending = styled.img`
  padding: 10rem 0;
  @media (max-width: 500px) {
    padding: 6rem 0;
  }
`;

function Cat() {
  return (
    <MainContainer>
      <Cats src="/image/catsLow.png" alt="cats" />
      <Text src="/image/text.png" alt="logo" />
      <EffectText src="/image/effect.png" alt="calendar effect display" />
      <Calendar>
        <img src="/image/january.png" alt="cat" />
        <img src="/image/february.png" alt="cat" />
        <img src="/image/march.png" alt="cat" />
        <img src="/image/april.png" alt="cat" />
        <img src="/image/may.png" alt="cat" />
        <img src="/image/june.png" alt="cat" />
        <img src="/image/july.png" alt="cat" />
        <img src="/image/august.png" alt="cat" />
        <img src="/image/september.png" alt="cat" />
        <img src="/image/october.png" alt="cat" />
        <img src="/image/november.png" alt="cat" />
        <img src="/image/december.png" alt="cat" />
      </Calendar>
      <ElseEffect>
        <img src="/image/calendar.png" alt="calendar" />
        <img src="/image/redpacket.png" alt="red packet" />
      </ElseEffect>
      <Ending src="/image/ending.png" alt="ending" />
    </MainContainer>
  );
}

export default Cat;
