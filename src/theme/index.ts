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
      };
    }
    case(themes.purple): {
      return {
        backgroundColor: 'purple',
      };
    }
    default: {
      return {
        backgroundColor: 'white',
      };
    }
  }
};
