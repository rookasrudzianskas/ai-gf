import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

export default function Memory() {
  const memories = [
    {
      date: 'Today',
      text: 'You told me about your favorite movie',
      emotion: '🎬',
      time: '2 hours ago',
    },
    {
      date: 'Yesterday',
      text: 'We discussed your dreams and aspirations',
      emotion: '✨',
      time: '1 day ago',
    },
    {
      date: 'Last Week',
      text: 'You shared your travel stories from Paris',
      emotion: '🗼',
      time: '5 days ago',
    },
    {
      date: 'Last Week',
      text: 'We talked about your family',
      emotion: '👨‍👩‍👧‍👦',
      time: '6 days ago',
    },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=memory' }}
      className="flex-1"
      blurRadius={50}>
      <LinearGradient
        colors={['rgba(255,20,147,0.9)', 'rgba(255,182,193,0.95)']}
        className="flex-1">
        <Stack.Screen
          options={{
            title: 'Our Memories',
            headerTransparent: true,
          }}
        />

        <ScrollView className="flex-1 pt-20">
          <View className="p-6">
            <Text className="mb-2 text-3xl font-bold text-white">Precious Moments</Text>
            <Text className="mb-6 text-white/80">Every conversation makes our bond stronger</Text>

            {memories.map((memory, index) => (
              <TouchableOpacity key={index} className="mb-4">
                <LinearGradient
                  colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)']}
                  className="rounded-2xl p-5 backdrop-blur-lg">
                  <View className="mb-2 flex-row items-center">
                    <Text className="mr-3 text-3xl">{memory.emotion}</Text>
                    <View className="flex-1">
                      <Text className="font-medium text-pink-600">{memory.date}</Text>
                      <Text className="text-sm text-gray-500">{memory.time}</Text>
                    </View>
                  </View>
                  <Text className="text-lg text-gray-800">{memory.text}</Text>

                  <View className="mt-3 flex-row">
                    <TouchableOpacity className="mr-2 rounded-full bg-pink-100 px-4 py-1">
                      <Text className="text-pink-600">Revisit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-full bg-pink-100 px-4 py-1">
                      <Text className="text-pink-600">Share</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}
