import axios from "axios";
import Seo from "../components/Seo";

const About = () => {
  const get = async () => {
    try {
      const res = await axios.get("/post");
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Seo title="About" />
      <h1 onClick={get}>About</h1>
    </div>
  );
};

export default About;
