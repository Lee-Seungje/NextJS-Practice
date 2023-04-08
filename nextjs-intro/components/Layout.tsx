import NavBar from "./NavBar";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  h1 {
    background: linear-gradient(275.95deg, #f2e766 -8.73%, #ca3a17 102.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <NavBar />
      <Div>{children}</Div>
    </>
  );
};

export default Layout;
