import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/"
      >
        Home
      </Link>
      |
      <Link
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
        href="/about"
      >
        About
      </Link>
      |
      <Link
        style={{ color: router.pathname === "/signin" ? "red" : "blue" }}
        href="/signin"
      >
        SignIn
      </Link>
      |
      <Link
        style={{ color: router.pathname === "/signup" ? "red" : "blue" }}
        href="/signup"
      >
        SignUp
      </Link>
      |
      <Link
        style={{ color: router.pathname === "/order" ? "red" : "blue" }}
        href="/order"
      >
        Order
      </Link>
    </nav>
  );
};

export default NavBar;
