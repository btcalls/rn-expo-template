import convert from 'color-convert';

import { useColorScheme } from '@/hooks/useColorScheme';

type Colors = {
  // Tailwind colors
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  // App-defined colors
  label: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

function mapColors(colors: Colors) {
  Object.assign(
    {},
    ...Object.entries(colors).map(([key, value]) => ({
      ['--' + key]: value.replace(/hsl\(|\)/g, ''),
    }))
  );
}

function toRGB(color: string) {
  const hslValues = color
    .replace(/hsl\(|\)|\%/g, '')
    .split(' ')
    .map((x) => parseFloat(x));

  const rgb = convert.hsl.rgb(hslValues[0], hslValues[1], hslValues[2]);

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

const BrandColors = {
  brand: 'hsl(13, 87.8%, 48%)',
};

const AppColors: { light: Colors; dark: Colors } = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(240 10% 3.9%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(240 10% 3.9%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(240 10% 3.9%)',
    primary: 'hsl(240 5.9% 10%)',
    primaryForeground: 'hsl(0 0% 98%)',
    secondary: 'hsl(240 4.8% 95.9%)',
    secondaryForeground: 'hsl(240 5.9% 10%)',
    muted: 'hsl(240 4.8% 95.9%)',
    mutedForeground: 'hsl(240 3.8% 46.1%)',
    accent: 'hsl(240 4.8% 95.9%)',
    accentForeground: 'hsl(240 5.9% 10%)',
    destructive: 'hsl(0 84.2% 60.2%)',
    destructiveForeground: 'hsl(0 0% 98%)',
    border: 'hsl(240 5.9% 90%)',
    input: 'hsl(240 5.9% 90%)',
    ring: 'hsl(240 5.9% 10%;)',
    label: 'hsl(201.82 24.44% 8.82%)',
    tint: 'hsl(195, 89%, 34%)',
    icon: 'hsl(205.71 6.31% 43.53%)',
    tabIconDefault: 'hsl(205.71 6.31% 43.53%)',
    tabIconSelected: 'hsl(207.27 5.82% 62.94%)',
  },
  dark: {
    background: 'hsl(200 6.67% 8.82%)',
    foreground: 'hsl(0 0% 98%)',
    card: 'hsl(240 10% 3.9%)',
    cardForeground: 'hsl(0 0% 98%)',
    popover: 'hsl(240 10% 3.9%)',
    popoverForeground: 'hsl(0 0% 98%)',
    primary: 'hsl(0 0% 98%)',
    primaryForeground: 'hsl(240 5.9% 10%)',
    secondary: 'hsl(240 3.7% 15.9%)',
    secondaryForeground: 'hsl(0 0% 98%)',
    muted: 'hsl(240 3.7% 15.9%)',
    mutedForeground: 'hsl(240 5% 64.9%)',
    accent: 'hsl(240 3.7% 15.9%)',
    accentForeground: 'hsl(0 0% 98%)',
    destructive: 'hsl(0 72% 51%)',
    destructiveForeground: 'hsl(0 0% 98%)',
    border: 'hsl(240 3.7% 15.9%)',
    input: 'hsl(240 3.7% 15.9%)',
    ring: 'hsl(240 4.9% 83.9%)',
    label: 'hsl(210 5.56% 92.94%)',
    tint: 'hsl(0 0% 100%)',
    icon: 'hsl(207.27 5.82% 62.94%)',
    tabIconDefault: 'hsl(207.27 5.82% 62.94%)',
    tabIconSelected: 'hsl(0 0% 100%)',
  },
};

export function useAppColor(color: keyof Colors | keyof typeof BrandColors) {
  const { colorScheme: theme } = useColorScheme();

  if (color in BrandColors) {
    return toRGB(BrandColors[color as keyof typeof BrandColors]);
  }

  if (color in AppColors[theme]) {
    return toRGB(AppColors[theme][color as keyof Colors]);
  }

  return AppColors.light.primary;
}

export const ColorsToConfig = Object.assign(
  {},
  ...Object.entries(AppColors.light).map(([key]) => ({ [key]: `hsl(var(--${key}))` }))
);

export const ColorsToPlugin = {
  ':root': mapColors(AppColors.light),
  '.dark:root': mapColors(AppColors.dark),
};
