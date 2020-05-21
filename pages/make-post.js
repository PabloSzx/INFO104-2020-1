import { useState } from "react";
import { css } from "@emotion/react";

const MakePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const response = await fetch("/api/makePost", {
            body: JSON.stringify({
              title,
              content,
            }),
            method: "POST",
          });

          if (response.ok) {
            setMessage(JSON.stringify(await response.json(), null, 2));
            setTitle("");
            setContent("");
          } else {
            alert(`Error! ${await response.text()}`);
          }
        }}
      >
        <p>Title</p>
        <input
          css={css`
            font-size: 30px;
          `}
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
        <p>Content</p>
        <textarea
          css={css`
            font-size: 20px;
          `}
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <br />
        <button disabled={!title || !content}>Make post</button>
      </form>

      {message ? (
        <p
          css={css`
            white-space: pre-wrap;
          `}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
};

export default MakePost;
