import classNames from 'classnames';
import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const testStyles = classNames({
    [`text-[${color}]`]: true,
    'text-base': type === 'default' || type === 'defaultSemiBold',
    'font-semibold': type === 'defaultSemiBold',
    'text-3xl font-bold': type === 'title',
    'text-xl font-bold': type === 'subtitle',
    'text-sm/10 text-[#0a7ea4]': type === 'link',
  });

  return <Text className={testStyles} style={style} {...rest} />;
}
