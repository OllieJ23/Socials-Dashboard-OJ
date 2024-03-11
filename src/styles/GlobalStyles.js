import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --toggle: hsl(230, 22%, 74%);
    --bg: hsl(0, 0%, 100%);
    --pale-blue-top: hsl(225, 100%, 98%);
    --lgray-blue: hsl(227, 47%, 96%);
    --dgray-blue-text: hsl(228, 12%, 44%);
    --veryDark-blue-text: hsl(230, 17%, 14%);
     --box-hover: #e2e6f6;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.08);
  }
  
  &.dark-mode {
    --bg: hsl(230, 17%, 14%);
   --pale-blue-top: hsl(232, 19%, 15%);
    --lgray-blue: hsl(228, 28%, 20%);
    --dgray-blue-text: hsl(228, 34%, 66%);
    --veryDark-blue-text: hsl(0, 0%, 100%);
    --box-hover: #393f56;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);

  }

  --lime-green: hsl(163, 72%, 41%);
  --bright-red: hsl(356, 69%, 56%);
  --facebook:  hsl(208, 92%, 53%);
  --twitter: hsl(203, 89%, 53%);
  --youtube: hsl(348, 97%, 39%);
 


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s ease-in;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter";
  color: var(--dgray-blue-text);
  background-color: var(--bg);
  transition: color 0.3s ease-in, background-color 0.2s ease-in; 
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.4rem;
  // Centering items in Middle of page
  display: flex;  
  flex-direction: column;
  align-items: center;
  overflow: hidden;

    @media (max-width: 1050px) {
    overflow-y: auto;
  }

     @media (max-width: 550px) {
    margin-left: 20rem;
    
  }

      @media (max-width: 380px) {
    margin-left: 22rem;
    
  }

    @media (max-width: 280px) {
    margin-left: 30rem;
     overflow: auto;
  }


}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
