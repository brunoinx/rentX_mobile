import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import BrandSvg from '../../assets/icons/red_union.svg';
import LogoSvg from '../../assets/logo.svg';

import * as S from './styles';

export function SplashScreen() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -70],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [-70, 0]
          )
        }
      ]
    }
  });

  useEffect(() => {
    splashAnimation.value = withTiming(50,
      { duration: 1200 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    );
  }, []);


  function startApp() {
    navigation.navigate('Home');
  }

  return (
    <S.Container>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>

    </S.Container>
  );
}