import styled from "@emotion/styled";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LinkContainer = styled.div`
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.15);
  a {
    text-decoration: none;
    font-size: 25px;
  }
`;
