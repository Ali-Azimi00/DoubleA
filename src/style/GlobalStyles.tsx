import * as styled from 'styled-components';

const Montserrat = 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap';

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url(${Montserrat});
  }

  html {
    font-size: 62.5%;
  }

  /* TO CHECK */
  h1 {
    font-weight: 700;
  }

  p,
  a {
    /* font-family: 'Montserrat', sans-serif; */
    font-size: 1.6rem;
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
  }

  .section-title {
    margin: 0px;
    margin-bottom: 4.5rem;
    font-size: $big-font-size;
    font-weight: bold;
    text-transform: uppercase;

    @include respond(phone) {
      font-size: 2.8rem;
    }
  }

  .dark-blue-text {
    color: $dark-blue-text !important;
  }

  .text-color-main {
    background-image: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    // Responsive text purple style
    @include respond(phone) {
      background-image: none;
      -webkit-text-fill-color: $secondary-color;
    }

    &:hover {
      transform: translateX(2px);
    }
  }
`;

export default GlobalStyles;

// $dark-grey: #333333;

// $dark-blue-text: #272341; // For Headings

// $default-font-size: 1.6rem;
// $big-font-size: 4rem;
// $mid-font-size: 2.5rem;
