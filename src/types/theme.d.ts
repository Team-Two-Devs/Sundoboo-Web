import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
    };
    device: {
      mobile: string;
      tablet: string;
      smallDesktop: string;
      desktop: string;
    };
  }
}
