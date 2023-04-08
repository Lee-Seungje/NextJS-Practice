import styled from "@emotion/styled";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.15);
  border: 0;
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
    color: #999999;
  }
  .on {
    background: linear-gradient(275.95deg, #f2e766 -8.73%, #ca3a17 102.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
