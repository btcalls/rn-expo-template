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

const mapColors = (colors: Colors) =>
  Object.assign(
    {},
    ...Object.entries(colors).map(([key, value]) => ({
      ['--' + key]: value.replace(/hsl\(|\)/g, ''),
    }))
  );

export const BrandColors = {
  brand: 'hsl(13, 87.8%, 48%)',
};

export const AppColors: { light: Colors; dark: Colors } = {
  light: {
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
    background: 'hsl(0 0% 100%)',
    tint: 'hsl(195, 89%, 34%)',
    icon: 'hsl(205.71 6.31% 43.53%)',
    tabIconDefault: 'hsl(205.71 6.31% 43.53%)',
    tabIconSelected: 'hsl(207.27 5.82% 62.94%)',
  },
  dark: {
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
    background: 'hsl(200 6.67% 8.82%)',
    tint: 'hsl(0 0% 100%)',
    icon: 'hsl(207.27 5.82% 62.94%)',
    tabIconDefault: 'hsl(207.27 5.82% 62.94%)',
    tabIconSelected: 'hsl(0 0% 100%)',
  },
};

export const ColorsToConfig = Object.assign(
  {},
  ...Object.entries(AppColors.light).map(([key]) => ({ [key]: `hsl(var(--${key}))` }))
);

export const ColorsToPlugin = {
  ':root': mapColors(AppColors.light),
  '.dark:root': mapColors(AppColors.dark),
};
