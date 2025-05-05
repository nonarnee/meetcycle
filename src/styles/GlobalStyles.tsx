import { Global, css } from '@emotion/react';

import { fonts } from './fonts';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${fonts}

      /* reset */
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      body {
        line-height: 1;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }

      /* 전역 스타일 */
      html,
      body {
        min-height: 100%;
      }

      body {
        background: linear-gradient(135deg, #fff5f7 0%, #f8f0ff 100%);
        color: #333;
      }
      
      /* 애니메이션 */  #fff5f7 0%, #f8f0ff 100%);
        color: #333;
      }
      
      /* 애니메이션 */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      /* 스크롤바 스타일 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #ccc;
      }
      
      /* 포커스 스타일 */
      :focus-visible {
        outline: 2px solid #f06292;
        outline-offset: 2px;
      }
      
      /* 반응형 유틸리티 */
      .mobile-only {
        display: none;
      }
      
      @media (max-width: 768px) {
        .mobile-only {
          display: block;
        }
        
        .desktop-only {
          display: none;
        }
      }
    `}
  />
);

export default GlobalStyles;
