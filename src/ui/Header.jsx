import { css, styled } from "styled-components";
import Nav from "./Nav";

import Button from "./Button";
import { useState } from "react";

const BackgroundImage = styled.div`
  background-color: #222;
  background-image: url(../../public/image/head.JPG);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

// const Background = styled.div`
//   background-color: #444;
//   height: 100vh;
//   opacity: 50%;
// `;
const Main = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 16rem;
`;
const H1 = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  font-style: italic;
  color: #0dff00;
`;

const A = styled.a`
  font-size: 2rem;
  color: #0dff00;
  text-decoration: underline;
  margin-bottom: 3.6rem;
`;

// const WechatCaontainer = styled.div`
//   background-color: rgba(34, 34, 34, 0.4);
//   position: absolute;
//   left: 50%;
//   top: 20%;
//   transform: translateX(-50%);
// `;

function Header() {
  return (
    <header>
      <BackgroundImage>
        <Nav />
        <Main>
          <H1>He Han qing</H1>
          <A href="mailto:he871026514@icloud.com">he871026514@icloud.com</A>
        </Main>
      </BackgroundImage>
    </header>
  );
}

export default Header;
