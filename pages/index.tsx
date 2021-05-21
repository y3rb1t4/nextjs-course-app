// pages/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import dynamic from "next/dynamic";

const BrowerComponent = dynamic(() => import("../src/components/brower"), {
  ssr: false,
});

const Content = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      <BrowerComponent />
    </div>
  </div>
);

export default Content;

export function getStaticProps({ params }) {
  // get data from CMS
  return {
    props: {
      content: {
        title: "This is my really nice app",
      },
    },
  };
}
