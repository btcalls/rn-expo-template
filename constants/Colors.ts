/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import hexRgb from 'hex-rgb';

const iconLight = '#687076';
const iconDark = '#9BA1A6';
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

type Colors = {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

const mapColors = (colors: Colors) =>
  Object.assign(
    {},
    ...Object.entries(colors).map(([key, value]) => {
      const rgb = hexRgb(value);

      return { ['--' + key]: `${rgb.red} ${rgb.green} ${rgb.blue}` };
    })
  );

export const AppColors: { light: Colors; dark: Colors } = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: iconLight,
    tabIconDefault: iconLight,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: iconDark,
    tabIconDefault: iconDark,
    tabIconSelected: tintColorDark,
  },
};

export const ColorsToConfig = Object.assign(
  {},
  ...Object.entries(AppColors.light).map(([key]) => ({ [key]: `rgb(var(--${key}))` }))
);

export const ColorsToPlugin = {
  ':root': mapColors(AppColors.light),
  '.dark:root': mapColors(AppColors.dark),
};
