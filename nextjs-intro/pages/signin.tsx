import axios from "axios";
import Seo from "../components/Seo";
import { useState } from "react";

const About = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleInputChange = (e: any) => {
    switch (e.target.placeholder) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPw(e.target.value);
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://port-0-icee-tea-server-duzu222alg58k27h.sel3.cloudtype.app/auth/signin",
        {
          body: {
            email: email,
            password: pw,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Seo title="SignIn" />
      <h1>SignIn</h1>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          value={pw}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
};

export default About;
