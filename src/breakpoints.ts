const breakPoints: IBreakPoints = require<IBreakPoints>('style/breakpoints.scss');

interface IBreakPoints {
  mobile: string;
  tablet: string;
}

const MEDIA_BREAKPOINTS = {
  MOBILE: Number.parseFloat(breakPoints.mobile),
  TABLET: Number.parseFloat(breakPoints.tablet),
}

export enum Breakpoints {
  MOBILE,
  TABLET,
  DESKTOP
}

export const getBreakPoint = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < MEDIA_BREAKPOINTS.MOBILE) {
    return Breakpoints.MOBILE;
  }

  if (screenWidth < MEDIA_BREAKPOINTS.TABLET) {
    return Breakpoints.TABLET;
  }

  return Breakpoints.DESKTOP;
}
