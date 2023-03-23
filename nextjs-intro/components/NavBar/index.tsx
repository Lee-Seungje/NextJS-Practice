import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <S.LinkStyle color={router.pathname === "/" ? "red" : "blue"}>
          Hello
        </S.LinkStyle>
      </Link>
      <Link href="/about">
        <S.LinkStyle color={router.pathname === "/about" ? "red" : "blue"}>
          About
        </S.LinkStyle>
      </Link>
    </nav>
  );
}
