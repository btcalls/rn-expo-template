import { Stack } from 'expo-router';

import { useAppColor } from '@/constants/colors';

export default function AuthLayout() {
  const backgroundColor = useAppColor('brand');
  const headerTintColor = useAppColor('secondary');

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor,
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
