import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  useAnimatedGestureHandler,
  Easing
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { CarProps } from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg'

import * as S from './styles';
import { api } from '../../services/api';

export function Home() {
  const [listCars, setListCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const animatedButton = useSharedValue(0);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive: ({ translationX, translationY }, ctx: any) => {
      positionX.value = ctx.positionX + translationX;
      positionY.value = ctx.positionY + translationY;
    },
    onEnd: () => {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  const jumpButton = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animatedButton.value,
        }
      ]
    }
  });

  const translateButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionX.value },
      { translateY: positionY.value }
    ]
  }));

  useEffect(() => {
    async function fetchCars() {
      setLoading(true);
      try {
        const { data } = await api.get('cars');

        setListCars(data);
      } catch (error) {
        console.log('Deu erro');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  function handleNavigateToCarDetails(car: CarProps) {
    navigation.navigate('CarDetails', { car });
  }

  function handleNavigateToMyCars() {
    animatedButton.value = withSequence(
      withTiming(-30, {
        duration: 300,
      }),
      withTiming(0, {
        duration: 500,
        easing: Easing.bounce,
      }),
    )

    setTimeout(() => {
      navigation.navigate('MyCars');
    }, 800);
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.HeaderWrapper>
          <Logo
            width={128}
            height={14}
          />

          <S.TotalCars>Total de {listCars.length} carros</S.TotalCars>
        </S.HeaderWrapper>
      </S.Header>

      {loading ? <Load />
        : (
          <>
            <S.ListCar
              data={listCars}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <S.WrapperCard>
                  <Car
                    data={item}
                    onPress={() => handleNavigateToCarDetails(item)}
                  />
                </S.WrapperCard>
              )}
            />

            <S.WrapperButton>
              <PanGestureHandler
                onGestureEvent={onGestureEvent}
              >
                <Animated.View style={[
                  jumpButton,
                  translateButtonStyle
                ]}>
                  <S.MyCarButton
                    onPress={handleNavigateToMyCars}
                  >
                    <S.CarIcon />
                  </S.MyCarButton>
                </Animated.View>
              </PanGestureHandler>
            </S.WrapperButton>
          </>
        )
      }
    </S.Container>
  )
}
