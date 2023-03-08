import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="data:image/jpeg;base64,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"
      alt=""
    />
  );
};

const Title = () => <h1>Sun</h1>;
const Author = () => (
  <h2 style={{ color: "green", fontSize: "1.7rem", marginTop: "0.25rem" }}>
    John Doe
  </h2>
);

ReactDOM.render(<BookList />, document.getElementById("root"));
