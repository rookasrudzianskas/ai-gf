import '../../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#FF1493' },
          headerTintColor: '#fff',
          headerShadowVisible: false,
          animation: 'fade',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />
    </GestureHandlerRootView>
  );
}
