import { css } from "@emotion/react";
import { useState } from "react";

export const getServerSideProps = async () => {
  return {
    props: {
      posts: [],
    },
  };
};

const Home = ({ posts }) => {
  const [data, setData] = useState(posts);

  return (
    <div>
      <button
        onClick={() => {
          fetch("/api/posts").then(async (response) => {
            setData(await response.json());
          });
        }}
      >
        Refetch
      </button>
      <button
        onClick={() => {
          fetch("/api/clearPosts").then(async (response) => {
            setData(await response.json());
          });
        }}
      >
        Clear posts
      </button>
      <p>{data.length}</p>
      <div
        css={css`
          font-size: 30px;
          white-space: pre-wrap;
        `}
      >
        {data.map((post, index) => {
          return <p key={index}>{JSON.stringify(post, null, 2)}</p>;
        })}
      </div>
    </div>
  );
};

export default Home;
