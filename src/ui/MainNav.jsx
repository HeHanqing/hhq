import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavList = styled.ul`
  display: flex;
  background-color: #222;
  padding: 10rem 18rem 0 18rem;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 10rem 10rem 0 10rem;
  }
  @media (max-width: 800px) {
    padding: 10rem 2rem 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem 0 2rem;
    font-size: 1.2rem;
  }
  @media (max-width: 450px) {
    padding: 0 2rem 0 2rem;
    font-size: 1.2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;

    @media (max-width: 950px) {
      padding: 2rem 2rem;
    }
    @media (max-width: 500px) {
      padding: 1rem 1rem;
    }
    @media (max-width: 450px) {
      padding: 0.4rem 0.4rem;
      text-align: center;
    }
  }

  /* background-color: #fff; */

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: #0dff00;
    color: #000;
  }
`;

const Line = styled.div`
  height: 2px;
  background-color: #0dff00;
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="resume">
            <p>个人简历</p>
            <p>Personal resume</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="graphic">
            <p>平面设计</p>
            <p>Graphic design</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="product">
            <p>产品设计</p>
            <p>Product design</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="newmedia">
            <p>新媒体艺术</p>
            <p>New media art</p>
          </StyledNavLink>
        </li>
      </NavList>
      <Line></Line>
    </nav>
  );
}

export default MainNav;
