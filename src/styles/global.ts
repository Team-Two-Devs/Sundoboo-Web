import { css } from '@emotion/react';

const global = css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  menu,
  nav,
  section,
  article,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
  }
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    -webkit-text-size-adjust: none;
    word-wrap: break-word;
    word-break: break-all;
  }
  body,
  input,
  select,
  textarea,
  button {
    font-family: 'Noto Sans KR', sans-serif;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  img {
    border: 0;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }
  address,
  cite,
  code,
  em {
    font-style: normal;
    font-weight: normal;
  }
  label,
  img,
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }
  .hide,
  caption,
  legend {
    line-height: 0;
    font-size: 1px;
    overflow: hidden;
  }
  hr {
    display: none;
  }
  main,
  header,
  section,
  nav,
  footer,
  aside,
  article,
  figure {
    display: block;
  }
  a {
    text-decoration: none;
  }

  input::-webkit-input-placeholder {
    color: #b5b5b5;
    line-height: 100%;
  }

  input[type='tel'][readonly],
  input[type='text'][readonly],
  input[type='password'][readonly],
  input[type='email'][readonly],
  input[type='search'][readonly],
  input[type='tel'][disabled],
  input[type='text'][disabled],
  input[type='password'][disabled],
  input[type='search'][disabled],
  input[type='email'][disabled] {
    background: #eaeaea;
    border-color: #c0c0c0;
    color: #666;
    -webkit-appearance: none;
    font-size: 12px;
  }
  textarea[readonly],
  textarea[disabled] {
    padding: 11px;
    font-size: 16px;
    color: #666;
    font-weight: normal;
    line-height: 140%;
    height: 78px;
    background: #eaeaea;
    border: 1px solid #c0c0c0;
  }
`;

export default global;
