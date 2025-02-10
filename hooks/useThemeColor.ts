/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import convert from 'color-convert';

import { AppColors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  colorName: keyof typeof AppColors.light & keyof typeof AppColors.dark
) {
  const theme: keyof typeof AppColors = useColorScheme().colorScheme ?? 'light';
  const color = AppColors[theme][colorName];
  const hslValues = color
    .replace(/hsl\(|\)|\%/g, '')
    .split(' ')
    .map((x) => parseFloat(x));
  const rgb = convert.hsl.rgb(hslValues[0], hslValues[1], hslValues[2]);

  return convert.rgb.hex(rgb[0], rgb[1], rgb[2]);
}
