import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";

const NavBar = () => {
  const router = useRouter();
  return (
    <S.Nav>
      <S.LinkContainer>
        <Link className={router.pathname === "/" ? "on" : "999999"} href="/">
          Home
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          className={router.pathname === "/about" ? "on" : "999999"}
          href="/about"
        >
          About
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          className={router.pathname === "/signin" ? "on" : "999999"}
          href="/signin"
        >
          SignIn
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          className={router.pathname === "/signup" ? "on" : "999999"}
          href="/signup"
        >
          SignUp
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link
          className={router.pathname === "/order" ? "on" : "999999"}
          href="/order"
        >
          Order
        </Link>
      </S.LinkContainer>
    </S.Nav>
  );
};

export default NavBar;
