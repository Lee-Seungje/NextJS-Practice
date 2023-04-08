import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";

const NavBar = () => {
  const router = useRouter();
  return (
    <S.Nav>
      <S.LinkContainer>
        <Link
          style={{ color: router.pathname === "/" ? "#FF5C5C" : "#999999" }}
          href="/"
        >
          Home
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          style={{
            color: router.pathname === "/about" ? "#FF5C5C" : "#999999",
          }}
          href="/about"
        >
          About
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          style={{
            color: router.pathname === "/signin" ? "#FF5C5C" : "#999999",
          }}
          href="/signin"
        >
          SignIn
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          style={{
            color: router.pathname === "/signup" ? "#FF5C5C" : "#999999",
          }}
          href="/signup"
        >
          SignUp
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          style={{
            color: router.pathname === "/order" ? "#FF5C5C" : "#999999",
          }}
          href="/order"
        >
          Order
        </Link>
      </S.LinkContainer>
    </S.Nav>
  );
};

export default NavBar;
