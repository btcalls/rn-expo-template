import convert from 'color-convert';

import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { AppColors, BrandColors } = require('../constants/colors');

function toRGB(color: string) {
  const hslValues = color
    .replace(/hsl\(|\)|\%/g, '')
    .split(' ')
    .map((x) => parseFloat(x));

  const rgb = convert.hsl.rgb(hslValues[0], hslValues[1], hslValues[2]);

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

export default function useAppColor(color: keyof Colors | keyof typeof BrandColors) {
  const { colorScheme: theme } = useColorScheme();

  if (color in BrandColors) {
    return toRGB(BrandColors[color as keyof typeof BrandColors]);
  }

  if (color in AppColors[theme]) {
    return toRGB(AppColors[theme][color as keyof Colors]);
  }

  return AppColors[theme].primary;
}
