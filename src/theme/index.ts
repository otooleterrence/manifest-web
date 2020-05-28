export enum themes {
  pink= 'PINK',
  purple = "PURPLE",
  red = "RED",
};

export enum colors {
  white = 'white',
  purple = '#CC029D',
  darkpurp = '#4D013B',
  yellowey = '#CCAD16',
  teal = '#16CCC9',
}

export function useManifestTheme(themeName: string) {
  switch(themeName){
    case(themes.pink): {
      return {
        backgroundColor: 'pink',
        primaryText: colors.white,
        secondaryText: colors.darkpurp,
        color: 'white',
      };
    }
    case(themes.purple): {
      return {
        backgroundColor: colors.purple,
        primaryText: colors.white,
        secondaryText: colors.darkpurp,
        color: colors.white,
      };
    }
    case(themes.red): {
      return {
        backgroundColor: 'red',
        primaryText: colors.white,
        secondaryText: colors.darkpurp,
        color: 'white',
      };
    }
    default: {
      return {
        backgroundColor: 'white',
        primaryText: colors.white,
        secondaryText: colors.darkpurp,
        color: colors.white
        // border: '1px',
        // 'border-radius': '2px',
      };
    }
  }
};
