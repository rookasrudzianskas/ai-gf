import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Mia 👋", sender: 'ai' },
    { id: 2, text: "I'm so excited to get to know you! 💖", sender: 'ai' },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: message,
          sender: 'user',
        },
      ]);
      setMessage('');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=chat' }}
      className="flex-1"
      blurRadius={50}>
      <LinearGradient
        colors={['rgba(255,192,203,0.95)', 'rgba(255,20,147,0.9)']}
        className="flex-1">
        <Stack.Screen
          options={{
            title: 'Chat with Mia',
            headerTransparent: true,
            headerBlurEffect: 'light',
          }}
        />

        <View className="flex-1 p-4 pt-20">
          {messages.map((msg) => (
            <View
              key={msg.id}
              className={`mb-3 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <LinearGradient
                colors={
                  msg.sender === 'user'
                    ? ['#FF1493', '#FF69B4']
                    : ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)']
                }
                className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.sender === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'
                }`}>
                <Text className={msg.sender === 'user' ? 'text-white' : 'text-gray-800'}>
                  {msg.text}
                </Text>
              </LinearGradient>
            </View>
          ))}
        </View>

        <View className="bg-white/80 p-4 backdrop-blur-lg">
          <View className="flex-row items-center rounded-full bg-white p-2 shadow-sm">
            <TouchableOpacity className="p-2">
              <Text className="text-2xl">😊</Text>
            </TouchableOpacity>
            <TextInput
              className="flex-1 px-4 py-2"
              placeholder="Type a message..."
              placeholderTextColor="#666"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity
              onPress={sendMessage}
              className="ml-2 h-10 w-10 items-center justify-center rounded-full bg-pink-500">
              <Text className="text-lg text-white">→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
