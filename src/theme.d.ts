import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      text: string;
      gray: string;
      button: string;
      buttonHover: string;
      rating: string;
      grayLight: string;
      badges: string;
      inputs: string;
      white: string;
    };
  }
}
