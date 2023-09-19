import { css, styled } from "styled-components";
import Button from "./Button";
import { useState } from "react";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
  color: #000;
  font-size: 3.2rem;
  padding: 2.4rem 2.4rem 2.4rem 2.4rem;
  letter-spacing: 1px;
  font-style: italic;
  font-weight: 900;
`;

const P = styled.p`
  color: #fff;
`;

const Wechat = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
  display: none;

  ${(props) =>
    props.type &&
    css`
      display: block;
    `}
`;

function Nav() {
  const [isShow, setIsShow] = useState(false);

  function onClick() {
    setIsShow(!isShow);
  }
  return (
    <NavContainer>
      <Wechat type={isShow} src="../../public/image/wechat.JPG" />
      <P>HHQ</P>
      <Button onClick={onClick} />
    </NavContainer>
  );
}

export default Nav;
