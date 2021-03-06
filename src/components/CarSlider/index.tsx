import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import * as S from './styles';

const dots = [
  {
    id: "1",
    active: true,
  },
  {
    id: "2",
    active: false,
  },
  {
    id: "3",
    active: false,
  },
  {
    id: "4",
    active: false,
  },
];

type Props = {
  imgUrl: string[];
}

export function CarSlider({ imgUrl }: Props) {
  const [active, setActive] = useState(false);

  return (
    <S.Container>
      <S.GroupDotsIndex>
        {dots.map(dot => (
          <S.Dots key={dot.id} active={dot.active} />
        ))}
      </S.GroupDotsIndex>

      <S.ContentImage>
        {imgUrl.map((img, idx) => (
          idx === 0 && (
            <S.CarImage
              key={img}
              source={{ uri: img }}
              resizeMode="contain"
            />
          )
        ))}
      </S.ContentImage>
    </S.Container>
  );
};