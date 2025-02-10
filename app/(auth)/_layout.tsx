import { Stack } from 'expo-router';

import { BrandColors } from '@/constants/colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function AuthLayout() {
  const headerTintColor = useThemeColor('secondary');

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: BrandColors.brand,
        },
        headerTintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
