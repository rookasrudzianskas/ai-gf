import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';

export default function Profile() {
  const details = [
    { title: 'Personality', value: 'Sweet & Caring', icon: '🦋' },
    { title: 'Interests', value: 'Art, Music, Travel', icon: '🎨' },
    { title: 'Love Language', value: 'Words of Affirmation', icon: '💝' },
    { title: 'Hobbies', value: 'Painting, Singing, Reading', icon: '🎯' },
    { title: 'Favorite Food', value: 'Italian Cuisine', icon: '🍝' },
  ];

  return (
    <ScrollView className="flex-1 bg-pink-50">
      <Stack.Screen
        options={{
          title: 'Profile',
          headerTransparent: true,
          headerBlurEffect: 'light',
        }}
      />

      <LinearGradient colors={['#FF1493', '#FF69B4']} className="rounded-b-3xl pb-10 pt-20">
        <View className="items-center pt-36">
          <Image
            source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Mia' }}
            className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
          />
          <Text className="mt-4 text-3xl font-bold text-white">Mia</Text>
          <View className="my-10 flex-row items-center rounded-full bg-white/20 px-4 py-2">
            <Text className="text-lg text-white">Level 1 Companion</Text>
            <Text className="ml-2">✨</Text>
          </View>
        </View>
      </LinearGradient>

      <View className="p-6">
        {details.map((detail, index) => (
          <View key={index} className="mb-4 rounded-xl p-1 shadow-sm">
            <View className="flex-row items-center">
              <Text className="mr-3 text-3xl">{detail.icon}</Text>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">{detail.title}</Text>
                <Text className="mt-1 text-lg font-medium text-gray-800">{detail.value}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
