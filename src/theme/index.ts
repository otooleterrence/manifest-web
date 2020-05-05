export enum themes {
  pink= 'PINK',
  purple = "PURPLE",
  red = "RED",
};

export function useManifestTheme(themeName: string) {
  switch(themeName){
    case(themes.pink): {
      return {
        backgroundColor: 'pink',
        color: 'white',
      };
    }
    case(themes.purple): {
      return {
        backgroundColor: 'purple',
        color: 'white',
      };
    }
    case(themes.red): {
      return {
        backgroundColor: 'red',
        color: 'white',
      };
    }
    default: {
      return {
        backgroundColor: 'white',
        // border: '1px',
        // 'border-radius': '2px',
      };
    }
  }
};
