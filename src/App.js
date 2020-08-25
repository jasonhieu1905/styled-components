import React from "react";
import styled from "styled-components";
import Article from "./Article/Article";

const Heading = styled.h1`
  color: red;
  text-align: center;
`;

function App() {
  return (
    <>
      <Heading>Helo World</Heading>
      <Article />
    </>
  );
}

export default App;
