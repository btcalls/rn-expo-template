import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText>Hey! </ThemedText>
    </ThemedView>
  );
}
