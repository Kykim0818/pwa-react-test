import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      bg: string;
      main: string;
      sub: string;
    };
  }
}
