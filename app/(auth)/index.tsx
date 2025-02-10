import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText>Hey!</ThemedText>
      <Link className="p-3 mt-6 bg-slate-500" replace href="/(tabs)">
        <ThemedText>To Tabs</ThemedText>
      </Link>
    </ThemedView>
  );
}
