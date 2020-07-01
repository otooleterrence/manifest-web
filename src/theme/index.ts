export enum themes {
  pink= 'PINK',
  purple = "PURPLE",
  red = "RED",
  normal = "normal",
};

export enum colors {
  white = 'white',
  navy = '#222831',
  purple = '#CC029D',
  darkpurp = '#4D013B',
  medPurp = '#8209D9',
  yellowey = '#CCAD16',
  teal = '#16CCC9',
}

const navy = '#1C4058';
const seafoam = '#6FAE9D';
const gold = '#FFE200';
const sunset = '#F8B91A';
const red = '#DC471F';

export function useManifestTheme(themeName: string) {
  switch(themeName){
    case(themes.normal): {
      return {
        backgroundColor: navy,
        primaryText: colors.white,
        seafoam,
        highlight: gold,
        sunset,
        red,
      };
    }
    // case(themes.pink): {
    //   return {
    //     backgroundColor: 'pink',
    //     primaryText: colors.white,
    //     secondaryText: colors.darkpurp,
    //     medPurp: colors.medPurp,
    //     color: 'white',
    //   };
    // }
    // case(themes.purple): {
    //   return {
    //     backgroundColor: colors.navy,
    //     primaryText: colors.white,
    //     secondaryText: colors.darkpurp,
    //     medPurp: colors.medPurp,
    //     color: colors.white,
    //   };
    // }
    // case(themes.red): {
    //   return {
    //     backgroundColor: 'red',
    //     primaryText: colors.white,
    //     secondaryText: colors.darkpurp,
    //     medPurp: colors.medPurp,
    //     color: 'white',
    //   };
    // }
    default: {
      // return {
      //   backgroundColor: 'white',
      //   primaryText: colors.white,
      //   secondaryText: colors.darkpurp,
      //   color: colors.white
      //   // border: '1px',
      //   // 'border-radius': '2px',
      // };
        return {
          backgroundColor: navy,
          primaryText: colors.white,
          seafoam,
          highlight: gold,
          sunset,
          red,
        };
    }
  }
};
