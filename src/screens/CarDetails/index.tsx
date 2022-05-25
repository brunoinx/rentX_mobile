import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
  useAnimatedScrollHandler,
  useAnimatedStyle
} from 'react-native-reanimated';

import { Button } from '../../components/Button';
import { Acessory } from '../../components/Acessory';
import { CarSlider } from '../../components/CarSlider';
import { BackButton } from '../../components/BackButton';

import { CarProps } from '../../dtos/CarDTO';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

import * as S from './styles';
import { maskMoney } from '../../utils/maskMoney';

type Params = {
  car: CarProps;
}

export function CarDetails() {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const { car } = params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(handler => {
    scrollY.value = handler.contentOffset.y;
  });

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value,
      [0, 200],
      [200, 30],
      Extrapolate.CLAMP
    ),
  }));

  const CarImageAnimatedOpaciy = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value,
      [0, 100],
      [1, 0],
      Extrapolate.CLAMP
    ),
  }));

  const priceFormatted = maskMoney(car.rent.price);

  function handleNavigateToScheduling() {
    navigate('Scheduling', { car });
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View
        style={[
          headerAnimatedStyle,
        ]}
      >
        <S.Header>
          <BackButton onPress={() => goBack()} />
        </S.Header>


        <Animated.View
          style={CarImageAnimatedOpaciy}
        >
          <CarSlider imgUrl={car.photos} />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 50,
          paddingHorizontal: 16
        }}
        overScrollMode="never"
        onScroll={scrollHandler}
        scrollEventThrottle={25}
      >
        <S.Detail>
          <S.Wrapper>
            <S.Label>{car.brand}</S.Label>
            <S.ModelText>{car.name}</S.ModelText>
          </S.Wrapper>

          <S.Wrapper>
            <S.Label>{car.rent.period}</S.Label>
            <S.PriceText>{priceFormatted}</S.PriceText>
          </S.Wrapper>
        </S.Detail>

        <S.WrapperAcessory>
          {car.accessories.map(acessory => (
            <Acessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />

          ))}
        </S.WrapperAcessory>

        <S.About>{car.about}</S.About>
        <S.About>{car.about}</S.About>
        <S.About>{car.about}</S.About>
      </Animated.ScrollView>

      <S.WrapperButton>
        <Button
          title="Escolher período do aluguel"
          onPress={handleNavigateToScheduling}
        />
      </S.WrapperButton>
    </S.Container>
  );
};