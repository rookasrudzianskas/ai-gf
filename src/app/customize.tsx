import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default function Customize() {
  const [selectedPersonality, setSelectedPersonality] = useState('Sweet');

  const personalities = [
    { name: 'Sweet', icon: '🌸' },
    { name: 'Playful', icon: '🦋' },
    { name: 'Intellectual', icon: '📚' },
    { name: 'Artistic', icon: '🎨' },
  ];

  const interests = [
    { name: 'Music', icon: '🎵' },
    { name: 'Art', icon: '🖼️' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Books', icon: '📖' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Cooking', icon: '👩‍🍳' },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=customize' }}
      className="flex-1"
      blurRadius={50}>
      <LinearGradient
        colors={['rgba(255,20,147,0.9)', 'rgba(255,182,193,0.95)']}
        className="flex-1">
        <Stack.Screen
          options={{
            title: 'Customize Mia',
            headerTransparent: true,
          }}
        />

        <ScrollView className="flex-1 pt-20">
          <View className="p-6">
            <View className="mb-6 rounded-3xl bg-white/20 p-6 backdrop-blur-lg">
              <Text className="mb-2 text-2xl font-bold text-white">Personality</Text>
              <Text className="mb-4 text-white/80">Choose Mia's primary personality trait</Text>
              <View className="flex-row flex-wrap">
                {personalities.map((personality, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedPersonality(personality.name)}
                    className="mb-3 mr-3">
                    <LinearGradient
                      colors={
                        selectedPersonality === personality.name
                          ? ['#FF1493', '#FF69B4']
                          : ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)']
                      }
                      className="rounded-2xl px-5 py-3">
                      <View className="flex-row items-center">
                        <Text className="mr-2 text-xl">{personality.icon}</Text>
                        <Text
                          className={
                            selectedPersonality === personality.name
                              ? 'font-medium text-white'
                              : 'text-gray-800'
                          }>
                          {personality.name}
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View className="mb-6 rounded-3xl bg-white/20 p-6 backdrop-blur-lg">
              <Text className="mb-2 text-2xl font-bold text-white">Interests</Text>
              <Text className="mb-4 text-white/80">Select interests to shape conversations</Text>
              <View className="flex-row flex-wrap">
                {interests.map((interest, index) => (
                  <TouchableOpacity key={index} className="mb-3 mr-3">
                    <LinearGradient
                      colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)']}
                      className="rounded-2xl px-5 py-3">
                      <View className="flex-row items-center">
                        <Text className="mr-2 text-xl">{interest.icon}</Text>
                        <Text className="text-gray-800">{interest.name}</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity className="mt-4">
              <LinearGradient
                colors={['#FF1493', '#FF69B4']}
                className="rounded-2xl p-4"
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Text className="text-center text-lg font-medium text-white">Save Changes</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}
