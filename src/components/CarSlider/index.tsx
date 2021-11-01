import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import * as S from './styles';

export type SliderProps = {
  imgUrl: string[];
}

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function CarSlider({ imgUrl }: SliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;

    setImageIndex(index);
  })

  return (
    <S.Container>
      <S.GroupDotsIndex>
        {imgUrl.map((dot, index) => (
          <S.Dots
            key={dot}
            active={index === imageIndex}
          />
        ))}
      </S.GroupDotsIndex>

      <FlatList
        data={imgUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <S.ContentImage>
            <S.CarImage
              source={{ uri: item }}
              resizeMode="contain"
            />
          </S.ContentImage>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  );
};