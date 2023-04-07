import axios from "axios";
import Seo from "../components/Seo";
import { useEffect } from "react";
import isValid from "@/isValid";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  const purchase = async () => {
    const flavors = document.getElementById("1-1") as any;
    const flavor = flavors.options[flavors.selectedIndex].value;
    const sizes = document.getElementById("1-2") as any;
    const size = sizes.options[sizes.selectedIndex].value;
    const pays = document.getElementById("1-3") as any;
    const pay = pays.options[pays.selectedIndex].value;
    try {
      const res = await axios.get(
        "https://port-0-icee-tea-server-duzu222alg58k27h.sel3.cloudtype.app/purchase",
        {
          headers: {
            accessToken: localStorage.getItem("token"),
          },
          params: {
            flavor: flavor,
            size: size,
            pay: pay,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isValid()) {
      alert("로그인 되어있지 않습니다");
      router.push("/");
    }
  }, []);

  return (
    <div>
      <Seo title="Order" />
      <h1>Order</h1>
      <div>
        <select size={3} id="1-1">
          <option value="복숭아">복숭아</option>
          <option value="레몬">레몬</option>
          <option value="청포도">청포도</option>
        </select>
        <select size={3} id="1-2">
          <option value="300">300ml</option>
          <option value="500">500ml</option>
        </select>
        <select size={3} id="1-3">
          <option value="계좌이체">계좌이체</option>
          <option value="현금결제">현금결제</option>
        </select>
      </div>
      <button onClick={purchase}>
        <h2>아이스티 신청하기!</h2>
      </button>
    </div>
  );
};

export default About;
