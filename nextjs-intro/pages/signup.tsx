import axios from "axios";
import Seo from "../components/Seo";
import { useState } from "react";
import { useRouter } from "next/router";

const About = () => {
  const [email, setEmail] = useState("");
  const [emailC, setEmailC] = useState("");
  const [pw, setPw] = useState("");
  const [pwC, setPwC] = useState("");
  const [name, setName] = useState("");

  const [isEmail, setIsEmail] = useState(true);

  const router = useRouter();

  let isEmailOK = false;

  const handleInputChange = (e: any) => {
    switch (e.target.placeholder) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        e.target.id === "1" ? setPw(e.target.value) : setPwC(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
    }
  };

  const isPwOK = () => {
    if (pw === pwC) return true;
    else return false;
  };

  const handleSubmit = async () => {
    if (isPwOK()) {
      try {
        const res = await axios.post(
          "https://port-0-icee-tea-server-duzu222alg58k27h.sel3.cloudtype.app/auth/signup",
          {
            body: {
              email: email,
              password: pw,
              passwordCheck: pwC,
              name: name,
            },
          }
        );
        console.log(res);
        if (res.status === 409) {
          alert("이미 존재하는 email입니다");
        } else {
          alert("회원가입 되었습니다. 이제 주문이 가능합니다");
          router.push("/");
        }
      } catch (err) {
        console.error(err);
      }
    } else alert("비밀번호가 일치하지 않습니다");
  };

  const handleCheckEmail = async () => {
    try {
      const res = await axios.post(
        "https://port-0-icee-tea-server-duzu222alg58k27h.sel3.cloudtype.app/email/send",
        {
          body: {
            email: email,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        alert("인증번호가 발송되었습니다");
        setIsEmail(false);
      } else {
        alert("다시 해 ㅋ");
      }
    } catch (err) {
      console.error(err);
      alert("다시 해 ㅋ");
    }
  };

  const handleCheckEmail2 = async () => {
    try {
      const res = await axios.get(
        "https://port-0-icee-tea-server-duzu222alg58k27h.sel3.cloudtype.app/email/verify",
        {
          params: {
            email: email,
            authKey: emailC,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        alert("email이 인증 되었습니다");
        isEmailOK = true;
      } else {
        alert("인증 번호가 일치하지 않습니다");
      }
    } catch (err) {
      console.error(err);
      alert("인증 번호가 일치하지 않습니다");
    }
  };

  return (
    <div>
      <Seo title="SignUp" />
      <h1>SignUp</h1>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleCheckEmail}>email 인증 코드 받기</button>
        <input
          type="text"
          placeholder="인증번호 입력"
          value={emailC}
          onChange={(e: any) => {
            setEmailC(e.target.value);
          }}
          disabled={isEmail}
        />
        <button onClick={handleCheckEmail2} disabled={isEmail}>
          인증 하기
        </button>
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={pw}
          onChange={handleInputChange}
          id="1"
        />
        <input
          type="password"
          placeholder="password확인"
          value={pw}
          onChange={handleInputChange}
          id="2"
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
};

export default About;
