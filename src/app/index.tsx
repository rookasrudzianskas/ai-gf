import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
// Adjusted card width to account for padding and margin
const CARD_WIDTH = width * 0.42;

export default function Home() {
  const options = [
    {
      title: 'Chat',
      href: '/chat',
      icon: '💭',
      description: 'Talk with Mia',
      gradient: ['#FF69B4', '#FF1493'],
      delay: 200,
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: '👤',
      description: 'Get to know me',
      gradient: ['#FF69B4', '#FF1493'],
      delay: 400,
    },
    {
      title: 'Customize',
      href: '/customize',
      icon: '⚙️',
      description: 'Make me yours',
      gradient: ['#FF69B4', '#FF1493'],
      delay: 600,
    },
    {
      title: 'Memory',
      href: '/memory',
      icon: '📝',
      description: 'Our moments',
      gradient: ['#FF69B4', '#FF1493'],
      delay: 800,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      className="bg-black">
      <ImageBackground
        source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=background' }}
        className="min-h-screen flex-1"
        blurRadius={100}>
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(255,20,147,0.8)']}
          className="min-h-screen flex-1">
          <View className="absolute h-full w-full overflow-hidden">
            <View className="absolute left-10 top-20 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl" />
            <View className="absolute right-10 top-40 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
            <View className="absolute bottom-40 left-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
          </View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(200)}
            className="px-6 pb-8 pt-12">
            <View className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
              <View className="items-center">
                <Image
                  source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Mia' }}
                  className="h-32 w-32 rounded-full border-4 border-white/50 shadow-2xl"
                  style={{ width: 128, height: 128 }}
                />
                <View className="mt-6 items-center">
                  <Text className="text-4xl font-bold text-white">Mia</Text>
                  <Text className="mt-2 text-lg text-white/80">Your Perfect Companion</Text>

                  <View className="mt-4 flex-row items-center rounded-full border border-white/20 bg-white/10 px-4 py-2">
                    <View className="mr-2 h-2 w-2 rounded-full bg-green-400" />
                    <Text className="text-white/90">Online & Ready to Chat</Text>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>

          {/* Menu Options */}
          <View className="flex-1 px-4 pb-8">
            <Animated.View entering={FadeInUp.duration(1000).delay(400)} className="mb-8 px-2">
              <Text className="text-lg text-white/80">What would you like to do?</Text>
            </Animated.View>
            <View className="flex-row flex-wrap justify-evenly">
              {options.map((option, index) => (
                <Link key={index} href={option.href} asChild>
                  <TouchableOpacity className="mx-1 mb-6 rounded-xl">
                    {/*{' '}*/}
                    <Animated.View
                      entering={FadeInUp.duration(1000).delay(option.delay)}
                      style={{ width: CARD_WIDTH }}
                      className="rounded-xl">
                      <View className="h-48 rounded-md border border-white/20 p-2 backdrop-blur-xl">
                        <View className="flex-1 justify-between rounded-md p-3">
                          <View>
                            <View className="mb-4 h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                              <Text className="text-4xl">{option.icon}</Text>
                            </View>
                            <Text className="text-xl font-bold text-white">{option.title}</Text>
                            <Text className="mt-2 text-sm text-white/60">{option.description}</Text>
                          </View>

                          <View className="flex-1 bg-red-500">
                            <View className="flex-1" />
                            <View className="h-9 w-9 items-center justify-center rounded-full bg-white/10">
                              {/*{' '}*/}
                              <Text className="text-lg text-white">→</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </Animated.View>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
}
