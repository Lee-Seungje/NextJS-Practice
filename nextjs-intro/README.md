import axios from "axios";
import Seo from "../components/Seo";
import { GetServerSideProps } from "next";

type Data = { results: string };

const About = ({ props }: { props: Data }) => {
return (
<div>
<Seo title="About" />
<h1>About</h1>
<p>{props.results}</p>
</div>
);
};

export const getServerSideProps: GetServerSideProps<{
results: Data;
}> = async () => {
let results;
const url =
"https://port-0-idea-archive-server-p8xrq2mlfszgkzn.sel3.cloudtype.app";
try {
const res = await axios.get(`http://localhost:3000/post`);
const data = res.data;
results = JSON.parse(data);
} catch (err) {
results = err;
}
return {
props: {
results: results ?? "do!",
},
};
};

export default About;
