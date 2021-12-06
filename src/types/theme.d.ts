import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      searchToolbar: string;
      icon: {
        default: string;
      };
      vote: {
        holderUnChecked: string;
        holderChecked: string;
        unchecked: string;
        checked: string;
      };
      divider: string;
    };
    device: {
      mobile: string;
      tablet: string;
      smallDesktop: string;
      desktop: string;
    };
  }
}
