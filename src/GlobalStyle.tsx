import React from "react";
import { Global, css } from "@emotion/react";

const styles = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    background: white;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-overflow-scrolling: touch;
  }

  .pac-container {
    z-index: 1400 !important;
  }
`;

export const GlobalStyle = () => <Global styles={styles} />;
