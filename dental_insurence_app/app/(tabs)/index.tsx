import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, Button, Animated } from 'react-native';
import { useRouter } from 'expo-router'; // ← IMPORTANTE

const IndexScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(0));
  const router = useRouter(); // ← ESSENCIAL

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/rm222-mind-16.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'deepskyblue', fontSize: 24, marginBottom: 20 }}>
          Bem-vindo ao DentalInsurance!
        </Text>
        <Text style={{ color: 'deepskyblue', fontSize: 30, marginBottom: 20 }}>⇧</Text>
        <Button title="SEJA BEM-VINDO!" onPress={() => router.push('/screens/home')} />
      </Animated.View>
    </ImageBackground>
  );
};

export default IndexScreen;
