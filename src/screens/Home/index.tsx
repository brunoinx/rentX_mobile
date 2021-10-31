import React, { useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing
} from 'react-native-reanimated';

import { Car } from '../../components/Car';
import { CarProps } from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg'

import * as S from './styles';
import { api } from '../../services/api';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import { Load } from '../../components/Load';

export function Home() {
  const [listCars, setListCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const animatedButton = useSharedValue(0);

  const jumpButton = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animatedButton.value,
        }
      ]
    }
  });

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
        duration: 300,
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
              <Animated.View style={jumpButton}>
                <S.MyCarButton
                  onPress={handleNavigateToMyCars}
                >
                  <S.CarIcon />
                </S.MyCarButton>
              </Animated.View>
            </S.WrapperButton>
          </>
        )
      }
    </S.Container>
  )
}
